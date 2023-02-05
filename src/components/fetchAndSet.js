import 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { getFirebaseConfig } from "../firebase-config";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = getFirebaseConfig()
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

async function fetchData() {
    
    let characters = []
    let picture = { width: 0, height: 0 }

    try {
        await getDocs(collection(db, "areas")).then((response) => {
            response.forEach((doc) => {
                characters.push(doc.data());
            })
        })
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
    let userId = null

    if (handle === 'anonymous') {
        await addDoc(collection(db, "times"), {
            time: arr,
            name: name
        })

    } else {
        const provider = new GoogleAuthProvider()
        await signInWithPopup(auth, provider)
            .then((result) => {
                userId = result.user.uid
            }).catch((error) => {
                console.log('Error authenticating via Google', error)
            })
        await addDoc(collection(db, 'times'), {
            name: name,
            time: arr,
            id: userId
        })
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

async function getLoggedUser() {

    let userData = []

    const uid = await checkStatus()

    try {
        await getDocs(collection(db, 'times')).then((docs) => {
            docs.forEach((doc) => {
                if (doc.data().id === uid) {
                    userData.push(doc.data())
                }
            })
        })

    } catch (error) {
        console.error('error getting user times', error);
    }
    return userData
}
function checkStatus() {

    return new Promise((res) => {

        let uid = null

        onAuthStateChanged(auth, (user) => {
            if (user) {
                uid = user.uid;
                res(uid)
            } else {
                res(null)
            }
        });
    })
}
export {

    setData,
    fetchData,
    getTimes,
    getLoggedUser
}