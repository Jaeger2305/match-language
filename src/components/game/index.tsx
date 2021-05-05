import './index.css';
import Card from '../card'

export default function game() {
  return (
    <div className="App">
      <div className="play-area">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
