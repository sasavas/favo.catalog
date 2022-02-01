import { initializeApp } from "@firebase/app";
import { getStorage } from "firebase/storage";

// TODO: turn this into a singleton method
// to create the app reference only once

export const getStorageReference = () => {};

const firebaseConfig = {
  apiKey: "AIzaSyBz_J8qmKyvrDHp_qtveqdDauXUJ3S0m6A",
  authDomain: "favakids.firebaseapp.com",
  projectId: "favakids",
  storageBucket: "favakids.appspot.com",
  messagingSenderId: "969278834029",
  appId: "1:969278834029:web:4d6480c7fac492a5a7c664",
};

const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

export default storage;
