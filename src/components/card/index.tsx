import { Card } from '../../game';
import './index.css';

export default function card(props: {card: Card}) {
  const matchablesNodes = props.card.matchables.map(({ translationKey }) => <div className="matchable">{translationKey}</div>)
  return (
    <div className="card">
      {matchablesNodes}
    </div>
  );
}
