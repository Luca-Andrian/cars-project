import firebase from 'firebase/compat/app'

const firebaseConfig = {
  apiKey: "AIzaSyBHjSZo2gJDz_MyYBEo6K4ONHPCFrT3hi4",
  authDomain: "car-app-17d57.firebaseapp.com",
  projectId: "car-app-17d57",
  storageBucket: "car-app-17d57.appspot.com",
  messagingSenderId: "936013873680",
  appId: "1:936013873680:web:b15c2c46980ca033e4c095"
};

firebase.initializeApp(firebaseConfig);

export { firebase };