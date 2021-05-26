import {TranslationKey} from "./localisation";
import {generateCards} from "./utils";

export type Matchable = {
  translationKey: TranslationKey;
  pos: Position;
  transform: {scale: number; rotate: number};
};

export type Position = {
  x: number;
  y: number;
};

export type Card = {
  id: string;
  matchables: Array<Matchable>;
};

// generate random positions
function generatePositionsArray(
  diameter = 230,
  divisions = 3,
  irregularity = 10,
  offset = 40,
  curvatureStrength = 100
): Array<Position> {
  // declarations
  const positionsArray = [];
  var r, c;
  const separationPixels = diameter / divisions;
  // loop through rows
  for (r = 0; r < divisions; r += 1) {
    const isOverOrEqualHalfWayRow = r + 1 > Math.floor(divisions / 2);
    const distanceToBottomEdge = isOverOrEqualHalfWayRow
      ? divisions - r - 1
      : r;
    const curvatureRow = distanceToBottomEdge / divisions;
    // loop through columns
    for (c = 0; c < divisions; c += 1) {
      const isOverOrEqualHalfWayCol = c + 1 > Math.floor(divisions / 2);
      const distanceToRightEdge = isOverOrEqualHalfWayCol
        ? divisions - c - 1
        : c;
      const curvatureCol = distanceToRightEdge / divisions;
      const curvatureRowOffset =
        curvatureRow * curvatureStrength * (isOverOrEqualHalfWayCol ? 1 : -1);
      const curvatureColOffset =
        curvatureCol * curvatureStrength * (isOverOrEqualHalfWayRow ? 1 : -1);
      const isTopOrBotMid = !curvatureRow && curvatureCol;
      const isLeftOrRightMid = curvatureRow && !curvatureCol;

      // populate array with point object
      const position = {
        x:
          Math.round(separationPixels * c) +
          offset +
          (isLeftOrRightMid ? curvatureRowOffset : 0) +
          getRandomInt(irregularity * -1, irregularity),
        y:
          Math.round(separationPixels * r) +
          offset +
          (isTopOrBotMid ? curvatureColOffset : 0) +
          getRandomInt(irregularity * -1, irregularity),
      };
      positionsArray.push(position);
    }
  }
  // return array
  return positionsArray;
}
// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + 0.5) + min;
}

function getRandomPosition(array: Array<Position>): Position {
  // declarations
  var randomIndex;
  var coordinates;
  // get random index
  randomIndex = getRandomInt(0, array.length - 1);
  // get random item from array
  coordinates = array[randomIndex];
  // check if remove taken
  // remove element from array
  array.splice(randomIndex, 1);
  // return position
  return coordinates;
}

export const cards: Array<Card> = generateCards(7).map(
  (matchableIds, index, arr) => {
    console.log(arr);
    const mappedTranslationsToId = Object.values(TranslationKey);
    const positions = generatePositionsArray();
    return {
      id: String(index),
      matchables: matchableIds.map((matchableId) => {
        if (!mappedTranslationsToId[matchableId]) debugger;
        return {
          translationKey: mappedTranslationsToId[matchableId],
          pos: getRandomPosition(positions),
          transform: {scale: Math.random() + 0.5, rotate: Math.random() * 360},
        };
      }),
    };
  }
);
