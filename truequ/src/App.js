import Homescreen from './Homescreen';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Create from './Create.js';
import Join from './Join.js';
import './App.css';
import DesktopVersion from './DesktopVersion.js';
import { BrowserView, MobileView } from 'react-device-detect';

function App() {
  return (
    <div className="App">
      <MobileView>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Homescreen />
            </Route>
            <Route path="/create" exact>
              <Create />
            </Route>
            <Route path="/join" exact>
              <Join />
            </Route>
          </Switch>
        </Router>
        {/*       <div className="bottomtext">
        <p>Created by Oliver Ripps and Elliot Tufaro 2021</p>
      </div>{' '}
      */}
      </MobileView>
      <BrowserView>
        <DesktopVersion />
      </BrowserView>
    </div>
  );
}

export default App;
