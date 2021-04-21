import logo from './images/TrueQuLogo.png';
import Turntable from './images/TurnTable.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logocontent">
        <a className="instalink" href="https://www.instagram.com/truequmusic/">
          <div>
            <img src={Turntable} className="turn-table" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </a>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2> Democratizing Your Queue</h2>
        <h2> Coming Soon!</h2>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>Created by Oliver Ripps and Elliot Tufaro 2021</p>
    </div>
  );
}

export default App;
