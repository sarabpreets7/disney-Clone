import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAmfqzKCtjaZ7ZWGHpqQeKD7iYS7VWSZT4",
    authDomain: "disney-clone-16a3d.firebaseapp.com",
    projectId: "disney-clone-16a3d",
    storageBucket: "disney-clone-16a3d.appspot.com",
    messagingSenderId: "369606203144",
    appId: "1:369606203144:web:98b8caf30b3d699f30febd"
  };


  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
//const provider = new firebase.auth.GoogleAuthProvider();
const firestore = firebase.firestore()
const storage = firebase.storage();
export const database  ={
    users: firestore.collection('users'),
    movies: firestore.collection('movies'),
    createdAt: firestore.FieldValue
}
export { auth, storage ,firebaseConfig};

export default firebase;