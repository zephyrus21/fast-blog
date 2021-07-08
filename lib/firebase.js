import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBSAE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBSAE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBSAE_PROJECT_ID,
  storageBucket: 'fast-blog-p21.appspot.com',
  messagingSenderId: '627845778644',
  appId: '1:627845778644:web:b3279ce66829b0909bbf41',
};

// Initialize Firebase
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export default firebase;
