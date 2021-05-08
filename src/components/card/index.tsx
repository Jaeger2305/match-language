import {Card, Matchable} from "../../game";
import "./index.css";

export default function card({
  card,
  moveCard,
  matchingCard,
}: {
  card: Card;
  moveCard?: (card: Card) => void;
  matchingCard?: (source: Card, matchable: Matchable) => Card | null;
}) {
  function attemptMatch(translationKey: Matchable): void {
    if (!moveCard || !matchingCard) return;
    const match = matchingCard(card, translationKey);
    if (match) {
      moveCard(match);
    }
  }

  const matchablesNodes = card.matchables.map((matchable) => (
    <div
      className="matchable"
      key={matchable.translationKey}
      onClick={() => attemptMatch(matchable)}
    >
      {matchable.translationKey}
    </div>
  ));
  return <div className="card">{matchablesNodes}</div>;
}
