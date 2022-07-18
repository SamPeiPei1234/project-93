
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCfA8AvVZpWjvlOwUxKkBEimexHdO2mcUg",
      authDomain: "kwitter-291ac.firebaseapp.com",
      projectId: "kwitter-291ac",
      storageBucket: "kwitter-291ac.appspot.com",
      messagingSenderId: "776854604557",
      appId: "1:776854604557:web:599e0e4627d2f496df7e44"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
