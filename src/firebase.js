// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from 'firebase';
  
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAoGo3YnO5B7XtzGKUC9TXr9cbc0C0rROo",
    authDomain: "todo-app-44c36.firebaseapp.com",
    databaseURL: "https://todo-app-44c36.firebaseio.com",
    projectId: "todo-app-44c36",
    storageBucket: "todo-app-44c36.appspot.com",
    messagingSenderId: "58267040783",
    appId: "1:58267040783:web:a4dfd290ef75079e16377a",
    measurementId: "G-5S44V4QD22"
  });

  const db = firebaseApp.firestore();

  export default db;