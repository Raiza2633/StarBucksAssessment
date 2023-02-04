import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCAuLpqHFUufsORvjXmh2RGAUJGVTrjFvE",
    authDomain: "starbucks-7c5bb.firebaseapp.com",
    projectId: "starbucks-7c5bb",
    storageBucket: "starbucks-7c5bb.appspot.com",
    messagingSenderId: "137981186618",
    appId: "1:137981186618:web:726e75a21d78a894405b03"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }