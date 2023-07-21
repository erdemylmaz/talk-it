// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvLJTAjzuL2byMSnUe05-CHJZY1ZAI7So",
  authDomain: "talkit-bacea.firebaseapp.com",
  databaseURL: "https://talkit-bacea-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "talkit-bacea",
  storageBucket: "talkit-bacea.appspot.com",
  messagingSenderId: "272005033628",
  appId: "1:272005033628:web:136cf382006c7b06f7c759",
  measurementId: "G-KCY9KW64HN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {getDatabase, set, get, ref, child, update, remove} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

const db = getDatabase();

let topics = [
    {
        title: 'YKS 2023 Sonuclari',
        entryCount: 0,
        createDate: '21 Temmuz 2023',
        createTime: `15.16`,
        createdUsername: 'erdem',
        entries: [
            {
                username: 'erdem',
                userDegree: 'UNI',
                publishDate: '21 Temmuz 2023',
                publishTime: '15.31',
                text: "Dun aciklandi, OBP mahvettdi :(",
                replyCount: 0,
                entryID: 0,
                replies: [],
            }
        ],
        status: "active",
    },
    {
        title: 'YKS 2024',
        entryCount: 0,
        createDate: '21 Temmuz 2023',
        createTime: `15.29`,
        createdUsername: 'erdem',
        entries: [],
        status: "active",
    },
]