// Import the functions you need from the SDKs you need
import { ReactNativeAsyncStorage } from '@react-native-async-storage/async-storage';
import { getApps, initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence, initializeAuth } from "firebase/auth";
// import { GoogleAuthProvider,getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEvgLIPonJ4OsLM1xcySwALzll64QnMRM",
  authDomain: "dataloginauth.firebaseapp.com",
  projectId: "dataloginauth",
  storageBucket: "dataloginauth.firebasestorage.app",
  messagingSenderId: "600855078728",
  appId: "1:600855078728:web:5df7ed9e13b2ed883bb57d"
};
let auth;
if (getApps().length==0){
    const app = initializeApp(firebaseConfig);
    auth=initializeAuth(app,{
    persistence:getReactNativePersistence(ReactNativeAsyncStorage)
    })
}else{
    
    auth=getAuth();
}
// const auth1 = getAuth(app);

// export const provider=new GoogleAuthProvider(app);


export default auth;