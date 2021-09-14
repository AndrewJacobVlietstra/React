import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { seedDatabase } from '../seed';

// we need to somehow seed the database

const config = {
    apiKey: "AIzaSyDN3FGAui6Y-RDxCL_Jtfk53LlS2D0i1Qw",
    authDomain: "netflix-4e9d5.firebaseapp.com",
    projectId: "netflix-4e9d5",
    storageBucket: "netflix-4e9d5.appspot.com",
    messagingSenderId: "324280892276",
    appId: "1:324280892276:web:1b992c0a374b47b996ca21",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };