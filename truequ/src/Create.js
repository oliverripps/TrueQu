import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';

function Create() {
  const createString = (digits) => {
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < digits; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    let ret = result.join('');
    const db = firebase.firestore();
    db.collection('allParties')
      .doc(ret)
      .get()
      .then((docSnapshot) => {
        if (docSnapshot.exists) {
          createString(4);
        } else {
          console.log('original!');
        }
      });
    return ret;
  };
  const [code, setCode] = useState();
  if (!code) {
    setCode(createString(4).slice());
  }
  const history = useHistory();
  history.push('/party/' + code);
  window.location.reload(false);
}

export default Create;
