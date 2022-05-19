// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import "firebase/auth";
import { doc, onSnapshot, getDocs, querySnapshot } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";

import React, { useState, useEffect } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoCrYKP1JjzSOb2kPOHbhYOhazCmXy0nY",
  authDomain: "sfms-ce695.firebaseapp.com",
  projectId: "sfms-ce695",
  storageBucket: "sfms-ce695.appspot.com",
  messagingSenderId: "152813023965",
  appId: "1:152813023965:web:184921027a9c2af59f6134",
  measurementId: "G-7PX2GC6MRJ",
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const FBstorage = getStorage(firebaseApp, "gs://sfms-ce695.appspot.com");
const PLECollection = db.collection("PLEnerserv");
const authentication = getAuth(firebaseApp);

export default authentication;
export const fetchJobs = async () => {
  var Jobs = "";
  const response = db.collection("PLEnerserv");
  const data = await response.get();

  Jobs = data.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    baseId: doc.id,
  }));
};

export const useLoadJobs = () => {
  const Lifts = ref([]);
  const close = PLECollection.orderBy("id", "asc").onSnapshot((snapshot) => {
    Lifts.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      baseId: doc.id,
    }));
  });

  onUnmounted(close);
  return Lifts;
};
export const getJobs = async () => {
  var Lifts = "";
  const snapshot = await firebase.firestore().collection("PLEnerserv").get();
  Lifts = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    baseId: doc.id,
  }));
  return Lifts;
};
