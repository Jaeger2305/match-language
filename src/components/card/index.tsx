import {Card, Matchable} from "../../game";
import MatchableComponent from "../matchable";
import "./index.css";

export default function CardComponent({
  card,
  isAnimated,
  flashMatchModal,
  moveCard,
  matchingCard,
}: {
  card: Card;
  isAnimated: boolean;
  flashMatchModal: (matchable: Matchable) => void;
  moveCard?: (card: Card) => void;
  matchingCard?: (source: Card, matchable: Matchable) => Card | null;
}) {
  function attemptMatch(translationKey: Matchable): boolean {
    if (!moveCard || !matchingCard) return false;
    const match = matchingCard(card, translationKey);
    if (match) {
      setTimeout(() => moveCard(match), 1000);
      flashMatchModal(translationKey);
    }
    return Boolean(match);
  }

  const matchablesNodes = card.matchables.map((matchable) => {
    return (
      <MatchableComponent
        key={matchable.translationKey}
        isAnimated={isAnimated}
        attemptMatch={attemptMatch}
        matchable={matchable}
      />
    );
  });
  return (
    <div className={`card ${isAnimated ? "animated" : ""}`}>
      {matchablesNodes}
    </div>
  );
}
