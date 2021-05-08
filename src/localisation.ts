export enum Language {
  English = "en",
  German = "de",
}

export enum TranslationKey {
  Hand = "hand",
  OrangeMan = "orangeMan",
  Ice = "ice",
  Snowflake = "snowflake",
  Snowman = "snowman",
  Taxi = "taxi",
  Sun = "sun",
  Sunglasses = "sunglasses",
}

export const translations: Record<Language, Record<TranslationKey, string>> = {
  [Language.English]: {
    [TranslationKey.Hand]: "Hand",
    [TranslationKey.OrangeMan]: "Orange man",
    [TranslationKey.Ice]: "Ice",
    [TranslationKey.Snowflake]: "Snowflake",
    [TranslationKey.Snowman]: "Snowman",
    [TranslationKey.Taxi]: "Taxi",
    [TranslationKey.Sun]: "Sun",
    [TranslationKey.Sunglasses]: "Sun",
  },
  [Language.German]: {
    [TranslationKey.Hand]: "Hand",
    [TranslationKey.OrangeMan]: "Orangen Mann",
    [TranslationKey.Ice]: "Eis",
    [TranslationKey.Snowflake]: "Schneeflocke",
    [TranslationKey.Snowman]: "Schneemann",
    [TranslationKey.Taxi]: "Auto",
    [TranslationKey.Sun]: "Sonne",
    [TranslationKey.Sunglasses]: "Sonnenbrille",
  },
};
