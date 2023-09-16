import firebase from "firebase/app";
import "firebase/database";
// import Swal from 'sweetalert2'
const firebaseConfig = {
	apiKey: "AIzaSyCLd6BGo6Z9Pp0uGt5QYVMrAwbhATkeyrU",
	authDomain: "siga-software.firebaseapp.com",
	databaseURL: "https://siga-software-default-rtdb.firebaseio.com",
	projectId: "siga-software",
	storageBucket: "siga-software.appspot.com",
	messagingSenderId: "8997314242",
	appId: "1:8997314242:web:7e56efc01d37dfd407255b",
	measurementId: "G-NY2ERQ4G33",
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
} else {
	firebase.app();
}

const database = firebase.database(); //request database function

export { database, firebase };
