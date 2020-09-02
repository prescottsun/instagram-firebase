import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyDH6JW7pAtccejgVuzGsdFUG4mJh3iLAqg",
	authDomain: "firegram-prescott.firebaseapp.com",
	databaseURL: "https://firegram-prescott.firebaseio.com",
	projectId: "firegram-prescott",
	storageBucket: "firegram-prescott.appspot.com",
	messagingSenderId: "1011688145809",
	appId: "1:1011688145809:web:949e47f8118db223835030",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
