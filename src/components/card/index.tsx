import {Card, Matchable} from "../../game";
import "./index.css";

export default function card({
  card,
  moveCard,
  matchingCard,
}: {
  card: Card;
  moveCard?: (card: Card) => void;
  matchingCard?: (source: Card, matchable: Matchable) => Card | null;
}) {
  function attemptMatch(translationKey: Matchable): void {
    if (!moveCard || !matchingCard) return;
    const match = matchingCard(card, translationKey);
    if (match) {
      moveCard(match);
    }
  }

  type Position = {
    x: number;
    y: number;
  };

  var positions: Array<Position> = [];

  // Returns a random integer between min (included) and max (excluded)
  // Using Math.round() will give you a non-uniform distribution!
  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // generate random positions
  function generatePositionsArray(
    maxX: number,
    maxY: number,
    safeRadius: number,
    irregularity: number
  ): Array<Position> {
    // declarations
    var positionsArray = [];
    var r, c;
    var rows;
    var columns;
    // count the amount of rows and columns
    rows = Math.floor(maxY / safeRadius);
    columns = Math.floor(maxX / safeRadius);
    // loop through rows
    for (r = 1; r <= rows; r += 1) {
      // loop through columns
      for (c = 1; c <= columns; c += 1) {
        // populate array with point object
        positionsArray.push({
          x:
            Math.round((maxX * c) / columns) +
            getRandomInt(irregularity * -1, irregularity),
          y:
            Math.round((maxY * r) / rows) +
            getRandomInt(irregularity * -1, irregularity),
        });
      }
    }
    // return array
    return positionsArray;
  }
  positions = generatePositionsArray(220, 220, 60, 15);
  function getRandomPosition(
    array: Array<Position>,
    removeTaken: boolean
  ): Position {
    // declarations
    var randomIndex;
    var coordinates;
    // get random index
    randomIndex = getRandomInt(0, array.length - 1);
    // get random item from array
    coordinates = array[randomIndex];
    // check if remove taken
    if (removeTaken) {
      // remove element from array
      array.splice(randomIndex, 1);
    }
    // return position
    return coordinates;
  }

  const matchablesNodes = card.matchables.map((matchable) => {
    const pos = getRandomPosition(positions, true);

    return (
      <div
        className="matchable"
        key={matchable.translationKey}
        onClick={() => attemptMatch(matchable)}
        style={{
          left: pos.x,
          top: pos.y,
          transform: `scale(${Math.random() + 0.5}) rotate(${
            Math.random() * 360
          }deg)`,
        }}
      >
        {matchable.translationKey}
      </div>
    );
  });
  return <div className="card">{matchablesNodes}</div>;
}
