import {Card, Matchable} from "../../game";
import "./index.css";

export default function CardComponent({
  card,
  flashMatchModal,
  moveCard,
  matchingCard,
}: {
  card: Card;
  flashMatchModal: (matchable: Matchable) => void;
  moveCard?: (card: Card) => void;
  matchingCard?: (source: Card, matchable: Matchable) => Card | null;
}) {
  function attemptMatch(translationKey: Matchable): void {
    if (!moveCard || !matchingCard) return;
    const match = matchingCard(card, translationKey);
    if (match) {
      moveCard(match);
      flashMatchModal(translationKey);
    }
  }

  const matchablesNodes = card.matchables.map((matchable) => {
    return (
      <img
        key={matchable.translationKey}
        src={`/dobble-icons/${matchable.translationKey}.png`}
        alt={matchable.translationKey}
        className="matchable"
        style={{
          left: matchable.pos.x,
          top: matchable.pos.y,
          transform: `scale(${matchable.transform.scale}) rotate(${matchable.transform.rotate}deg)`,
        }}
        onClick={() => attemptMatch(matchable)}
      />
    );
  });
  return <div className="card">{matchablesNodes}</div>;
}
