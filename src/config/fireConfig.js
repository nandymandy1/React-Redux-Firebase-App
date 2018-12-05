import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCgOFo6be0iOfB7j89A8dyhennA4yokFbM",
    authDomain: "react-redux-firestore-project.firebaseapp.com",
    databaseURL: "https://react-redux-firestore-project.firebaseio.com",
    projectId: "react-redux-firestore-project",
    storageBucket: "react-redux-firestore-project.appspot.com",
    messagingSenderId: "790452359753"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;