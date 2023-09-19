import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/database";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

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

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const storage = getStorage(app);
export { analytics, app, auth, db, storage };

// Initialize Firebase
