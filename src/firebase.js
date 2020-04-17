import firebase from "firebase/app";
import 'firebase/database'

// const firebaseApp = Firebase.initializeApp({
//   apiKey: "AIzaSyBcu3TDjeZFhDKKPB_jJt-FnbY255GfXXo",
//   authDomain: "walldrops-d3df3.firebaseapp.com",
//   databaseURL: "https://walldrops-d3df3.firebaseio.com",
//   projectId: "walldrops-d3df3",
//   storageBucket: "walldrops-d3df3.appspot.com",
//   messagingSenderId: "150952646310",
//   appId: "1:150952646310:web:de6b162f7d9bd5217f8667"
// });

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebase
.initializeApp({databaseURL:"https://walldrops-d3df3.firebaseio.com"})
.database()
