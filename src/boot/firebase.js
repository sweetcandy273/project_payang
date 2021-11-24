import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Vue from "vue";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyCY__Cp8xhKrOwFXyPV8TLsRgqhxTJSXuI",
  authDomain: "causal-jigsaw-325013.firebaseapp.com",
  projectId: "causal-jigsaw-325013",
  storageBucket: "causal-jigsaw-325013.appspot.com",
  messagingSenderId: "322647746293",
  appId: "1:322647746293:web:b8b6090a256da5b49087bc",
  measurementId: "G-5P1JNS98PF"
};

firebase.initializeApp(firebaseConfig);

const onAuthStateChanged = async () => {
  return await new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};
const auth = firebase.auth();
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export { auth, onAuthStateChanged };
