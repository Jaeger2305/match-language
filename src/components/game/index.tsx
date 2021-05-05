import './index.css';
import Card from '../card'
import MatchModal from '../match-modal'

export default function game() {
  return (
    <div className="App">
      <div className="match-modal">
        <MatchModal />
      </div>
      <div className="play-area">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
