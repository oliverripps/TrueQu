import Home from './Home.js';
import firebase from 'firebase';
import firestore from './Firestore';

function Party(props) {
  let partypath = window.location.pathname.slice(7);
  const db = firebase.firestore();
  const partyRef = db.collection('allParties').doc(partypath).set({});
  const activePartyRef = db.collection('activeParties').doc(partypath).set({
    partyCode: partypath,
    queue: [],
  });
  return (
    <div className="App">
      {' '}
      <Home />
      {partypath}
    </div>
  );
}

export default Party;
