import firebase from 'firebase';

function createFirebase() {
    var firebaseConfig = {
        apiKey: "AIzaSyCAZBBhtcON0bguoWRHr9CuGSRksxHmMeM",
        authDomain: "movecalc.firebaseapp.com",
        projectId: "movecalc",
        storageBucket: "movecalc.appspot.com",
        messagingSenderId: "330689954497",
        appId: "1:330689954497:web:0050e1da2ac081abca4a40",
        measurementId: "G-KTL8R238RY",
        databaseURL: "https://movecalc-default-rtdb.firebaseio.com/"
      };
      
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
}

export default createFirebase;