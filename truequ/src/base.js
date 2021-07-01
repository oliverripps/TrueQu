import firebase from 'firebase/app';
import 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyDVSYQiZBTbbJ-Z1ijw_k2q_b3hjzqJM7Q',
  authDomain: 'truequ-d45ba.firebaseapp.com',
  databaseURL: 'https://truequ-d45ba-default-rtdb.firebaseio.com',
  projectId: 'truequ-d45ba',
  storageBucket: 'truequ-d45ba.appspot.com',
  messagingSenderId: '200049890400',
  appId: '1:200049890400:web:730ff31721f68dae4d1f05',
  measurementId: 'G-YBS339H8S2',
};
// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
