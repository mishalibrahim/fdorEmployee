import {getApps, initializeApp} from 'firebase/app';

import {RecaptchaVerifier} from 'firebase/auth';

import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyArR0E3G4y515i8lQ0a31KKq8eUTQX55mM",
  authDomain: "fdor-droppies-uat.firebaseapp.com",
  projectId: "fdor-droppies-uat",
  storageBucket: "fdor-droppies-uat.appspot.com",
  messagingSenderId: "785043511638",
  appId: "1:785043511638:web:1113ef25627df1b94adef7",
  measurementId: "G-M20EX615FR"
};

   const app = getApps().length ==0? initializeApp(firebaseConfig):getApps();
   const auth = getAuth(app);

   export {auth,RecaptchaVerifier};