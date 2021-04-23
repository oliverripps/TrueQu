import logo from './images/TrueQuLogo.png';
import Turntable from './images/TurnTable.png';
import './Spinlogo.css';

function Spinlogo() {
  return (
    <div className="logocontent">
      <a className="instalink" href="https://www.instagram.com/truequmusic/">
        <div>
          <img src={Turntable} className="turn-table" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </a>
    </div>
  );
}

export default Spinlogo;
