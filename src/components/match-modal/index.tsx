import {Matchable} from "../../game";
import "./index.css";
import {translations} from "../../localisation";
import {GameSettingsContext} from "../../stores/game-settings";
import {useContext} from "react";

export default function MatchModal({match}: {match: Matchable}) {
  const {state} = useContext(GameSettingsContext);
  return (
    <div className="modal">
      <div className="match-name reflected">
        {translations[state.language!][match.translationKey]}
      </div>
      <div className="match-name">
        {translations[state.language!][match.translationKey]}
      </div>
    </div>
  );
}
