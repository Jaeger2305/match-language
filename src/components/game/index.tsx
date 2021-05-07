import './index.css';
import Card from '../card'
import MatchModal from '../match-modal'
import Stats from '../stats'

export default function game() {
  return (
    <div className="App">
      <div className="match-modal">
        <MatchModal />
      </div>
      <div className="play-area"></div>
      <div className="player-1-area">
        <Card />
      </div>
      <div className="shared-area">
        <Card />
      </div>
      <div className="player-2-area">
        <Card />
      </div>
      <div className="stats">
        <Stats />
      </div>
    </div>
  );
}
