import logo from './images/TrueQuLogo.png';
import Turntable from './images/TurnTable.png';
import Alert from '@material-ui/lab/Alert';
import './Desktop.css';

function DesktopVersion() {
  return (
    <div className="App">
      <Alert severity="info">
        TrueQu is a mobile application and can only be accessed through a phone!
        Pull out your phone!
      </Alert>
      <div classname="alert">
        <a className="instalink" href="https://www.instagram.com/truequmusic/">
          <div>
            <img src={Turntable} className="turn-table" alt="logo" />
            <img src={logo} className="Applogo" alt="logo" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default DesktopVersion;
