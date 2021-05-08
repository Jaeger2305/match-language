import "./index.css";
import CardComponent from "../card";
import MatchModal from "../match-modal";
import Stats from "../stats";
import {Language} from "../../localisation";
import {ReactNode, useState} from "react";
import {Card, cards} from "../../game";
import {shuffle} from "lodash";

const primaryLanguage = Language.English;
const secondaryLanguage = Language.German;

export default function Game() {
  const gameCards = shuffle(cards);
  const [player1Hand, setPlayer1Hand] = useState([gameCards.pop()!]);
  const [player2Hand, setPlayer2Hand] = useState([gameCards.pop()!]);
  const [deck, setDeck] = useState(gameCards);

  function renderCardStack(stack: Array<Card>): ReactNode {
    if (stack.length) {
      return <CardComponent card={stack.slice(-1)[0]} />
    }

    return <div style={{background: "black"}} />
  }

  return (
    <div className="App">
      <div className="match-modal">
        <MatchModal />
      </div>
      <div className="play-area"></div>
      <div className="player-1-area">
        {renderCardStack(player1Hand)}
      </div>
      <div className="shared-area">
        {renderCardStack(deck)}
      </div>
      <div className="player-2-area">
        {renderCardStack(player2Hand)}
      </div>
      <div className="stats">
        <Stats />
      </div>
    </div>
  );
}
