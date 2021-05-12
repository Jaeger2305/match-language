import {TranslationKey} from "./localisation";
import {generateCards} from "./utils";

export type Matchable = {
  translationKey: TranslationKey;
};

export type Card = {
  id: string;
  matchables: Array<Matchable>;
};

export const cards: Array<Card> = generateCards(7).map(
  (matchableIds, index) => {
    const mappedTranslationsToId = Object.values(TranslationKey);
    return {
      id: String(index),
      matchables: matchableIds.map((matchableId) => ({
        translationKey: mappedTranslationsToId[matchableId],
      })),
    };
  }
);
