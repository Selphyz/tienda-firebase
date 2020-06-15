import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCyWQ_2KnFhwMekj57Y3rmweCN5PafGMBM",
    authDomain: "backend-react-graphql.firebaseapp.com",
    databaseURL: "https://backend-react-graphql.firebaseio.com",
    projectId: "backend-react-graphql",
    storageBucket: "backend-react-graphql.appspot.com",
    messagingSenderId: "275098824790",
    appId: "1:275098824790:web:d884b667c6af1d69dacbf7",
    measurementId: "G-WHZSJEK2JJ"
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;