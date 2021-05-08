import {Card} from "../../game";
import "./index.css";

export default function Stats({
  player1Hand,
  player2Hand,
}: {
  player1Hand: Array<Card>;
  player2Hand: Array<Card>;
}) {
  return (
    <div>
      <div className="stats reflected">{player1Hand.length}</div>
      <div className="stats">{player2Hand.length}</div>
    </div>
  );
}
