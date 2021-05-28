import {Language} from "../../localisation";
import {
  GameSettingsContext,
  GameSettingsActionLookup,
} from "../../stores/game-settings";
import {useContext} from "react";

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
    <div className="modal">
      <select onChange={handleLanguageSelect} value={state.language}>
        <option value={undefined}></option>
        {Object.entries(Language).map(([language, key]) => (
          <option value={key}>{language}</option>
        ))}
      </select>
    </div>
  );
}
