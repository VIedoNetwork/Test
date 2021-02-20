import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB8llRfh66g-NF-8gJp8HTB3hEFMOsbJOY",
    authDomain: "testonlineexam-90d2b.firebaseapp.com",
    databaseURL: "https://testonlineexam-90d2b-default-rtdb.firebaseio.com",
    projectId: "testonlineexam-90d2b",
    storageBucket: "testonlineexam-90d2b.appspot.com",
    messagingSenderId: "624292947118",
    appId: "1:624292947118:web:6700a0d829640985d9793f",
    measurementId: "G-0HF367S9BF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore(); 

export default firebase;