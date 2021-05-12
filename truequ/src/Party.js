import Home from './Home.js';

function Party() {
   let partypath = window.location.pathname.slice(7);
  return (
    <div className="App">
      {' '}
      <Home />
      {partypath}
    </div>
  );
}

export default Party;
