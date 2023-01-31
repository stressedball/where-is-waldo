const config = {
    apiKey: "AIzaSyDtONoiYDTaa3CSazOu5FWnpC8YoT0uQIQ",
    authDomain: "where-is-waldo-df6c5.firebaseapp.com",
    projectId: "where-is-waldo-df6c5",
    storageBucket: "where-is-waldo-df6c5.appspot.com",
    messagingSenderId: "327478842170",
    appId: "1:327478842170:web:ecfb2e2306de38128bb603"
};
export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
        throw new Error('No Firebase configuration object provided.' + '\n' +
            'Add your web app\'s configuration object to firebase-config.js');
    } else {
        return config;
    }
}