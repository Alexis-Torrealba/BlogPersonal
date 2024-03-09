// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyB9NNIEpXU1Z7rMStKq_G9d53p6RAIMeGQ',
	authDomain: 'blogapp-ef7ba.firebaseapp.com',
	projectId: 'blogapp-ef7ba',
	storageBucket: 'blogapp-ef7ba.appspot.com',
	messagingSenderId: '217390685861',
	appId: '1:217390685861:web:1b1a37c0606595c0c7b74c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, app, storage };
