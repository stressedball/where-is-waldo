import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";


async function getPictureData() {
    let picture = { width: 0, height: 0 }
    return firebase.firestore().collection("picture").get().then((data) => {
        const firstDoc = data.docs[0];
        picture.width = firstDoc.data().width;
        picture.height = firstDoc.data().height;
        return picture
    }).catch((error) => {
        console.log("Error getting documents: ", error);
    });
}
async function getCharacters() {
    let data = []
    return firebase.firestore().collection('areas').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const value = doc.data()
            data.push(value)
        });
        return data
    });
}
export { getPictureData, getCharacters }