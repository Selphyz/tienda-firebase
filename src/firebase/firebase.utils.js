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
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        } catch (error) {
            console.log('error creacion de usuario', error.message);
        }
    }
    return userRef;
}
export const addCollectionAddDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    return await batch.commit();
}
export const convertCollectionsSnapshotToMap = collections => {
    const trasformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id, title, items
        };
    });
    console.log(trasformedCollection);
    return trasformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;