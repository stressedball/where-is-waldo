import 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { getFirebaseConfig } from "../firebase-config";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInAnonymously } from "firebase/auth";

const firebaseConfig = getFirebaseConfig()
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function fetchData() {
    let characters = []
    let picture = { width: 0, height: 0 }
    try {
        await getDocs(collection(db, "areas")).then((response) => {
            response.forEach((doc) => {
                characters.push(doc.data());
            })
        })
        // areas.forEach((doc) => {
        // })
        await getDocs(collection(db, "picture")).then((data) => {
            const playground = data.docs[0].data();
            picture = { width: playground.width, height: playground.height };
        });
        return { picture: picture, characters: characters }
    } catch (error) {
        console.error('error getting documents', error);
    }
}

async function setData(arr, handle, name) {
    if (handle === 'anonymous') {
        await addDoc(collection(db, "times"), {
            time: arr,
            name: name
        })
    } else {
        const provider = new GoogleAuthProvider()
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(credential)
                console.log(token)
                console.log(user)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
}

async function getTimes() {
    let listOfTimes = []
    try {
        await getDocs(collection(db, "times")).then((response) => {
            response.forEach((doc) => {
                const name = doc.data().name
                const time = doc.data().time
                const entry = { name, time }
                listOfTimes.push(entry);
            })
        })
        return listOfTimes
    } catch (error) {
        console.error('error getting documents', error);
    }
}
export {
    setData,
    fetchData,
    getTimes
}