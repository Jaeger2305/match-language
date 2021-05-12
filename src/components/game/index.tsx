import "./index.css";
import CardComponent from "../card";
import MatchModal from "../match-modal";
import Stats from "../stats";
// import {Language} from "../../localisation";
import {ReactNode, useState} from "react";
import {Card, cards, Matchable} from "../../game";
import {shuffle} from "lodash";

// const primaryLanguage = Language.English;
// const secondaryLanguage = Language.German;

export default function Game() {
  const gameCards = shuffle(cards);
  const [player1Hand, setPlayer1Hand] = useState<Array<Card>>([
    gameCards.pop()!,
  ]);
  const [player2Hand, setPlayer2Hand] = useState<Array<Card>>([
    gameCards.pop()!,
  ]);
  const [deck, setDeck] = useState<Array<Card>>(gameCards);

  const [activeMatch, setActiveMatch] = useState<Matchable | null>(null);

  function matchingCard(
    source: Card,
    destination: Card,
    matchable: Matchable
  ): Card | null {
    return destination.matchables.find(
      ({translationKey}) => translationKey === matchable.translationKey
    )
      ? destination
      : null;
  }

  function moveCard(
    source: Array<Card>,
    sourceSetter: React.Dispatch<React.SetStateAction<Card[]>>,
    destination: Array<Card>,
    destinationSetter: React.Dispatch<React.SetStateAction<Card[]>>,
    card: Card
  ): void {
    const newSource = source.filter(({id}) => id !== card.id);
    sourceSetter(newSource);
    const newDestination = destination.concat(card);
    destinationSetter(newDestination);
  }

  function renderCardStack(stack: Array<Card>): ReactNode {
    if (stack.length) {
      return (
        <CardComponent
          flashMatchModal={flashMatchModal}
          card={stack.slice(-1)[0]}
        />
      );
    }

    return (
      <div style={{background: "black", height: "100px", width: "100px"}} />
    );
  }

  function flashMatchModal(
    matchable: Matchable,
    flashMilliseconds: number = 1000
  ) {
    setActiveMatch(matchable);
    window.setTimeout(() => setActiveMatch(null), flashMilliseconds);
  }

  function renderMatchModal() {
    if (activeMatch)
      return (
        <div className="match-modal">
          <MatchModal match={activeMatch} />
        </div>
      );
  }

  return (
    <div className="App">
      {renderMatchModal()}
      <div className="play-area"></div>
      <div className="player-1-area">
        <CardComponent
          card={player1Hand.slice(-1)[0]}
          flashMatchModal={flashMatchModal}
          moveCard={(card: Card) =>
            moveCard(deck, setDeck, player1Hand, setPlayer1Hand, card)
          }
          matchingCard={(source: Card, matchable: Matchable) =>
            matchingCard(source, deck.slice(-1)[0], matchable)
          }
        />
      </div>
      <div className="shared-area">{renderCardStack(deck)}</div>
      <div className="player-2-area">
        <CardComponent
          card={player2Hand.slice(-1)[0]}
          flashMatchModal={flashMatchModal}
          moveCard={(card: Card) =>
            moveCard(deck, setDeck, player2Hand, setPlayer2Hand, card)
          }
          matchingCard={(source: Card, matchable: Matchable) =>
            matchingCard(source, deck.slice(-1)[0], matchable)
          }
        />
      </div>
      <div className="stats">
        <Stats player1Hand={player1Hand} player2Hand={player2Hand} />
      </div>
    </div>
  );
}
