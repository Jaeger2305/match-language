import {Language} from "../../localisation";

export type State = {
  language?: Language;
};

export enum ActionLookup {
  SetLanguage = "SET_LANGUAGE",
}

type Action = {
  type: ActionLookup;
  payload: Language;
};

// Probably doesn't need to be a reducer, but was useful to learn this.
// Maybe settings gets expanded to justify this.
export const Reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionLookup.SetLanguage:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};
