import Home from './Home.js';
import firebase from 'firebase';
import firestore from './Firestore';
import { useState } from 'react';

function Party(props) {
  const [firstSession, setFirstSession] = useState(true);
  let partypath = window.location.pathname.slice(7);
  const db = firebase.firestore();
  const [exists, setExists] = useState();
  const partyRef = db.collection('allParties').doc(partypath);
  partyRef.get().then((docSnapshot) => {
    if (docSnapshot.exists) {
      setExists(true);
    } else {
      setExists(false);
    }
  });
  if (exists != null && firstSession) {
    console.log(exists);
    let once = true;
    if (exists) {
      db.collection('activeParties')
        .doc(partypath)
        .update({
          users: firebase.firestore.FieldValue.increment(0.5),
        })
        .then(console.log('added user'));
      once = false;
    } else {
      partyRef.set({});
      db.collection('activeParties').doc(partypath).set({
        partyCode: partypath,
        queue: [],
        users: 1,
      });
    }
    setFirstSession(false);
  }
  var SpotifyWebApi = require('spotify-web-api-node');

  /* var spotifyApi = new SpotifyWebApi({});
  spotifyApi.setAccessToken('<your_access_token>');
  spotifyApi.searchTracks('Love').then(
    function (data) {
      console.log('Search by "Love"', data.body);
    },
    function (err) {
      console.error(err);
    }
  ); */
  return (
    <div className="App">
      {' '}
      <Home />
      Party Code: <b>{partypath} </b>
    </div>
  );
}

export default Party;
