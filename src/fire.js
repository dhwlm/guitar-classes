import firebase from 'firebase/app';
import 'firebase/database';

var config = {
  apiKey: "AIzaSyCEq1XUO7niBvGevWXqkj3VNb4oxwtiOtU",
  authDomain: "guitar-classes.firebaseapp.com",
  databaseURL: "https://guitar-classes.firebaseio.com",
  projectId: "guitar-classes",
  storageBucket: "guitar-classes.appspot.com",
  messagingSenderId: "282912082949"
};

const fire = firebase.initializeApp(config);

export default fire;
