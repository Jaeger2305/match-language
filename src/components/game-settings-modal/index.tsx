import {Language} from "../../localisation";
import {
  GameSettingsContext,
  GameSettingsActionLookup,
} from "../../stores/game-settings";
import {useContext} from "react";
import "./index.css";

export default function GameSettingsModal() {
  const {state, dispatch} = useContext(GameSettingsContext);
  function handleLanguageSelect(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    dispatch({
      type: GameSettingsActionLookup.SetLanguage,
      payload: event.target.value,
    });
  }
  return (
    <div>
      <select
        onChange={handleLanguageSelect}
        defaultValue={undefined}
        value={state.language}
      >
        <option value={undefined} disabled selected>
          Pick a language
        </option>
        {Object.entries(Language).map(([language, key]) => (
          <option value={key}>{language}</option>
        ))}
      </select>
    </div>
  );
}
