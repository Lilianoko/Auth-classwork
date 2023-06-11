// Fire base config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcQGi9KmmQDleisC0dqRDds2qGjJqdmB8",
  authDomain: "school-project-bfd8c.firebaseapp.com",
  projectId: "school-project-bfd8c",
  storageBucket: "school-project-bfd8c.appspot.com",
  messagingSenderId: "642733365045",
  appId: "1:642733365045:web:a334ecb19ead3d06b59e7c",
  measurementId: "G-JHG2JGLNZW"
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

//Sigup Function
let signUpButton = document.getElementById("signup");

signUpButton.addEventListener("click",(e) => {
  e.preventDefault();
  console.log("signup click");

  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");

  auth
  .createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) =>{
    location.reload();

//Signed in
var user = userCredential.user;
console.log("user, user.mail");
window.location ="home.html";
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log("error code", errorCode);
  console.log("error message", errorMessage);
});
});


//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes

//Lifecycle hooks
auth.onAuthStateChanged(function (user) {
  if (user) {
    var email = user.email;
    var users = document.getElementById("user");
    users.appendChild(text);
    console.log(users);
  } else {
  }
  });

