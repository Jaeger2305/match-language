import {TranslationKey} from "./localisation";

export type Matchable = {
  translationKey: TranslationKey;
};

export type Card = {
  id: string;
  matchables: Array<Matchable>;
};

export const cards: Array<Card> = [
  {
    id: "1",
    matchables: [
      {
        translationKey: TranslationKey.Snowman,
      },
      {
        translationKey: TranslationKey.Sun,
      },
      {
        translationKey: TranslationKey.Sunglasses,
      },
      {
        translationKey: TranslationKey.Taxi,
      },
    ],
  },
  {
    id: "2",
    matchables: [
      {
        translationKey: TranslationKey.Hand,
      },
      {
        translationKey: TranslationKey.Ice,
      },
      {
        translationKey: TranslationKey.OrangeMan,
      },
      {
        translationKey: TranslationKey.Snowflake,
      },
    ],
  },
  {
    id: "3",
    matchables: [
      {
        translationKey: TranslationKey.Hand,
      },
      {
        translationKey: TranslationKey.Ice,
      },
      {
        translationKey: TranslationKey.OrangeMan,
      },
      {
        translationKey: TranslationKey.Sunglasses,
      },
      {
        translationKey: TranslationKey.Taxi,
      },
    ],
  },
];
