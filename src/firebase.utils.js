import firebase from "firebase/app";
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyBYjYtT0tLbbmcF1uUz0amV5Qa9t6dzmio",
    authDomain: "teamprecisiossn.firebaseapp.com",
    projectId: "teamprecisiossn",
    storageBucket: "teamprecisiossn.appspot.com",
    messagingSenderId: "429791639869",
    appId: "1:429791639869:web:718190e3d4b76b31416d54"
};

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage() 

export default firebase;