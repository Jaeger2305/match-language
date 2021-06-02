import {useState} from "react";
import {Matchable} from "../../game";
import "./index.css";

export default function MatchableComponent({
  matchable,
  attemptMatch,
}: {
  matchable: Matchable;
  attemptMatch: (matchable: Matchable) => boolean;
}) {
  const [isGoodMatch, setIsGoodMatch] = useState(false);
  const [isBadMatch, setIsBadMatch] = useState(false);

  function selectMatch(translationKey: Matchable): void {
    const isMatch = attemptMatch(translationKey);
    if (isMatch) setIsGoodMatch(true);
    else setIsBadMatch(true);
  }

  return (
    <img
      key={matchable.translationKey}
      src={`/dobble-icons/${matchable.translationKey}.png`}
      alt={matchable.translationKey}
      className={`matchable ${isGoodMatch ? "good-match" : ""} ${
        isBadMatch ? "bad-match" : ""
      }`}
      style={{
        left: matchable.pos.x,
        top: matchable.pos.y,
        transform: `scale(${matchable.transform.scale}) rotate(${matchable.transform.rotate}deg)`,
      }}
      onClick={() => selectMatch(matchable)}
    />
  );
}
