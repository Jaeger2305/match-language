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
        translationKey: TranslationKey.Glasses,
      },
      {
        translationKey: TranslationKey.Car,
      },
    ],
  },
  {
    id: "2",
    matchables: [
      {
        translationKey: TranslationKey.Dobble,
      },
      {
        translationKey: TranslationKey.Icecube,
      },
      {
        translationKey: TranslationKey.Man,
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
        translationKey: TranslationKey.Dobble,
      },
      {
        translationKey: TranslationKey.Icecube,
      },
      {
        translationKey: TranslationKey.Man,
      },
      {
        translationKey: TranslationKey.Glasses,
      },
      {
        translationKey: TranslationKey.Car,
      },
    ],
  },
];
