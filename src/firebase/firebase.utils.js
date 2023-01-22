import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDr2mBGBspUrUXIvSU6qonYhnwLp0WGS_s",
    authDomain: "clothing-app-f3b92.firebaseapp.com",
    projectId: "clothing-app-f3b92",
    storageBucket: "clothing-app-f3b92.appspot.com",
    messagingSenderId: "182902786296",
    appId: "1:182902786296:web:d1f515090468fb2037130d",
    measurementId: "G-PGFLM4VJR1"
};


export const createUserProfileDocument = async (userAuth,additionalData) =>{
    if ( ! userAuth) return;
    const userRef = firestore.doc(`users/:${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,...additionalData
            })
        } catch (error) {
            console.log(error.message)
        }

    }
    return userRef;
    
}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
