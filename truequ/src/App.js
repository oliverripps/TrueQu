import Homescreen from './Homescreen';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Create from './Create.js';
import Join from './Join.js';
import './App.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
