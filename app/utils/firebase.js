import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAS-RYLJU8Q-OWRr2Bra26bcgCDcA67A1Y",
    authDomain: "tenedores-bd834.firebaseapp.com",
    projectId: "tenedores-bd834",
    storageBucket: "tenedores-bd834.appspot.com",
    messagingSenderId: "623022005383",
    appId: "1:623022005383:web:7f54f4fdf4d1a005a82c22"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);
