import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyAjKgH58ZmynmduTXroaXpzqy1gkE1pr6I",
  authDomain: "chat-prompt.firebaseapp.com",
  projectId: "chat-prompt",
  storageBucket: "chat-prompt.appspot.com",
  messagingSenderId: "826859348938",
  appId: "1:826859348938:web:1f5f3a31a6b25f0396a533",
}).auth()