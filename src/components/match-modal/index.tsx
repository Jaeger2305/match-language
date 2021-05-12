import {Matchable} from "../../game";
import "./index.css";

export default function matchModal({match}: {match: Matchable}) {
  return (
    <div className="modal">
      <div className="match-name reflected">{match.translationKey}</div>
      <div className="match-name">{match.translationKey}</div>
    </div>
  );
}
