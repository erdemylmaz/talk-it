//                  DATABASE 

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVky_n_S-8xDlKSNhbVFjbd4PN7dwrruM",
    authDomain: "talkit-9e4f8.firebaseapp.com",
    databaseURL: "https://talkit-9e4f8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "talkit-9e4f8",
    storageBucket: "talkit-9e4f8.appspot.com",
    messagingSenderId: "325999358303",
    appId: "1:325999358303:web:6e00171b64ed4517c946ea",
    measurementId: "G-X81BDSHYVM"
};

// Initialize Firebase
const dbApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(dbApp);

import {getDatabase, set, get, ref, child, update, remove} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const db = getDatabase();

// update top bar
topbaractiveTopic = 6;
// topbartopicItems[0].style.color = "#000";
topbartopicItems[6].style.color = "#fff";

TopbarHoverEffect({currentTarget: topbartopicItems[topbaractiveTopic]});

const tpListAREA = document.querySelector('.taban-puanlar-list');
let addTercihListesiBTNs = null;
let removeBTNS = null;
let username = localStorage.getItem('loggedAccUsername');

class TabanPuanlar {
    tpList = [
        {
            title: "Bilgisayar Muhendisligi",
            uniInfos: [
                {
                    "title": "KOÇ ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "550,07",
                    "kont": "16",
                    "tytTR": "37,5",
                    "tytSOS": "20,0",
                    "tytMAT": "40,0",
                    "tytFEN": "20,0",
                    "aytMAT": "38,8",
                    "aytFZK": "12,8",
                    "aytKMY": "13,0",
                    "aytBYL": "13,0",
                    "siralama": "156"
                },
                {
                    "title": "BOĞAZİÇİ ÜNİVERSİTESİ -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "547,16",
                    "kont": "93",
                    "tytTR": "36,3",
                    "tytSOS": "16,3",
                    "tytMAT": "40,0",
                    "tytFEN": "17,5",
                    "aytMAT": "40,0",
                    "aytFZK": "14,0",
                    "aytKMY": "13,0",
                    "aytBYL": "13,0",
                    "siralama": "315"
                },
                {
                    "title": "İHSAN DOĞRAMACI BİLKENT ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "546,6",
                    "kont": "45",
                    "tytTR": "37,5",
                    "tytSOS": "17,5",
                    "tytMAT": "40,0",
                    "tytFEN": "20,0",
                    "aytMAT": "40,0",
                    "aytFZK": "12,8",
                    "aytKMY": "13,0",
                    "aytBYL": "13,0",
                    "siralama": "350"
                },
                {
                    "title": "ORTA DOĞU TEKNİK ÜNİVERSİTESİ -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "541,13",
                    "kont": "108",
                    "tytTR": "33,8",
                    "tytSOS": "18,8",
                    "tytMAT": "40,0",
                    "tytFEN": "17,8",
                    "aytMAT": "40,0",
                    "aytFZK": "11,5",
                    "aytKMY": "13,0",
                    "aytBYL": "13,0",
                    "siralama": "878"
                },
                {
                    "title": "İSTANBUL TEKNİK ÜNİVERSİTESİ -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "539,23",
                    "kont": "113",
                    "tytTR": "38,8",
                    "tytSOS": "17,5",
                    "tytMAT": "38,8",
                    "tytFEN": "17,5",
                    "aytMAT": "38,8",
                    "aytFZK": "11,5",
                    "aytKMY": "13,0",
                    "aytBYL": "13,0",
                    "siralama": "1.179"
                },
                {
                    "title": "ÖZYEĞİN ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "538,41",
                    "kont": "10",
                    "tytTR": "35,0",
                    "tytSOS": "20,0",
                    "tytMAT": "40,0",
                    "tytFEN": "17,5",
                    "aytMAT": "40,0",
                    "aytFZK": "12,8",
                    "aytKMY": "13,0",
                    "aytBYL": "10,5",
                    "siralama": "1.326"
                },
                {
                    "title": "TOBB EKONOMİ VE TEKNOLOJİ ÜNİVERSİTESİ -(Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "536,89",
                    "kont": "15",
                    "tytTR": "36,3",
                    "tytSOS": "17,5",
                    "tytMAT": "40,0",
                    "tytFEN": "15,0",
                    "aytMAT": "38,8",
                    "aytFZK": "12,8",
                    "aytKMY": "13,0",
                    "aytBYL": "11,8",
                    "siralama": "1.578"
                },
                {
                    "title": "İHSAN DOĞRAMACI BİLKENT ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "535,36",
                    "kont": "35",
                    "tytTR": "40,0",
                    "tytSOS": "15,0",
                    "tytMAT": "40,0",
                    "tytFEN": "17,5",
                    "aytMAT": "40,0",
                    "aytFZK": "11,5",
                    "aytKMY": "13,0",
                    "aytBYL": "10,5",
                    "siralama": "1.879"
                },
                {
                    "title": "YEDİTEPE ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "531,02",
                    "kont": "15",
                    "tytTR": "31,5",
                    "tytSOS": "15,3",
                    "tytMAT": "37,5",
                    "tytFEN": "18,8",
                    "aytMAT": "38,8",
                    "aytFZK": "12,8",
                    "aytKMY": "13,0",
                    "aytBYL": "13,0",
                    "siralama": "2.851"
                },
                {
                    "title": "GALATASARAY ÜNİVERSİTESİ -(Fransızca) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "529,96",
                    "kont": "31",
                    "tytTR": "35,0",
                    "tytSOS": "17,5",
                    "tytMAT": "37,5",
                    "tytFEN": "17,8",
                    "aytMAT": "40,0",
                    "aytFZK": "14,0",
                    "aytKMY": "10,5",
                    "aytBYL": "10,8",
                    "siralama": "3.131"
                },
                {
                    "title": "HACETTEPE ÜNİVERSİTESİ -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "528,36",
                    "kont": "108",
                    "tytTR": "32,5",
                    "tytSOS": "20,0",
                    "tytMAT": "38,8",
                    "tytFEN": "20,0",
                    "aytMAT": "37,5",
                    "aytFZK": "10,5",
                    "aytKMY": "11,8",
                    "aytBYL": "13,0",
                    "siralama": "3.576"
                },
                {
                    "title": "BAHÇEŞEHİR ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "528,33",
                    "kont": "15",
                    "tytTR": "36,3",
                    "tytSOS": "16,8",
                    "tytMAT": "40,0",
                    "tytFEN": "16,3",
                    "aytMAT": "40,0",
                    "aytFZK": "12,8",
                    "aytKMY": "10,5",
                    "aytBYL": "12,0",
                    "siralama": "3.591"
                },
                {
                    "title": "YILDIZ TEKNİK ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "524,02",
                    "kont": "103",
                    "tytTR": "33,8",
                    "tytSOS": "18,8",
                    "tytMAT": "38,8",
                    "tytFEN": "18,8",
                    "aytMAT": "39,0",
                    "aytFZK": "10,3",
                    "aytKMY": "13,0",
                    "aytBYL": "10,5",
                    "siralama": "5.056"
                },
                {
                    "title": "TÜRK-ALMAN ÜNİVERSİTESİ -(Almanca) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "521,35",
                    "kont": "52",
                    "tytTR": "32,5",
                    "tytSOS": "18,8",
                    "tytMAT": "35,0",
                    "tytFEN": "16,3",
                    "aytMAT": "37,5",
                    "aytFZK": "12,8",
                    "aytKMY": "13,0",
                    "aytBYL": "13,0",
                    "siralama": "6.131"
                },
                {
                    "title": "İHSAN DOĞRAMACI BİLKENT ÜNİVERSİTESİ -(İngilizce) (Ücretli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "521,24",
                    "kont": "80",
                    "tytTR": "35,0",
                    "tytSOS": "16,5",
                    "tytMAT": "40,0",
                    "tytFEN": "18,8",
                    "aytMAT": "38,8",
                    "aytFZK": "10,3",
                    "aytKMY": "10,5",
                    "aytBYL": "11,8",
                    "siralama": "6.177"
                },
                {
                    "title": "TOBB EKONOMİ VE TEKNOLOJİ ÜNİVERSİTESİ -(%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "520,98",
                    "kont": "25",
                    "tytTR": "33,8",
                    "tytSOS": "18,8",
                    "tytMAT": "38,8",
                    "tytFEN": "17,5",
                    "aytMAT": "40,0",
                    "aytFZK": "10,5",
                    "aytKMY": "9,3",
                    "aytBYL": "11,8",
                    "siralama": "6.275"
                },
                {
                    "title": "MARMARA ÜNİVERSİTESİ -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "519,32",
                    "kont": "77",
                    "tytTR": "35,0",
                    "tytSOS": "13,8",
                    "tytMAT": "36,3",
                    "tytFEN": "18,8",
                    "aytMAT": "40,0",
                    "aytFZK": "11,5",
                    "aytKMY": "11,8",
                    "aytBYL": "10,5",
                    "siralama": "7.006"
                },
                {
                    "title": "İSTANBUL BİLGİ ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "516,55",
                    "kont": "13",
                    "tytTR": "33,8",
                    "tytSOS": "17,5",
                    "tytMAT": "40,0",
                    "tytFEN": "17,5",
                    "aytMAT": "40,0",
                    "aytFZK": "9,3",
                    "aytKMY": "10,5",
                    "aytBYL": "11,8",
                    "siralama": "8.205"
                },
                {
                    "title": "MEF ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "515,67",
                    "kont": "11",
                    "tytTR": "36,3",
                    "tytSOS": "17,5",
                    "tytMAT": "36,3",
                    "tytFEN": "18,8",
                    "aytMAT": "37,5",
                    "aytFZK": "9,0",
                    "aytKMY": "13,0",
                    "aytBYL": "11,8",
                    "siralama": "8.619"
                },
                {
                    "title": "İZMİR YÜKSEK TEKNOLOJİ ENSTİTÜSÜ -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "513,66",
                    "kont": "93",
                    "tytTR": "31,8",
                    "tytSOS": "15,5",
                    "tytMAT": "38,8",
                    "tytFEN": "20,0",
                    "aytMAT": "37,5",
                    "aytFZK": "12,8",
                    "aytKMY": "10,5",
                    "aytBYL": "10,5",
                    "siralama": "9.617"
                },
                {
                    "title": "İSTANBUL MEDİPOL ÜNİVERSİTESİ  -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "513,39",
                    "kont": "10",
                    "tytTR": "28,8",
                    "tytSOS": "15,3",
                    "tytMAT": "37,5",
                    "tytFEN": "17,5",
                    "aytMAT": "38,8",
                    "aytFZK": "12,8",
                    "aytKMY": "10,5",
                    "aytBYL": "11,8",
                    "siralama": "9.748"
                },
                {
                    "title": "GEBZE TEKNİK ÜNİVERSİTESİ -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "513,03",
                    "kont": "93",
                    "tytTR": "32,5",
                    "tytSOS": "15,5",
                    "tytMAT": "38,8",
                    "tytFEN": "17,5",
                    "aytMAT": "38,8",
                    "aytFZK": "10,3",
                    "aytKMY": "11,8",
                    "aytBYL": "10,5",
                    "siralama": "9.926"
                },
                {
                    "title": "KADİR HAS ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "512,36",
                    "kont": "12",
                    "tytTR": "36,3",
                    "tytSOS": "13,8",
                    "tytMAT": "38,8",
                    "tytFEN": "18,8",
                    "aytMAT": "37,5",
                    "aytFZK": "9,0",
                    "aytKMY": "10,5",
                    "aytBYL": "13,0",
                    "siralama": "10.276"
                },
                {
                    "title": "İZMİR EKONOMİ ÜNİVERSİTESİ  -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "510,29",
                    "kont": "12",
                    "tytTR": "28,8",
                    "tytSOS": "15,0",
                    "tytMAT": "37,5",
                    "tytFEN": "15,0",
                    "aytMAT": "38,8",
                    "aytFZK": "11,5",
                    "aytKMY": "11,8",
                    "aytBYL": "11,8",
                    "siralama": "11.357"
                },
                {
                    "title": "ANKARA ÜNİVERSİTESİ -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "509,55",
                    "kont": "77",
                    "tytTR": "32,5",
                    "tytSOS": "13,8",
                    "tytMAT": "40,0",
                    "tytFEN": "17,5",
                    "aytMAT": "40,0",
                    "aytFZK": "11,5",
                    "aytKMY": "10,5",
                    "aytBYL": "9,3",
                    "siralama": "11.746"
                },
                {
                    "title": "İSTANBUL TEKNİK ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "507,87",
                    "kont": "10",
                    "tytTR": "36,3",
                    "tytSOS": "18,8",
                    "tytMAT": "40,0",
                    "tytFEN": "17,5",
                    "aytMAT": "40,0",
                    "aytFZK": "8,3",
                    "aytKMY": "10,5",
                    "aytBYL": "8,0",
                    "siralama": "12.716"
                },
                {
                    "title": "ÇANKAYA ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "507,65",
                    "kont": "12",
                    "tytTR": "35,0",
                    "tytSOS": "14,0",
                    "tytMAT": "36,5",
                    "tytFEN": "17,5",
                    "aytMAT": "37,5",
                    "aytFZK": "11,5",
                    "aytKMY": "10,5",
                    "aytBYL": "10,5",
                    "siralama": "12.833"
                },
                {
                    "title": "EGE ÜNİVERSİTESİ-(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "505,76",
                    "kont": "108",
                    "tytTR": "32,5",
                    "tytSOS": "13,8",
                    "tytMAT": "38,8",
                    "tytFEN": "15,0",
                    "aytMAT": "38,8",
                    "aytFZK": "10,3",
                    "aytKMY": "11,8",
                    "aytBYL": "10,5",
                    "siralama": "13.889"
                },
                {
                    "title": "DOKUZ EYLÜL ÜNİVERSİTESİ -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "502,66",
                    "kont": "93",
                    "tytTR": "32,5",
                    "tytSOS": "10,0",
                    "tytMAT": "40,0",
                    "tytFEN": "17,5",
                    "aytMAT": "38,8",
                    "aytFZK": "11,5",
                    "aytKMY": "10,5",
                    "aytBYL": "9,3",
                    "siralama": "15.816"
                },
                {
                    "title": "BAŞKENT ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "499,58",
                    "kont": "10",
                    "tytTR": "31,3",
                    "tytSOS": "16,5",
                    "tytMAT": "38,8",
                    "tytFEN": "18,8",
                    "aytMAT": "33,5",
                    "aytFZK": "9,0",
                    "aytKMY": "9,8",
                    "aytBYL": "13,0",
                    "siralama": "17.820"
                },
                {
                    "title": "YAŞAR ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "499,05",
                    "kont": "12",
                    "tytTR": "28,8",
                    "tytSOS": "18,8",
                    "tytMAT": "38,8",
                    "tytFEN": "18,8",
                    "aytMAT": "40,0",
                    "aytFZK": "7,8",
                    "aytKMY": "9,3",
                    "aytBYL": "9,3",
                    "siralama": "18.195"
                },
                {
                    "title": "ÖZYEĞİN ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "498,94",
                    "kont": "29",
                    "tytTR": "32,8",
                    "tytSOS": "13,0",
                    "tytMAT": "35,0",
                    "tytFEN": "16,3",
                    "aytMAT": "38,8",
                    "aytFZK": "10,3",
                    "aytKMY": "10,5",
                    "aytBYL": "10,5",
                    "siralama": "18.256"
                },
                {
                    "title": "TOBB EKONOMİ VE TEKNOLOJİ ÜNİVERSİTESİ -(Ücretli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "495,99",
                    "kont": "40",
                    "tytTR": "32,5",
                    "tytSOS": "10,8",
                    "tytMAT": "35,3",
                    "tytFEN": "17,5",
                    "aytMAT": "40,0",
                    "aytFZK": "12,8",
                    "aytKMY": "10,5",
                    "aytBYL": "8,3",
                    "siralama": "20.149"
                },
                {
                    "title": "İSTANBUL ÜNİVERSİTESİ-CERRAHPAŞA -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "495,8",
                    "kont": "93",
                    "tytTR": "30,0",
                    "tytSOS": "17,5",
                    "tytMAT": "33,8",
                    "tytFEN": "15,0",
                    "aytMAT": "36,3",
                    "aytFZK": "7,8",
                    "aytKMY": "11,8",
                    "aytBYL": "13,0",
                    "siralama": "20.267"
                },
                {
                    "title": "ESKİŞEHİR TEKNİK ÜNİVERSİTESİ -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "493,98",
                    "kont": "93",
                    "tytTR": "27,8",
                    "tytSOS": "16,3",
                    "tytMAT": "33,3",
                    "tytFEN": "14,0",
                    "aytMAT": "38,8",
                    "aytFZK": "10,3",
                    "aytKMY": "11,8",
                    "aytBYL": "9,3",
                    "siralama": "21.514"
                },
                {
                    "title": "ACIBADEM MEHMET ALİ AYDINLAR ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "492,98",
                    "kont": "10",
                    "tytTR": "31,3",
                    "tytSOS": "11,3",
                    "tytMAT": "40,0",
                    "tytFEN": "13,8",
                    "aytMAT": "37,8",
                    "aytFZK": "10,5",
                    "aytKMY": "10,5",
                    "aytBYL": "9,5",
                    "siralama": "22.186"
                },
                {
                    "title": "ANKARA MEDİPOL ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "492,52",
                    "kont": "7",
                    "tytTR": "31,3",
                    "tytSOS": "15,0",
                    "tytMAT": "38,8",
                    "tytFEN": "17,5",
                    "aytMAT": "36,3",
                    "aytFZK": "11,5",
                    "aytKMY": "9,5",
                    "aytBYL": "8,0",
                    "siralama": "22.484"
                },
                {
                    "title": "GAZİ ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "491,99",
                    "kont": "93",
                    "tytTR": "32,5",
                    "tytSOS": "13,8",
                    "tytMAT": "38,8",
                    "tytFEN": "13,8",
                    "aytMAT": "38,8",
                    "aytFZK": "11,5",
                    "aytKMY": "10,8",
                    "aytBYL": "5,5",
                    "siralama": "22.863"
                },
                {
                    "title": "TÜRK-ALMAN ÜNİVERSİTESİ -(Almanca) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "491,96",
                    "kont": "10",
                    "tytTR": "33,8",
                    "tytSOS": "16,5",
                    "tytMAT": "33,8",
                    "tytFEN": "16,3",
                    "aytMAT": "37,5",
                    "aytFZK": "7,8",
                    "aytKMY": "13,0",
                    "aytBYL": "8,0",
                    "siralama": "22.882"
                },
                {
                    "title": "MALTEPE ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "491,57",
                    "kont": "8",
                    "tytTR": "30,3",
                    "tytSOS": "17,8",
                    "tytMAT": "32,0",
                    "tytFEN": "17,8",
                    "aytMAT": "38,8",
                    "aytFZK": "10,3",
                    "aytKMY": "10,5",
                    "aytBYL": "9,3",
                    "siralama": "23.186"
                },
                {
                    "title": "MARMARA ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "491,46",
                    "kont": "58",
                    "tytTR": "34,0",
                    "tytSOS": "14,3",
                    "tytMAT": "36,3",
                    "tytFEN": "14,0",
                    "aytMAT": "38,8",
                    "aytFZK": "9,0",
                    "aytKMY": "10,5",
                    "aytBYL": "9,3",
                    "siralama": "23.273"
                },
                {
                    "title": "BAŞKENT ÜNİVERSİTESİ -(Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "489,21",
                    "kont": "13",
                    "tytTR": "22,5",
                    "tytSOS": "13,8",
                    "tytMAT": "35,0",
                    "tytFEN": "16,3",
                    "aytMAT": "38,8",
                    "aytFZK": "11,5",
                    "aytKMY": "11,8",
                    "aytBYL": "9,3",
                    "siralama": "24.857"
                },
                {
                    "title": "İSTANBUL TEKNİK ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "488,89",
                    "kont": "10",
                    "tytTR": "30,0",
                    "tytSOS": "12,8",
                    "tytMAT": "38,0",
                    "tytFEN": "13,8",
                    "aytMAT": "38,0",
                    "aytFZK": "9,0",
                    "aytKMY": "11,8",
                    "aytBYL": "9,3",
                    "siralama": "25.072"
                },
                {
                    "title": "İSTANBUL AYDIN ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "488,76",
                    "kont": "13",
                    "tytTR": "27,0",
                    "tytSOS": "15,5",
                    "tytMAT": "33,5",
                    "tytFEN": "15,0",
                    "aytMAT": "37,5",
                    "aytFZK": "14,0",
                    "aytKMY": "9,3",
                    "aytBYL": "9,3",
                    "siralama": "25.166"
                },
                {
                    "title": "ORTA DOĞU TEKNİK ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "487,89",
                    "kont": "16",
                    "tytTR": "31,5",
                    "tytSOS": "11,3",
                    "tytMAT": "32,5",
                    "tytFEN": "17,5",
                    "aytMAT": "35,0",
                    "aytFZK": "10,3",
                    "aytKMY": "13,0",
                    "aytBYL": "9,5",
                    "siralama": "25.837"
                },
                {
                    "title": "ANKARA ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "487,34",
                    "kont": "82",
                    "tytTR": "30,5",
                    "tytSOS": "16,8",
                    "tytMAT": "37,5",
                    "tytFEN": "15,0",
                    "aytMAT": "37,5",
                    "aytFZK": "9,0",
                    "aytKMY": "10,5",
                    "aytBYL": "8,0",
                    "siralama": "26.213"
                },
                {
                    "title": "ATILIM ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "486,73",
                    "kont": "13",
                    "tytTR": "31,3",
                    "tytSOS": "12,5",
                    "tytMAT": "38,8",
                    "tytFEN": "17,5",
                    "aytMAT": "36,3",
                    "aytFZK": "9,0",
                    "aytKMY": "8,3",
                    "aytBYL": "10,5",
                    "siralama": "26.643"
                },
                {
                    "title": "KOÇ ÜNİVERSİTESİ -(İngilizce) (Ücretli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "485,72",
                    "kont": "93",
                    "tytTR": "28,8",
                    "tytSOS": "10,0",
                    "tytMAT": "40,0",
                    "tytFEN": "14,0",
                    "aytMAT": "38,8",
                    "aytFZK": "11,5",
                    "aytKMY": "9,3",
                    "aytBYL": "8,3",
                    "siralama": "27.405"
                },
                {
                    "title": "ANKARA YILDIRIM BEYAZIT ÜNİVERSİTESİ -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "485,53",
                    "kont": "82",
                    "tytTR": "30,0",
                    "tytSOS": "11,3",
                    "tytMAT": "35,8",
                    "tytFEN": "15,0",
                    "aytMAT": "36,8",
                    "aytFZK": "8,0",
                    "aytKMY": "12,0",
                    "aytBYL": "10,8",
                    "siralama": "27.534"
                },
                {
                    "title": "AKDENİZ ÜNİVERSİTESİ -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "484,19",
                    "kont": "77",
                    "tytTR": "35,0",
                    "tytSOS": "10,0",
                    "tytMAT": "29,3",
                    "tytFEN": "15,0",
                    "aytMAT": "36,3",
                    "aytFZK": "11,5",
                    "aytKMY": "10,5",
                    "aytBYL": "10,5",
                    "siralama": "28.567"
                },
                {
                    "title": "İSTİNYE ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "481,43",
                    "kont": "9",
                    "tytTR": "31,5",
                    "tytSOS": "13,0",
                    "tytMAT": "36,5",
                    "tytFEN": "17,8",
                    "aytMAT": "36,5",
                    "aytFZK": "10,3",
                    "aytKMY": "10,5",
                    "aytBYL": "9,3",
                    "siralama": "30.649"
                },
                {
                    "title": "BAHÇEŞEHİR ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "480,29",
                    "kont": "38",
                    "tytTR": "37,5",
                    "tytSOS": "16,3",
                    "tytMAT": "36,5",
                    "tytFEN": "13,8",
                    "aytMAT": "37,5",
                    "aytFZK": "6,5",
                    "aytKMY": "8,0",
                    "aytBYL": "8,5",
                    "siralama": "31.540"
                },
                {
                    "title": "OSTİM TEKNİK ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "479,94",
                    "kont": "8",
                    "tytTR": "30,0",
                    "tytSOS": "16,3",
                    "tytMAT": "38,0",
                    "tytFEN": "16,3",
                    "aytMAT": "33,5",
                    "aytFZK": "8,0",
                    "aytKMY": "9,3",
                    "aytBYL": "10,5",
                    "siralama": "31.804"
                },
                {
                    "title": "İSTANBUL OKAN ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "478,38",
                    "kont": "9",
                    "tytTR": "35,8",
                    "tytSOS": "12,3",
                    "tytMAT": "34,5",
                    "tytFEN": "16,3",
                    "aytMAT": "36,5",
                    "aytFZK": "4,8",
                    "aytKMY": "9,3",
                    "aytBYL": "13,0",
                    "siralama": "33.002"
                },
                {
                    "title": "ESKİŞEHİR OSMANGAZİ ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "478,34",
                    "kont": "93",
                    "tytTR": "32,5",
                    "tytSOS": "17,8",
                    "tytMAT": "20,5",
                    "tytFEN": "13,8",
                    "aytMAT": "39,0",
                    "aytFZK": "11,5",
                    "aytKMY": "9,3",
                    "aytBYL": "8,3",
                    "siralama": "33.033"
                },
                {
                    "title": "İSTANBUL KÜLTÜR ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "477,56",
                    "kont": "16",
                    "tytTR": "40,0",
                    "tytSOS": "16,3",
                    "tytMAT": "38,8",
                    "tytFEN": "18,8",
                    "aytMAT": "33,3",
                    "aytFZK": "3,5",
                    "aytKMY": "9,3",
                    "aytBYL": "9,3",
                    "siralama": "33.665"
                },
                {
                    "title": "BEYKENT ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "476,86",
                    "kont": "10",
                    "tytTR": "31,0",
                    "tytSOS": "14,3",
                    "tytMAT": "34,8",
                    "tytFEN": "13,3",
                    "aytMAT": "39,0",
                    "aytFZK": "9,0",
                    "aytKMY": "6,3",
                    "aytBYL": "10,8",
                    "siralama": "34.195"
                },
                {
                    "title": "GAZİ ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "475,69",
                    "kont": "66",
                    "tytTR": "35,3",
                    "tytSOS": "9,8",
                    "tytMAT": "35,0",
                    "tytFEN": "15,5",
                    "aytMAT": "37,5",
                    "aytFZK": "9,3",
                    "aytKMY": "8,8",
                    "aytBYL": "7,3",
                    "siralama": "35.121"
                },
                {
                    "title": "İSTANBUL SABAHATTİN ZAİM ÜNİVERSİTESİ  -(Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "474,07",
                    "kont": "8",
                    "tytTR": "34,0",
                    "tytSOS": "14,3",
                    "tytMAT": "36,5",
                    "tytFEN": "17,5",
                    "aytMAT": "36,0",
                    "aytFZK": "5,8",
                    "aytKMY": "9,5",
                    "aytBYL": "9,5",
                    "siralama": "36.415"
                },
                {
                    "title": "IŞIK ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "473,41",
                    "kont": "7",
                    "tytTR": "22,3",
                    "tytSOS": "12,5",
                    "tytMAT": "36,8",
                    "tytFEN": "17,5",
                    "aytMAT": "40,0",
                    "aytFZK": "7,8",
                    "aytKMY": "6,8",
                    "aytBYL": "11,8",
                    "siralama": "36.929"
                },
                {
                    "title": "KOCAELİ ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "471,85",
                    "kont": "93",
                    "tytTR": "33,8",
                    "tytSOS": "16,5",
                    "tytMAT": "36,3",
                    "tytFEN": "11,3",
                    "aytMAT": "36,3",
                    "aytFZK": "10,3",
                    "aytKMY": "9,3",
                    "aytBYL": "8,0",
                    "siralama": "38.162"
                },
                {
                    "title": "ANTALYA BİLİM ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "471,5",
                    "kont": "11",
                    "tytTR": "26,8",
                    "tytSOS": "14,3",
                    "tytMAT": "35,5",
                    "tytFEN": "11,3",
                    "aytMAT": "33,0",
                    "aytFZK": "11,8",
                    "aytKMY": "9,5",
                    "aytBYL": "9,3",
                    "siralama": "38.443"
                },
                {
                    "title": "İSTANBUL TEKNİK ÜNİVERSİTESİ -(İngilizce) (Ücretli) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "471,42",
                    "kont": "20",
                    "tytTR": "28,8",
                    "tytSOS": "12,5",
                    "tytMAT": "36,3",
                    "tytFEN": "17,5",
                    "aytMAT": "35,0",
                    "aytFZK": "11,5",
                    "aytKMY": "10,5",
                    "aytBYL": "6,8",
                    "siralama": "38.519"
                },
                {
                    "title": "ÜSKÜDAR ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "470,7",
                    "kont": "14",
                    "tytTR": "27,5",
                    "tytSOS": "9,5",
                    "tytMAT": "38,8",
                    "tytFEN": "13,8",
                    "aytMAT": "36,5",
                    "aytFZK": "9,0",
                    "aytKMY": "10,5",
                    "aytBYL": "8,0",
                    "siralama": "39.095"
                },
                {
                    "title": "ABDULLAH GÜL ÜNİVERSİTESİ -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "469,43",
                    "kont": "77",
                    "tytTR": "26,3",
                    "tytSOS": "16,5",
                    "tytMAT": "34,3",
                    "tytFEN": "19,0",
                    "aytMAT": "37,0",
                    "aytFZK": "5,3",
                    "aytKMY": "9,5",
                    "aytBYL": "8,5",
                    "siralama": "40.125"
                },
                {
                    "title": "BURSA ULUDAĞ ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "468,2",
                    "kont": "88",
                    "tytTR": "30,3",
                    "tytSOS": "15,3",
                    "tytMAT": "38,0",
                    "tytFEN": "13,8",
                    "aytMAT": "31,0",
                    "aytFZK": "11,5",
                    "aytKMY": "9,5",
                    "aytBYL": "6,8",
                    "siralama": "41.166"
                },
                {
                    "title": "İZMİR KATİP ÇELEBİ ÜNİVERSİTESİ  -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "468,07",
                    "kont": "67",
                    "tytTR": "30,3",
                    "tytSOS": "14,3",
                    "tytMAT": "35,0",
                    "tytFEN": "12,5",
                    "aytMAT": "36,3",
                    "aytFZK": "10,5",
                    "aytKMY": "10,5",
                    "aytBYL": "5,8",
                    "siralama": "41.281"
                },
                {
                    "title": "OSTİM TEKNİK ÜNİVERSİTESİ -(Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "467,47",
                    "kont": "8",
                    "tytTR": "33,8",
                    "tytSOS": "16,3",
                    "tytMAT": "29,8",
                    "tytFEN": "15,0",
                    "aytMAT": "33,5",
                    "aytFZK": "11,5",
                    "aytKMY": "5,5",
                    "aytBYL": "9,3",
                    "siralama": "41.824"
                },
                {
                    "title": "DOĞUŞ ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "467,18",
                    "kont": "15",
                    "tytTR": "25,8",
                    "tytSOS": "7,3",
                    "tytMAT": "30,3",
                    "tytFEN": "15,0",
                    "aytMAT": "37,5",
                    "aytFZK": "11,5",
                    "aytKMY": "10,8",
                    "aytBYL": "8,0",
                    "siralama": "42.048"
                },
                {
                    "title": "ANKARA BİLİM ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "467,01",
                    "kont": "9",
                    "tytTR": "33,8",
                    "tytSOS": "15,0",
                    "tytMAT": "28,5",
                    "tytFEN": "13,8",
                    "aytMAT": "35,8",
                    "aytFZK": "9,0",
                    "aytKMY": "8,3",
                    "aytBYL": "9,3",
                    "siralama": "42.177"
                },
                {
                    "title": "TÜRK HAVA KURUMU ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "466,17",
                    "kont": "15",
                    "tytTR": "37,5",
                    "tytSOS": "17,5",
                    "tytMAT": "35,3",
                    "tytFEN": "12,5",
                    "aytMAT": "32,8",
                    "aytFZK": "5,5",
                    "aytKMY": "8,3",
                    "aytBYL": "9,3",
                    "siralama": "42.869"
                },
                {
                    "title": "ÇUKUROVA ÜNİVERSİTESİ -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "465,88",
                    "kont": "72",
                    "tytTR": "32,5",
                    "tytSOS": "11,3",
                    "tytMAT": "36,3",
                    "tytFEN": "17,5",
                    "aytMAT": "36,3",
                    "aytFZK": "5,3",
                    "aytKMY": "8,3",
                    "aytBYL": "9,3",
                    "siralama": "43.123"
                },
                {
                    "title": "SAKARYA ÜNİVERSİTESİ  -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "465,4",
                    "kont": "103",
                    "tytTR": "29,8",
                    "tytSOS": "16,5",
                    "tytMAT": "32,5",
                    "tytFEN": "12,5",
                    "aytMAT": "36,3",
                    "aytFZK": "9,0",
                    "aytKMY": "9,3",
                    "aytBYL": "7,0",
                    "siralama": "43.553"
                },
                {
                    "title": "YEDİTEPE ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "465,33",
                    "kont": "71",
                    "tytTR": "23,8",
                    "tytSOS": "15,0",
                    "tytMAT": "23,5",
                    "tytFEN": "16,3",
                    "aytMAT": "36,3",
                    "aytFZK": "9,0",
                    "aytKMY": "8,0",
                    "aytBYL": "8,0",
                    "siralama": "43.599"
                },
                {
                    "title": "BİRUNİ ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "465,15",
                    "kont": "8",
                    "tytTR": "26,5",
                    "tytSOS": "6,8",
                    "tytMAT": "36,0",
                    "tytFEN": "16,3",
                    "aytMAT": "37,5",
                    "aytFZK": "10,3",
                    "aytKMY": "9,5",
                    "aytBYL": "7,5",
                    "siralama": "43.727"
                },
                {
                    "title": "İSTANBUL MEDENİYET ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "464,8",
                    "kont": "72",
                    "tytTR": "32,5",
                    "tytSOS": "16,3",
                    "tytMAT": "34,5",
                    "tytFEN": "13,8",
                    "aytMAT": "35,0",
                    "aytFZK": "5,8",
                    "aytKMY": "9,3",
                    "aytBYL": "8,0",
                    "siralama": "43.992"
                },
                {
                    "title": "HALİÇ ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "464,54",
                    "kont": "11",
                    "tytTR": "28,8",
                    "tytSOS": "13,8",
                    "tytMAT": "32,0",
                    "tytFEN": "12,8",
                    "aytMAT": "37,5",
                    "aytFZK": "10,3",
                    "aytKMY": "10,5",
                    "aytBYL": "5,5",
                    "siralama": "44.192"
                },
                {
                    "title": "MUĞLA SITKI KOÇMAN ÜNİVERSİTESİ -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "463,98",
                    "kont": "82",
                    "tytTR": "31,3",
                    "tytSOS": "13,8",
                    "tytMAT": "36,5",
                    "tytFEN": "15,0",
                    "aytMAT": "31,8",
                    "aytFZK": "6,5",
                    "aytKMY": "8,3",
                    "aytBYL": "11,8",
                    "siralama": "44.663"
                },
                {
                    "title": "ÇUKUROVA ÜNİVERSİTESİ -(İngilizce) (KKTC Uyruklu) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "463,8",
                    "kont": "1",
                    "tytTR": "28,8",
                    "tytSOS": "15,0",
                    "tytMAT": "32,0",
                    "tytFEN": "10,0",
                    "aytMAT": "33,0",
                    "aytFZK": "10,3",
                    "aytKMY": "9,3",
                    "aytBYL": "9,3",
                    "siralama": "44.818"
                },
                {
                    "title": "BEYKENT ÜNİVERSİTESİ -(Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "462,95",
                    "kont": "12",
                    "tytTR": "26,3",
                    "tytSOS": "10,0",
                    "tytMAT": "36,3",
                    "tytFEN": "14,0",
                    "aytMAT": "40,0",
                    "aytFZK": "6,5",
                    "aytKMY": "10,5",
                    "aytBYL": "6,8",
                    "siralama": "45.508"
                },
                {
                    "title": "İSTANBUL TİCARET ÜNİVERSİTESİ -(Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "462,76",
                    "kont": "10",
                    "tytTR": "30,0",
                    "tytSOS": "12,3",
                    "tytMAT": "37,5",
                    "tytFEN": "15,3",
                    "aytMAT": "36,5",
                    "aytFZK": "6,8",
                    "aytKMY": "9,5",
                    "aytBYL": "7,0",
                    "siralama": "45.636"
                },
                {
                    "title": "İSTANBUL AREL ÜNİVERSİTESİ  -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "461,1",
                    "kont": "9",
                    "tytTR": "32,5",
                    "tytSOS": "10,3",
                    "tytMAT": "32,5",
                    "tytFEN": "12,5",
                    "aytMAT": "35,3",
                    "aytFZK": "10,3",
                    "aytKMY": "9,3",
                    "aytBYL": "6,8",
                    "siralama": "47.063"
                },
                {
                    "title": "BURSA TEKNİK ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "460,75",
                    "kont": "88",
                    "tytTR": "22,0",
                    "tytSOS": "9,5",
                    "tytMAT": "28,0",
                    "tytFEN": "14,0",
                    "aytMAT": "34,8",
                    "aytFZK": "9,0",
                    "aytKMY": "13,0",
                    "aytBYL": "10,5",
                    "siralama": "47.353"
                },
                {
                    "title": "BEYKOZ ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "460,65",
                    "kont": "8",
                    "tytTR": "17,0",
                    "tytSOS": "10,3",
                    "tytMAT": "23,5",
                    "tytFEN": "16,3",
                    "aytMAT": "33,3",
                    "aytFZK": "12,8",
                    "aytKMY": "9,5",
                    "aytBYL": "13,0",
                    "siralama": "47.457"
                },
                {
                    "title": "MANİSA CELÂL BAYAR ÜNİVERSİTESİ -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "459,86",
                    "kont": "77",
                    "tytTR": "30,0",
                    "tytSOS": "16,8",
                    "tytMAT": "31,8",
                    "tytFEN": "16,3",
                    "aytMAT": "34,3",
                    "aytFZK": "9,0",
                    "aytKMY": "9,3",
                    "aytBYL": "5,5",
                    "siralama": "48.119"
                },
                {
                    "title": "FATİH SULTAN MEHMET VAKIF ÜNİVERSİTESİ -(Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "458,89",
                    "kont": "14",
                    "tytTR": "26,3",
                    "tytSOS": "13,8",
                    "tytMAT": "28,3",
                    "tytFEN": "16,3",
                    "aytMAT": "35,3",
                    "aytFZK": "9,0",
                    "aytKMY": "9,3",
                    "aytBYL": "9,3",
                    "siralama": "48.937"
                },
                {
                    "title": "İSTİNYE ÜNİVERSİTESİ -(Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "457,75",
                    "kont": "6",
                    "tytTR": "30,3",
                    "tytSOS": "12,3",
                    "tytMAT": "35,0",
                    "tytFEN": "12,5",
                    "aytMAT": "34,0",
                    "aytFZK": "7,8",
                    "aytKMY": "10,8",
                    "aytBYL": "7,3",
                    "siralama": "49.889"
                },
                {
                    "title": "FENERBAHÇE ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "457,7",
                    "kont": "8",
                    "tytTR": "30,3",
                    "tytSOS": "9,0",
                    "tytMAT": "30,8",
                    "tytFEN": "15,5",
                    "aytMAT": "37,8",
                    "aytFZK": "10,5",
                    "aytKMY": "9,5",
                    "aytBYL": "4,5",
                    "siralama": "49.934"
                },
                {
                    "title": "BAŞKENT ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "457,36",
                    "kont": "20",
                    "tytTR": "25,5",
                    "tytSOS": "15,5",
                    "tytMAT": "29,5",
                    "tytFEN": "16,3",
                    "aytMAT": "28,3",
                    "aytFZK": "9,0",
                    "aytKMY": "10,8",
                    "aytBYL": "10,5",
                    "siralama": "50.208"
                },
                {
                    "title": "BİRUNİ ÜNİVERSİTESİ -(Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "457,31",
                    "kont": "9",
                    "tytTR": "31,3",
                    "tytSOS": "6,5",
                    "tytMAT": "28,8",
                    "tytFEN": "15,0",
                    "aytMAT": "29,3",
                    "aytFZK": "12,8",
                    "aytKMY": "10,8",
                    "aytBYL": "9,5",
                    "siralama": "50.249"
                },
                {
                    "title": "AYDIN ADNAN MENDERES ÜNİVERSİTESİ -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "456,65",
                    "kont": "77",
                    "tytTR": "23,8",
                    "tytSOS": "11,5",
                    "tytMAT": "26,5",
                    "tytFEN": "12,5",
                    "aytMAT": "34,3",
                    "aytFZK": "10,3",
                    "aytKMY": "9,3",
                    "aytBYL": "10,5",
                    "siralama": "50.800"
                },
                {
                    "title": "ALTINBAŞ ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "456,39",
                    "kont": "12",
                    "tytTR": "32,8",
                    "tytSOS": "14,0",
                    "tytMAT": "28,3",
                    "tytFEN": "7,8",
                    "aytMAT": "32,5",
                    "aytFZK": "7,0",
                    "aytKMY": "11,8",
                    "aytBYL": "11,8",
                    "siralama": "51.020"
                },
                {
                    "title": "İZMİR EKONOMİ ÜNİVERSİTESİ  -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "454,92",
                    "kont": "66",
                    "tytTR": "29,0",
                    "tytSOS": "10,3",
                    "tytMAT": "30,5",
                    "tytFEN": "16,3",
                    "aytMAT": "39,0",
                    "aytFZK": "9,0",
                    "aytKMY": "7,5",
                    "aytBYL": "6,8",
                    "siralama": "52.287"
                },
                {
                    "title": "ÖZYEĞİN ÜNİVERSİTESİ -(İngilizce) (Ücretli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "454,2",
                    "kont": "30",
                    "tytTR": "31,5",
                    "tytSOS": "11,5",
                    "tytMAT": "36,8",
                    "tytFEN": "15,3",
                    "aytMAT": "35,0",
                    "aytFZK": "8,0",
                    "aytKMY": "8,3",
                    "aytBYL": "6,3",
                    "siralama": "52.897"
                },
                {
                    "title": "KOCAELİ ÜNİVERSİTESİ -(İÖ) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "453,83",
                    "kont": "93",
                    "tytTR": "22,0",
                    "tytSOS": "10,3",
                    "tytMAT": "37,5",
                    "tytFEN": "12,5",
                    "aytMAT": "38,8",
                    "aytFZK": "5,3",
                    "aytKMY": "10,5",
                    "aytBYL": "7,0",
                    "siralama": "53.203"
                },
                {
                    "title": "KTO KARATAY ÜNİVERSİTESİ -(Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "452,86",
                    "kont": "9",
                    "tytTR": "27,5",
                    "tytSOS": "16,3",
                    "tytMAT": "32,8",
                    "tytFEN": "15,0",
                    "aytMAT": "37,8",
                    "aytFZK": "4,0",
                    "aytKMY": "9,5",
                    "aytBYL": "5,5",
                    "siralama": "54.091"
                },
                {
                    "title": "KARADENİZ TEKNİK ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "451,31",
                    "kont": "93",
                    "tytTR": "27,0",
                    "tytSOS": "14,8",
                    "tytMAT": "30,5",
                    "tytFEN": "13,8",
                    "aytMAT": "31,5",
                    "aytFZK": "9,5",
                    "aytKMY": "8,5",
                    "aytBYL": "8,5",
                    "siralama": "55.435"
                },
                {
                    "title": "SAKARYA ÜNİVERSİTESİ  -(İÖ) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "450,25",
                    "kont": "93",
                    "tytTR": "25,8",
                    "tytSOS": "13,3",
                    "tytMAT": "25,3",
                    "tytFEN": "14,5",
                    "aytMAT": "29,0",
                    "aytFZK": "11,8",
                    "aytKMY": "7,0",
                    "aytBYL": "11,8",
                    "siralama": "56.373"
                },
                {
                    "title": "ÇUKUROVA ÜNİVERSİTESİ -(İngilizce) (İÖ) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "450,03",
                    "kont": "72",
                    "tytTR": "22,8",
                    "tytSOS": "15,0",
                    "tytMAT": "33,5",
                    "tytFEN": "15,3",
                    "aytMAT": "31,0",
                    "aytFZK": "11,5",
                    "aytKMY": "8,3",
                    "aytBYL": "8,0",
                    "siralama": "56.556"
                },
                {
                    "title": "İSTANBUL GELİŞİM ÜNİVERSİTESİ -(Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "449,9",
                    "kont": "10",
                    "tytTR": "24,0",
                    "tytSOS": "7,0",
                    "tytMAT": "27,0",
                    "tytFEN": "15,0",
                    "aytMAT": "33,0",
                    "aytFZK": "10,3",
                    "aytKMY": "11,8",
                    "aytBYL": "8,0",
                    "siralama": "56.674"
                },
                {
                    "title": "ÇANAKKALE ONSEKİZ MART ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "449,05",
                    "kont": "88",
                    "tytTR": "28,0",
                    "tytSOS": "12,3",
                    "tytMAT": "32,0",
                    "tytFEN": "14,0",
                    "aytMAT": "32,5",
                    "aytFZK": "7,8",
                    "aytKMY": "7,3",
                    "aytBYL": "9,3",
                    "siralama": "57.421"
                },
                {
                    "title": "İSTANBUL ATLAS ÜNİVERSİTESİ -(Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "448,66",
                    "kont": "8",
                    "tytTR": "26,5",
                    "tytSOS": "15,8",
                    "tytMAT": "30,5",
                    "tytFEN": "16,5",
                    "aytMAT": "33,5",
                    "aytFZK": "7,8",
                    "aytKMY": "9,3",
                    "aytBYL": "5,5",
                    "siralama": "57.761"
                },
                {
                    "title": "İZMİR BAKIRÇAY ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "448,17",
                    "kont": "72",
                    "tytTR": "30,5",
                    "tytSOS": "12,0",
                    "tytMAT": "37,5",
                    "tytFEN": "17,5",
                    "aytMAT": "37,8",
                    "aytFZK": "2,8",
                    "aytKMY": "8,3",
                    "aytBYL": "7,0",
                    "siralama": "58.228"
                },
                {
                    "title": "İSTANBUL GEDİK ÜNİVERSİTESİ -(Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "447,97",
                    "kont": "6",
                    "tytTR": "31,3",
                    "tytSOS": "12,5",
                    "tytMAT": "35,3",
                    "tytFEN": "11,3",
                    "aytMAT": "31,8",
                    "aytFZK": "9,0",
                    "aytKMY": "9,3",
                    "aytBYL": "6,8",
                    "siralama": "58.404"
                },
                {
                    "title": "ONDOKUZ MAYIS ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "445,64",
                    "kont": "82",
                    "tytTR": "30,3",
                    "tytSOS": "16,3",
                    "tytMAT": "29,0",
                    "tytFEN": "14,3",
                    "aytMAT": "29,0",
                    "aytFZK": "8,0",
                    "aytKMY": "9,5",
                    "aytBYL": "8,0",
                    "siralama": "60.493"
                },
                {
                    "title": "İSTANBUL AREL ÜNİVERSİTESİ  -(Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "444,94",
                    "kont": "8",
                    "tytTR": "32,0",
                    "tytSOS": "13,0",
                    "tytMAT": "23,5",
                    "tytFEN": "13,0",
                    "aytMAT": "25,5",
                    "aytFZK": "10,5",
                    "aytKMY": "10,8",
                    "aytBYL": "9,5",
                    "siralama": "61.089"
                },
                {
                    "title": "MANİSA CELÂL BAYAR ÜNİVERSİTESİ -(İngilizce) (İÖ) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "444,8",
                    "kont": "67",
                    "tytTR": "28,5",
                    "tytSOS": "13,3",
                    "tytMAT": "31,8",
                    "tytFEN": "10,3",
                    "aytMAT": "34,8",
                    "aytFZK": "9,5",
                    "aytKMY": "8,8",
                    "aytBYL": "4,5",
                    "siralama": "61.212"
                },
                {
                    "title": "ERCİYES ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "444,57",
                    "kont": "88",
                    "tytTR": "23,8",
                    "tytSOS": "10,5",
                    "tytMAT": "37,8",
                    "tytFEN": "6,3",
                    "aytMAT": "37,0",
                    "aytFZK": "9,0",
                    "aytKMY": "7,0",
                    "aytBYL": "6,8",
                    "siralama": "61.406"
                },
                {
                    "title": "HASAN KALYONCU ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "444,54",
                    "kont": "15",
                    "tytTR": "28,0",
                    "tytSOS": "13,3",
                    "tytMAT": "35,0",
                    "tytFEN": "16,3",
                    "aytMAT": "31,8",
                    "aytFZK": "3,0",
                    "aytKMY": "10,8",
                    "aytBYL": "9,5",
                    "siralama": "61.434"
                },
                {
                    "title": "NİŞANTAŞI ÜNİVERSİTESİ -(Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "444,49",
                    "kont": "9",
                    "tytTR": "30,0",
                    "tytSOS": "13,8",
                    "tytMAT": "30,0",
                    "tytFEN": "12,5",
                    "aytMAT": "30,3",
                    "aytFZK": "11,5",
                    "aytKMY": "8,0",
                    "aytBYL": "9,3",
                    "siralama": "61.488"
                },
                {
                    "title": "İSTANBUL TOPKAPI ÜNİVERSİTESİ -(Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "443,28",
                    "kont": "6",
                    "tytTR": "22,8",
                    "tytSOS": "8,8",
                    "tytMAT": "34,3",
                    "tytFEN": "10,3",
                    "aytMAT": "38,8",
                    "aytFZK": "8,0",
                    "aytKMY": "9,5",
                    "aytBYL": "6,8",
                    "siralama": "62.547"
                },
                {
                    "title": "DOĞU AKDENİZ ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "KKTC",
                    "tp": "443,03",
                    "kont": "10",
                    "tytTR": "32,5",
                    "tytSOS": "14,0",
                    "tytMAT": "29,8",
                    "tytFEN": "14,3",
                    "aytMAT": "28,5",
                    "aytFZK": "8,0",
                    "aytKMY": "7,0",
                    "aytBYL": "9,3",
                    "siralama": "62.781"
                },
                {
                    "title": "PAMUKKALE ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "442,93",
                    "kont": "82",
                    "tytTR": "30,5",
                    "tytSOS": "12,8",
                    "tytMAT": "31,5",
                    "tytFEN": "13,8",
                    "aytMAT": "36,3",
                    "aytFZK": "2,8",
                    "aytKMY": "10,8",
                    "aytBYL": "6,0",
                    "siralama": "62.878"
                },
                {
                    "title": "ÇANKAYA ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "441,2",
                    "kont": "70",
                    "tytTR": "28,3",
                    "tytSOS": "10,3",
                    "tytMAT": "26,3",
                    "tytFEN": "13,3",
                    "aytMAT": "31,8",
                    "aytFZK": "7,5",
                    "aytKMY": "11,0",
                    "aytBYL": "7,5",
                    "siralama": "64.487"
                },
                {
                    "title": "KONYA TEKNİK ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "440,74",
                    "kont": "93",
                    "tytTR": "29,0",
                    "tytSOS": "9,0",
                    "tytMAT": "26,8",
                    "tytFEN": "15,0",
                    "aytMAT": "32,0",
                    "aytFZK": "7,8",
                    "aytKMY": "10,5",
                    "aytBYL": "8,0",
                    "siralama": "64.926"
                },
                {
                    "title": "MEF ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "440,21",
                    "kont": "62",
                    "tytTR": "31,5",
                    "tytSOS": "16,3",
                    "tytMAT": "36,5",
                    "tytFEN": "13,8",
                    "aytMAT": "29,0",
                    "aytFZK": "6,5",
                    "aytKMY": "9,8",
                    "aytBYL": "5,5",
                    "siralama": "65.433"
                },
                {
                    "title": "SAKARYA UYGULAMALI BİLİMLER ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "439,86",
                    "kont": "50",
                    "tytTR": "25,3",
                    "tytSOS": "11,8",
                    "tytMAT": "21,0",
                    "tytFEN": "14,0",
                    "aytMAT": "35,3",
                    "aytFZK": "9,0",
                    "aytKMY": "8,5",
                    "aytBYL": "10,5",
                    "siralama": "65.731"
                },
                {
                    "title": "İSTANBUL TOPKAPI ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "439,03",
                    "kont": "6",
                    "tytTR": "25,5",
                    "tytSOS": "13,3",
                    "tytMAT": "37,8",
                    "tytFEN": "11,5",
                    "aytMAT": "37,8",
                    "aytFZK": "6,5",
                    "aytKMY": "8,3",
                    "aytBYL": "6,0",
                    "siralama": "66.455"
                },
                {
                    "title": "YEDİTEPE ÜNİVERSİTESİ -(İngilizce) (Ücretli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "438,26",
                    "kont": "14",
                    "tytTR": "28,0",
                    "tytSOS": "11,8",
                    "tytMAT": "35,8",
                    "tytFEN": "11,5",
                    "aytMAT": "35,0",
                    "aytFZK": "6,0",
                    "aytKMY": "6,0",
                    "aytBYL": "6,5",
                    "siralama": "67.153"
                },
                {
                    "title": "BOLU ABANT İZZET BAYSAL ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "436,42",
                    "kont": "72",
                    "tytTR": "28,0",
                    "tytSOS": "11,8",
                    "tytMAT": "24,5",
                    "tytFEN": "14,8",
                    "aytMAT": "30,8",
                    "aytFZK": "6,5",
                    "aytKMY": "11,0",
                    "aytBYL": "7,5",
                    "siralama": "68.862"
                },
                {
                    "title": "ALANYA ALAADDİN KEYKUBAT ÜNİVERSİTESİ -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "436,41",
                    "kont": "82",
                    "tytTR": "24,5",
                    "tytSOS": "13,0",
                    "tytMAT": "38,8",
                    "tytFEN": "12,8",
                    "aytMAT": "36,5",
                    "aytFZK": "6,5",
                    "aytKMY": "8,0",
                    "aytBYL": "4,3",
                    "siralama": "68.870"
                },
                {
                    "title": "SELÇUK ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "435,73",
                    "kont": "66",
                    "tytTR": "31,5",
                    "tytSOS": "8,0",
                    "tytMAT": "24,8",
                    "tytFEN": "15,3",
                    "aytMAT": "33,8",
                    "aytFZK": "4,0",
                    "aytKMY": "8,8",
                    "aytBYL": "9,3",
                    "siralama": "69.468"
                },
                {
                    "title": "BALIKESİR ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "433,2",
                    "kont": "77",
                    "tytTR": "30,0",
                    "tytSOS": "17,5",
                    "tytMAT": "33,8",
                    "tytFEN": "13,8",
                    "aytMAT": "31,3",
                    "aytFZK": "4,0",
                    "aytKMY": "6,8",
                    "aytBYL": "6,8",
                    "siralama": "71.807"
                },
                {
                    "title": "BAHÇEŞEHİR ÜNİVERSİTESİ -(İngilizce) (Ücretli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "432,45",
                    "kont": "47",
                    "tytTR": "27,8",
                    "tytSOS": "11,3",
                    "tytMAT": "24,8",
                    "tytFEN": "15,3",
                    "aytMAT": "25,3",
                    "aytFZK": "10,5",
                    "aytKMY": "7,5",
                    "aytBYL": "9,5",
                    "siralama": "72.502"
                },
                {
                    "title": "İSTANBUL BİLGİ ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "431,78",
                    "kont": "59",
                    "tytTR": "32,5",
                    "tytSOS": "12,5",
                    "tytMAT": "25,8",
                    "tytFEN": "13,8",
                    "aytMAT": "30,0",
                    "aytFZK": "7,8",
                    "aytKMY": "7,0",
                    "aytBYL": "6,8",
                    "siralama": "73.131"
                },
                {
                    "title": "SÜLEYMAN DEMİREL ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "431,06",
                    "kont": "82",
                    "tytTR": "25,0",
                    "tytSOS": "10,5",
                    "tytMAT": "36,3",
                    "tytFEN": "11,5",
                    "aytMAT": "35,0",
                    "aytFZK": "1,8",
                    "aytKMY": "10,8",
                    "aytBYL": "6,0",
                    "siralama": "73.871"
                },
                {
                    "title": "İSTANBUL SAĞLIK VE TEKNOLOJİ ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "430,76",
                    "kont": "40",
                    "tytTR": "31,3",
                    "tytSOS": "13,8",
                    "tytMAT": "23,0",
                    "tytFEN": "10,0",
                    "aytMAT": "32,5",
                    "aytFZK": "9,3",
                    "aytKMY": "8,3",
                    "aytBYL": "4,5",
                    "siralama": "74.148"
                },
                {
                    "title": "MERSİN ÜNİVERSİTESİ  -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "428,33",
                    "kont": "77",
                    "tytTR": "31,8",
                    "tytSOS": "15,3",
                    "tytMAT": "28,0",
                    "tytFEN": "10,3",
                    "aytMAT": "28,0",
                    "aytFZK": "6,8",
                    "aytKMY": "6,3",
                    "aytBYL": "9,5",
                    "siralama": "76.467"
                },
                {
                    "title": "İSTANBUL SAĞLIK VE TEKNOLOJİ ÜNİVERSİTESİ -(Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "426,19",
                    "kont": "40",
                    "tytTR": "28,8",
                    "tytSOS": "10,0",
                    "tytMAT": "20,3",
                    "tytFEN": "12,5",
                    "aytMAT": "33,8",
                    "aytFZK": "7,8",
                    "aytKMY": "8,0",
                    "aytBYL": "8,0",
                    "siralama": "78.563"
                },
                {
                    "title": "YAŞAR ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "425,55",
                    "kont": "54",
                    "tytTR": "30,3",
                    "tytSOS": "9,0",
                    "tytMAT": "29,0",
                    "tytFEN": "12,8",
                    "aytMAT": "26,0",
                    "aytFZK": "7,3",
                    "aytKMY": "9,3",
                    "aytBYL": "9,5",
                    "siralama": "79.216"
                },
                {
                    "title": "KARABÜK ÜNİVERSİTESİ -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "424,93",
                    "kont": "72",
                    "tytTR": "26,3",
                    "tytSOS": "8,5",
                    "tytMAT": "30,0",
                    "tytFEN": "9,5",
                    "aytMAT": "34,3",
                    "aytFZK": "8,0",
                    "aytKMY": "9,5",
                    "aytBYL": "5,5",
                    "siralama": "79.829"
                },
                {
                    "title": "ANKARA MEDİPOL ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "424,86",
                    "kont": "43",
                    "tytTR": "24,3",
                    "tytSOS": "13,5",
                    "tytMAT": "19,3",
                    "tytFEN": "8,0",
                    "aytMAT": "31,5",
                    "aytFZK": "8,3",
                    "aytKMY": "9,3",
                    "aytBYL": "9,5",
                    "siralama": "79.900"
                },
                {
                    "title": "TRAKYA ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "424,82",
                    "kont": "98",
                    "tytTR": "20,3",
                    "tytSOS": "7,8",
                    "tytMAT": "35,8",
                    "tytFEN": "12,8",
                    "aytMAT": "37,5",
                    "aytFZK": "5,8",
                    "aytKMY": "8,3",
                    "aytBYL": "5,3",
                    "siralama": "79.923"
                },
                {
                    "title": "BANDIRMA ONYEDİ EYLÜL ÜNİVERSİTESİ -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "424,8",
                    "kont": "72",
                    "tytTR": "28,8",
                    "tytSOS": "11,5",
                    "tytMAT": "31,5",
                    "tytFEN": "12,8",
                    "aytMAT": "32,5",
                    "aytFZK": "7,3",
                    "aytKMY": "8,5",
                    "aytBYL": "4,0",
                    "siralama": "79.940"
                },
                {
                    "title": "DÜZCE ÜNİVERSİTESİ  -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "424",
                    "kont": "62",
                    "tytTR": "31,3",
                    "tytSOS": "13,3",
                    "tytMAT": "24,0",
                    "tytFEN": "10,0",
                    "aytMAT": "30,8",
                    "aytFZK": "5,3",
                    "aytKMY": "10,8",
                    "aytBYL": "6,8",
                    "siralama": "80.766"
                },
                {
                    "title": "YALOVA ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "423,18",
                    "kont": "82",
                    "tytTR": "21,5",
                    "tytSOS": "9,3",
                    "tytMAT": "23,8",
                    "tytFEN": "15,0",
                    "aytMAT": "31,3",
                    "aytFZK": "11,5",
                    "aytKMY": "6,0",
                    "aytBYL": "7,0",
                    "siralama": "81.634"
                },
                {
                    "title": "KOCAELİ SAĞLIK VE TEKNOLOJİ ÜNİVERSİTESİ -(Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "423,04",
                    "kont": "5",
                    "tytTR": "27,8",
                    "tytSOS": "18,8",
                    "tytMAT": "17,8",
                    "tytFEN": "10,0",
                    "aytMAT": "31,0",
                    "aytFZK": "7,8",
                    "aytKMY": "6,8",
                    "aytBYL": "8,0",
                    "siralama": "81.768"
                },
                {
                    "title": "İSTANBUL ESENYURT ÜNİVERSİTESİ -(Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "422,06",
                    "kont": "5",
                    "tytTR": "24,8",
                    "tytSOS": "14,3",
                    "tytMAT": "20,8",
                    "tytFEN": "12,0",
                    "aytMAT": "31,5",
                    "aytFZK": "11,5",
                    "aytKMY": "8,3",
                    "aytBYL": "5,8",
                    "siralama": "82.705"
                },
                {
                    "title": "SİVAS BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "421,93",
                    "kont": "26",
                    "tytTR": "17,8",
                    "tytSOS": "11,5",
                    "tytMAT": "14,8",
                    "tytFEN": "14,0",
                    "aytMAT": "35,8",
                    "aytFZK": "9,3",
                    "aytKMY": "7,5",
                    "aytBYL": "6,5",
                    "siralama": "82.867"
                },
                {
                    "title": "ADANA ALPARSLAN TÜRKEŞ BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "420,45",
                    "kont": "72",
                    "tytTR": "27,3",
                    "tytSOS": "9,5",
                    "tytMAT": "26,0",
                    "tytFEN": "12,5",
                    "aytMAT": "30,0",
                    "aytFZK": "6,5",
                    "aytKMY": "9,5",
                    "aytBYL": "6,8",
                    "siralama": "84.251"
                },
                {
                    "title": "İSTANBUL RUMELİ ÜNİVERSİTESİ -(Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "419,84",
                    "kont": "15",
                    "tytTR": "26,3",
                    "tytSOS": "8,8",
                    "tytMAT": "32,3",
                    "tytFEN": "10,0",
                    "aytMAT": "30,5",
                    "aytFZK": "6,5",
                    "aytKMY": "9,3",
                    "aytBYL": "5,8",
                    "siralama": "84.840"
                },
                {
                    "title": "KONYA TEKNİK ÜNİVERSİTESİ -(İÖ) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "419,38",
                    "kont": "82",
                    "tytTR": "29,0",
                    "tytSOS": "13,0",
                    "tytMAT": "20,8",
                    "tytFEN": "11,3",
                    "aytMAT": "25,8",
                    "aytFZK": "10,5",
                    "aytKMY": "7,5",
                    "aytBYL": "6,8",
                    "siralama": "85.309"
                },
                {
                    "title": "ERCİYES ÜNİVERSİTESİ -(İÖ) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "419,12",
                    "kont": "88",
                    "tytTR": "24,3",
                    "tytSOS": "15,8",
                    "tytMAT": "22,5",
                    "tytFEN": "11,3",
                    "aytMAT": "23,5",
                    "aytFZK": "9,0",
                    "aytKMY": "9,8",
                    "aytBYL": "8,0",
                    "siralama": "85.613"
                },
                {
                    "title": "ATATÜRK ÜNİVERSİTESİ -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "418,77",
                    "kont": "82",
                    "tytTR": "30,5",
                    "tytSOS": "13,0",
                    "tytMAT": "24,8",
                    "tytFEN": "15,3",
                    "aytMAT": "26,0",
                    "aytFZK": "7,0",
                    "aytKMY": "6,0",
                    "aytBYL": "9,3",
                    "siralama": "85.958"
                },
                {
                    "title": "KADİR HAS ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "418,61",
                    "kont": "61",
                    "tytTR": "22,3",
                    "tytSOS": "8,0",
                    "tytMAT": "18,8",
                    "tytFEN": "7,8",
                    "aytMAT": "34,3",
                    "aytFZK": "7,3",
                    "aytKMY": "10,8",
                    "aytBYL": "7,0",
                    "siralama": "86.120"
                },
                {
                    "title": "BANDIRMA ONYEDİ EYLÜL ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "418,42",
                    "kont": "62",
                    "tytTR": "24,0",
                    "tytSOS": "7,8",
                    "tytMAT": "29,3",
                    "tytFEN": "14,3",
                    "aytMAT": "31,8",
                    "aytFZK": "7,0",
                    "aytKMY": "7,3",
                    "aytBYL": "8,0",
                    "siralama": "86.315"
                },
                {
                    "title": "İSTANBUL AYDIN ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "416,6",
                    "kont": "72",
                    "tytTR": "35,3",
                    "tytSOS": "16,5",
                    "tytMAT": "22,5",
                    "tytFEN": "10,0",
                    "aytMAT": "26,0",
                    "aytFZK": "6,0",
                    "aytKMY": "7,8",
                    "aytBYL": "7,3",
                    "siralama": "88.143"
                },
                {
                    "title": "DÜZCE ÜNİVERSİTESİ  -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "415,2",
                    "kont": "93",
                    "tytTR": "31,3",
                    "tytSOS": "12,0",
                    "tytMAT": "33,5",
                    "tytFEN": "15,0",
                    "aytMAT": "32,3",
                    "aytFZK": "1,8",
                    "aytKMY": "7,3",
                    "aytBYL": "3,5",
                    "siralama": "89.568"
                },
                {
                    "title": "IŞIK ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "414,56",
                    "kont": "20",
                    "tytTR": "32,5",
                    "tytSOS": "15,3",
                    "tytMAT": "30,5",
                    "tytFEN": "15,0",
                    "aytMAT": "25,5",
                    "aytFZK": "6,5",
                    "aytKMY": "5,8",
                    "aytBYL": "4,8",
                    "siralama": "90.263"
                },
                {
                    "title": "AVRASYA ÜNİVERSİTESİ -(Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "414,4",
                    "kont": "3",
                    "tytTR": "23,5",
                    "tytSOS": "9,3",
                    "tytMAT": "28,8",
                    "tytFEN": "11,8",
                    "aytMAT": "26,3",
                    "aytFZK": "5,8",
                    "aytKMY": "8,3",
                    "aytBYL": "11,0",
                    "siralama": "90.455"
                },
                {
                    "title": "KADİR HAS ÜNİVERSİTESİ -(İngilizce) (Ücretli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "413,47",
                    "kont": "3",
                    "tytTR": "19,5",
                    "tytSOS": "0,0",
                    "tytMAT": "38,8",
                    "tytFEN": "12,0",
                    "aytMAT": "36,3",
                    "aytFZK": "7,8",
                    "aytKMY": "7,3",
                    "aytBYL": "3,3",
                    "siralama": "91.510"
                },
                {
                    "title": "SELÇUK ÜNİVERSİTESİ -(İÖ) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "413,14",
                    "kont": "66",
                    "tytTR": "33,8",
                    "tytSOS": "6,3",
                    "tytMAT": "23,3",
                    "tytFEN": "12,8",
                    "aytMAT": "28,3",
                    "aytFZK": "2,8",
                    "aytKMY": "11,8",
                    "aytBYL": "8,0",
                    "siralama": "91.863"
                },
                {
                    "title": "TEKİRDAĞ NAMIK KEMAL ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "412,78",
                    "kont": "72",
                    "tytTR": "33,8",
                    "tytSOS": "10,8",
                    "tytMAT": "25,3",
                    "tytFEN": "15,5",
                    "aytMAT": "25,0",
                    "aytFZK": "5,8",
                    "aytKMY": "7,8",
                    "aytBYL": "5,5",
                    "siralama": "92.218"
                },
                {
                    "title": "SÜLEYMAN DEMİREL ÜNİVERSİTESİ -(İÖ) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "412,26",
                    "kont": "72",
                    "tytTR": "21,5",
                    "tytSOS": "2,8",
                    "tytMAT": "17,0",
                    "tytFEN": "14,3",
                    "aytMAT": "28,0",
                    "aytFZK": "7,3",
                    "aytKMY": "9,8",
                    "aytBYL": "11,8",
                    "siralama": "92.803"
                },
                {
                    "title": "KIRIKKALE ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "409,66",
                    "kont": "72",
                    "tytTR": "26,8",
                    "tytSOS": "10,3",
                    "tytMAT": "21,8",
                    "tytFEN": "17,5",
                    "aytMAT": "31,0",
                    "aytFZK": "4,3",
                    "aytKMY": "9,5",
                    "aytBYL": "4,3",
                    "siralama": "95.548"
                },
                {
                    "title": "KARABÜK ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "409,66",
                    "kont": "72",
                    "tytTR": "27,5",
                    "tytSOS": "15,5",
                    "tytMAT": "15,0",
                    "tytFEN": "11,0",
                    "aytMAT": "22,0",
                    "aytFZK": "9,8",
                    "aytKMY": "7,5",
                    "aytBYL": "11,8",
                    "siralama": "95.554"
                },
                {
                    "title": "ESKİŞEHİR TEKNİK ÜNİVERSİTESİ -(İngilizce) (KKTC Uyruklu) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "409,03",
                    "kont": "1",
                    "tytTR": "23,8",
                    "tytSOS": "10,0",
                    "tytMAT": "22,5",
                    "tytFEN": "13,8",
                    "aytMAT": "26,5",
                    "aytFZK": "7,8",
                    "aytKMY": "9,3",
                    "aytBYL": "6,8",
                    "siralama": "96.200"
                },
                {
                    "title": "NECMETTİN ERBAKAN ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "408,8",
                    "kont": "77",
                    "tytTR": "29,3",
                    "tytSOS": "10,0",
                    "tytMAT": "28,5",
                    "tytFEN": "9,8",
                    "aytMAT": "24,3",
                    "aytFZK": "8,0",
                    "aytKMY": "7,3",
                    "aytBYL": "7,3",
                    "siralama": "96.474"
                },
                {
                    "title": "ALANYA HAMDULLAH EMİN PAŞA ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "408,31",
                    "kont": "10",
                    "tytTR": "17,8",
                    "tytSOS": "5,8",
                    "tytMAT": "20,8",
                    "tytFEN": "15,0",
                    "aytMAT": "32,5",
                    "aytFZK": "6,5",
                    "aytKMY": "10,5",
                    "aytBYL": "8,0",
                    "siralama": "96.986"
                },
                {
                    "title": "KÜTAHYA DUMLUPINAR ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "407,67",
                    "kont": "82",
                    "tytTR": "28,8",
                    "tytSOS": "13,8",
                    "tytMAT": "26,3",
                    "tytFEN": "16,3",
                    "aytMAT": "18,0",
                    "aytFZK": "9,0",
                    "aytKMY": "9,5",
                    "aytBYL": "4,3",
                    "siralama": "97.664"
                },
                {
                    "title": "İSTANBUL TİCARET ÜNİVERSİTESİ -(%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "405,57",
                    "kont": "45",
                    "tytTR": "28,0",
                    "tytSOS": "15,5",
                    "tytMAT": "25,5",
                    "tytFEN": "12,0",
                    "aytMAT": "28,5",
                    "aytFZK": "3,5",
                    "aytKMY": "7,5",
                    "aytBYL": "6,5",
                    "siralama": "99.932"
                },
                {
                    "title": "BAŞKENT ÜNİVERSİTESİ -(%25 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "404,93",
                    "kont": "58",
                    "tytTR": "26,5",
                    "tytSOS": "7,5",
                    "tytMAT": "20,3",
                    "tytFEN": "11,8",
                    "aytMAT": "31,0",
                    "aytFZK": "6,5",
                    "aytKMY": "5,8",
                    "aytBYL": "6,8",
                    "siralama": "100.615"
                },
                {
                    "title": "ZONGULDAK BÜLENT ECEVİT ÜNİVERSİTESİ  -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "401,3",
                    "kont": "72",
                    "tytTR": "31,3",
                    "tytSOS": "13,0",
                    "tytMAT": "31,5",
                    "tytFEN": "10,8",
                    "aytMAT": "27,3",
                    "aytFZK": "5,5",
                    "aytKMY": "6,0",
                    "aytBYL": "5,5",
                    "siralama": "104.617"
                },
                {
                    "title": "DOĞU AKDENİZ ÜNİVERSİTESİ -(Burslu) (4 Yıllık)",
                    "type": "KKTC",
                    "tp": "400,38",
                    "kont": "10",
                    "tytTR": "30,3",
                    "tytSOS": "14,0",
                    "tytMAT": "23,3",
                    "tytFEN": "13,8",
                    "aytMAT": "23,5",
                    "aytFZK": "2,3",
                    "aytKMY": "8,8",
                    "aytBYL": "6,8",
                    "siralama": "105.686"
                },
                {
                    "title": "ATATÜRK ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "399,08",
                    "kont": "72",
                    "tytTR": "25,0",
                    "tytSOS": "15,5",
                    "tytMAT": "23,5",
                    "tytFEN": "16,3",
                    "aytMAT": "22,0",
                    "aytFZK": "6,5",
                    "aytKMY": "6,5",
                    "aytBYL": "7,5",
                    "siralama": "107.116"
                },
                {
                    "title": "İSTANBUL SABAHATTİN ZAİM ÜNİVERSİTESİ  -(%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "397,67",
                    "kont": "47",
                    "tytTR": "31,8",
                    "tytSOS": "13,0",
                    "tytMAT": "36,8",
                    "tytFEN": "12,8",
                    "aytMAT": "22,8",
                    "aytFZK": "7,3",
                    "aytKMY": "2,0",
                    "aytBYL": "4,0",
                    "siralama": "108.754"
                },
                {
                    "title": "İSTANBUL BİLGİ ÜNİVERSİTESİ -(İngilizce) (Ücretli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "396,52",
                    "kont": "13",
                    "tytTR": "31,3",
                    "tytSOS": "15,3",
                    "tytMAT": "20,3",
                    "tytFEN": "9,5",
                    "aytMAT": "21,0",
                    "aytFZK": "5,5",
                    "aytKMY": "8,3",
                    "aytBYL": "8,0",
                    "siralama": "110.091"
                },
                {
                    "title": "ISPARTA UYGULAMALI BİLİMLER ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "396,43",
                    "kont": "50",
                    "tytTR": "30,3",
                    "tytSOS": "8,3",
                    "tytMAT": "26,3",
                    "tytFEN": "10,3",
                    "aytMAT": "31,5",
                    "aytFZK": "2,3",
                    "aytKMY": "7,0",
                    "aytBYL": "3,5",
                    "siralama": "110.206"
                },
                {
                    "title": "HASAN KALYONCU ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "395,87",
                    "kont": "15",
                    "tytTR": "26,0",
                    "tytSOS": "11,5",
                    "tytMAT": "27,3",
                    "tytFEN": "8,8",
                    "aytMAT": "27,3",
                    "aytFZK": "4,5",
                    "aytKMY": "7,3",
                    "aytBYL": "6,8",
                    "siralama": "110.819"
                },
                {
                    "title": "BİLECİK ŞEYH EDEBALİ ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "395,18",
                    "kont": "72",
                    "tytTR": "27,5",
                    "tytSOS": "15,0",
                    "tytMAT": "29,3",
                    "tytFEN": "13,8",
                    "aytMAT": "20,8",
                    "aytFZK": "5,3",
                    "aytKMY": "9,5",
                    "aytBYL": "3,0",
                    "siralama": "111.602"
                },
                {
                    "title": "ERZURUM TEKNİK ÜNİVERSİTESİ -(İngilizce) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "393,98",
                    "kont": "41",
                    "tytTR": "29,8",
                    "tytSOS": "10,0",
                    "tytMAT": "9,5",
                    "tytFEN": "12,0",
                    "aytMAT": "27,5",
                    "aytFZK": "6,0",
                    "aytKMY": "7,8",
                    "aytBYL": "8,8",
                    "siralama": "113.031"
                },
                {
                    "title": "HALİÇ ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "393,95",
                    "kont": "59",
                    "tytTR": "32,0",
                    "tytSOS": "14,3",
                    "tytMAT": "17,0",
                    "tytFEN": "15,8",
                    "aytMAT": "21,0",
                    "aytFZK": "6,8",
                    "aytKMY": "4,8",
                    "aytBYL": "7,5",
                    "siralama": "113.069"
                },
                {
                    "title": "OSTİM TEKNİK ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "393,46",
                    "kont": "42",
                    "tytTR": "32,8",
                    "tytSOS": "11,0",
                    "tytMAT": "32,8",
                    "tytFEN": "15,5",
                    "aytMAT": "28,5",
                    "aytFZK": "4,5",
                    "aytKMY": "1,5",
                    "aytBYL": "3,0",
                    "siralama": "113.639"
                },
                {
                    "title": "DÜZCE ÜNİVERSİTESİ  -(İÖ) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "392,81",
                    "kont": "93",
                    "tytTR": "22,5",
                    "tytSOS": "15,5",
                    "tytMAT": "22,8",
                    "tytFEN": "11,8",
                    "aytMAT": "13,3",
                    "aytFZK": "9,5",
                    "aytKMY": "6,5",
                    "aytBYL": "11,8",
                    "siralama": "114.360"
                },
                {
                    "title": "YAŞAR ÜNİVERSİTESİ -(İngilizce) (Ücretli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "392,67",
                    "kont": "14",
                    "tytTR": "29,0",
                    "tytSOS": "8,3",
                    "tytMAT": "30,8",
                    "tytFEN": "10,3",
                    "aytMAT": "31,5",
                    "aytFZK": "3,3",
                    "aytKMY": "8,0",
                    "aytBYL": "0,8",
                    "siralama": "114.542"
                },
                {
                    "title": "KAYSERİ ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "392,65",
                    "kont": "62",
                    "tytTR": "26,5",
                    "tytSOS": "12,8",
                    "tytMAT": "23,0",
                    "tytFEN": "13,0",
                    "aytMAT": "25,8",
                    "aytFZK": "5,5",
                    "aytKMY": "8,3",
                    "aytBYL": "4,3",
                    "siralama": "114.573"
                },
                {
                    "title": "ACIBADEM MEHMET ALİ AYDINLAR ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "392,45",
                    "kont": "50",
                    "tytTR": "20,8",
                    "tytSOS": "9,3",
                    "tytMAT": "22,8",
                    "tytFEN": "16,5",
                    "aytMAT": "23,8",
                    "aytFZK": "8,0",
                    "aytKMY": "9,3",
                    "aytBYL": "2,0",
                    "siralama": "114.796"
                },
                {
                    "title": "TEKİRDAĞ NAMIK KEMAL ÜNİVERSİTESİ -(İÖ) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "392,05",
                    "kont": "62",
                    "tytTR": "15,0",
                    "tytSOS": "6,8",
                    "tytMAT": "28,0",
                    "tytFEN": "16,3",
                    "aytMAT": "24,0",
                    "aytFZK": "10,3",
                    "aytKMY": "7,5",
                    "aytBYL": "5,5",
                    "siralama": "115.274"
                },
                {
                    "title": "FATİH SULTAN MEHMET VAKIF ÜNİVERSİTESİ -(%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "391,08",
                    "kont": "46",
                    "tytTR": "31,5",
                    "tytSOS": "12,0",
                    "tytMAT": "12,8",
                    "tytFEN": "10,8",
                    "aytMAT": "25,3",
                    "aytFZK": "7,0",
                    "aytKMY": "9,8",
                    "aytBYL": "3,8",
                    "siralama": "116.413"
                },
                {
                    "title": "BAŞKENT ÜNİVERSİTESİ -(Ücretli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "389,79",
                    "kont": "14",
                    "tytTR": "31,8",
                    "tytSOS": "10,0",
                    "tytMAT": "20,0",
                    "tytFEN": "12,5",
                    "aytMAT": "18,3",
                    "aytFZK": "4,3",
                    "aytKMY": "8,5",
                    "aytBYL": "9,3",
                    "siralama": "117.986"
                },
                {
                    "title": "İNÖNÜ ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "389,56",
                    "kont": "82",
                    "tytTR": "21,5",
                    "tytSOS": "12,3",
                    "tytMAT": "26,8",
                    "tytFEN": "8,5",
                    "aytMAT": "27,3",
                    "aytFZK": "4,3",
                    "aytKMY": "9,3",
                    "aytBYL": "4,3",
                    "siralama": "118.268"
                },
                {
                    "title": "ANKARA ÜNİVERSİTESİ -(İngilizce) (UOLP-Azerbaycan Teknik Üniversitesi) (Ücretli) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "389,2",
                    "kont": "5",
                    "tytTR": "34,0",
                    "tytSOS": "11,3",
                    "tytMAT": "35,3",
                    "tytFEN": "11,3",
                    "aytMAT": "20,5",
                    "aytFZK": "7,3",
                    "aytKMY": "4,3",
                    "aytBYL": "1,0",
                    "siralama": "118.719"
                },
                {
                    "title": "BURDUR MEHMET AKİF ERSOY ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "389,08",
                    "kont": "67",
                    "tytTR": "25,5",
                    "tytSOS": "12,8",
                    "tytMAT": "23,3",
                    "tytFEN": "11,8",
                    "aytMAT": "23,3",
                    "aytFZK": "8,3",
                    "aytKMY": "7,3",
                    "aytBYL": "6,0",
                    "siralama": "118.868"
                },
                {
                    "title": "AFYON KOCATEPE ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "386,6",
                    "kont": "67",
                    "tytTR": "34,3",
                    "tytSOS": "15,8",
                    "tytMAT": "20,8",
                    "tytFEN": "10,0",
                    "aytMAT": "19,0",
                    "aytFZK": "5,0",
                    "aytKMY": "5,5",
                    "aytBYL": "8,3",
                    "siralama": "121.938"
                },
                {
                    "title": "ANTALYA BİLİM ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "385,05",
                    "kont": "59",
                    "tytTR": "18,0",
                    "tytSOS": "9,3",
                    "tytMAT": "28,3",
                    "tytFEN": "13,0",
                    "aytMAT": "32,3",
                    "aytFZK": "2,5",
                    "aytKMY": "5,5",
                    "aytBYL": "6,5",
                    "siralama": "123.895"
                },
                {
                    "title": "ORTA DOĞU TEKNİK ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "383,62",
                    "kont": "80",
                    "tytTR": "20,3",
                    "tytSOS": "11,8",
                    "tytMAT": "28,8",
                    "tytFEN": "10,5",
                    "aytMAT": "23,0",
                    "aytFZK": "8,0",
                    "aytKMY": "4,8",
                    "aytBYL": "4,8",
                    "siralama": "125.652"
                },
                {
                    "title": "ÜSKÜDAR ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "383,23",
                    "kont": "62",
                    "tytTR": "25,5",
                    "tytSOS": "15,3",
                    "tytMAT": "24,8",
                    "tytFEN": "7,3",
                    "aytMAT": "23,3",
                    "aytFZK": "3,8",
                    "aytKMY": "7,3",
                    "aytBYL": "6,0",
                    "siralama": "126.121"
                },
                {
                    "title": "KÜTAHYA DUMLUPINAR ÜNİVERSİTESİ -(İÖ) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "382,75",
                    "kont": "72",
                    "tytTR": "30,0",
                    "tytSOS": "10,0",
                    "tytMAT": "26,8",
                    "tytFEN": "7,5",
                    "aytMAT": "28,5",
                    "aytFZK": "2,8",
                    "aytKMY": "2,8",
                    "aytBYL": "6,0",
                    "siralama": "126.739"
                },
                {
                    "title": "ALTINBAŞ ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "381,01",
                    "kont": "30",
                    "tytTR": "30,5",
                    "tytSOS": "14,3",
                    "tytMAT": "16,5",
                    "tytFEN": "14,3",
                    "aytMAT": "22,5",
                    "aytFZK": "3,8",
                    "aytKMY": "6,8",
                    "aytBYL": "4,3",
                    "siralama": "128.997"
                },
                {
                    "title": "KIRIKKALE ÜNİVERSİTESİ -(İÖ) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "378,66",
                    "kont": "62",
                    "tytTR": "31,0",
                    "tytSOS": "9,5",
                    "tytMAT": "25,0",
                    "tytFEN": "8,3",
                    "aytMAT": "24,0",
                    "aytFZK": "3,5",
                    "aytKMY": "6,0",
                    "aytBYL": "5,0",
                    "siralama": "132.084"
                },
                {
                    "title": "FIRAT ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "377,67",
                    "kont": "93",
                    "tytTR": "26,8",
                    "tytSOS": "11,8",
                    "tytMAT": "23,0",
                    "tytFEN": "12,3",
                    "aytMAT": "24,0",
                    "aytFZK": "8,0",
                    "aytKMY": "4,5",
                    "aytBYL": "4,5",
                    "siralama": "133.429"
                },
                {
                    "title": "KARABÜK ÜNİVERSİTESİ -(İÖ) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "377,65",
                    "kont": "72",
                    "tytTR": "30,0",
                    "tytSOS": "13,0",
                    "tytMAT": "27,8",
                    "tytFEN": "10,8",
                    "aytMAT": "22,8",
                    "aytFZK": "5,5",
                    "aytKMY": "3,3",
                    "aytBYL": "2,8",
                    "siralama": "133.451"
                },
                {
                    "title": "ORTA DOĞU TEKNİK ÜNİVERSİTESİ -(İngilizce) (Ücretli) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "377,26",
                    "kont": "10",
                    "tytTR": "16,3",
                    "tytSOS": "12,5",
                    "tytMAT": "29,8",
                    "tytFEN": "12,8",
                    "aytMAT": "20,8",
                    "aytFZK": "5,5",
                    "aytKMY": "4,0",
                    "aytBYL": "7,3",
                    "siralama": "133.969"
                },
                {
                    "title": "KÜTAHYA SAĞLIK BİLİMLERİ ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "375,36",
                    "kont": "41",
                    "tytTR": "24,5",
                    "tytSOS": "8,5",
                    "tytMAT": "21,3",
                    "tytFEN": "11,5",
                    "aytMAT": "22,3",
                    "aytFZK": "1,8",
                    "aytKMY": "9,5",
                    "aytBYL": "8,3",
                    "siralama": "136.646"
                },
                {
                    "title": "ATILIM ÜNİVERSİTESİ -(İngilizce) (%25 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "374,37",
                    "kont": "76",
                    "tytTR": "32,5",
                    "tytSOS": "12,5",
                    "tytMAT": "33,3",
                    "tytFEN": "5,0",
                    "aytMAT": "22,5",
                    "aytFZK": "4,0",
                    "aytKMY": "7,5",
                    "aytBYL": "-1,8",
                    "siralama": "138.053"
                },
                {
                    "title": "MALTEPE ÜNİVERSİTESİ -(İngilizce) (%25 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "373,19",
                    "kont": "18",
                    "tytTR": "27,3",
                    "tytSOS": "9,0",
                    "tytMAT": "19,8",
                    "tytFEN": "10,0",
                    "aytMAT": "17,0",
                    "aytFZK": "4,5",
                    "aytKMY": "10,5",
                    "aytBYL": "6,0",
                    "siralama": "139.659"
                },
                {
                    "title": "SİVAS CUMHURİYET ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "373,08",
                    "kont": "72",
                    "tytTR": "26,3",
                    "tytSOS": "10,3",
                    "tytMAT": "19,3",
                    "tytFEN": "12,5",
                    "aytMAT": "24,5",
                    "aytFZK": "-0,8",
                    "aytKMY": "8,3",
                    "aytBYL": "9,3",
                    "siralama": "139.801"
                },
                {
                    "title": "ZONGULDAK BÜLENT ECEVİT ÜNİVERSİTESİ  -(İÖ) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "372,6",
                    "kont": "62",
                    "tytTR": "31,3",
                    "tytSOS": "15,5",
                    "tytMAT": "26,0",
                    "tytFEN": "15,0",
                    "aytMAT": "21,8",
                    "aytFZK": "2,0",
                    "aytKMY": "4,0",
                    "aytBYL": "5,8",
                    "siralama": "140.464"
                },
                {
                    "title": "TARSUS ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "372,16",
                    "kont": "62",
                    "tytTR": "28,8",
                    "tytSOS": "10,8",
                    "tytMAT": "27,3",
                    "tytFEN": "10,0",
                    "aytMAT": "25,3",
                    "aytFZK": "1,5",
                    "aytKMY": "5,3",
                    "aytBYL": "3,8",
                    "siralama": "141.068"
                },
                {
                    "title": "KASTAMONU ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "372,08",
                    "kont": "67",
                    "tytTR": "20,5",
                    "tytSOS": "10,5",
                    "tytMAT": "23,5",
                    "tytFEN": "12,5",
                    "aytMAT": "20,0",
                    "aytFZK": "3,3",
                    "aytKMY": "7,5",
                    "aytBYL": "7,3",
                    "siralama": "141.160"
                },
                {
                    "title": "İSTANBUL KÜLTÜR ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "370,33",
                    "kont": "79",
                    "tytTR": "33,5",
                    "tytSOS": "9,3",
                    "tytMAT": "25,0",
                    "tytFEN": "11,0",
                    "aytMAT": "30,8",
                    "aytFZK": "0,0",
                    "aytKMY": "2,0",
                    "aytBYL": "2,0",
                    "siralama": "143.676"
                },
                {
                    "title": "ATATÜRK ÜNİVERSİTESİ -(İÖ) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "368,71",
                    "kont": "62",
                    "tytTR": "15,8",
                    "tytSOS": "8,3",
                    "tytMAT": "24,5",
                    "tytFEN": "10,8",
                    "aytMAT": "26,5",
                    "aytFZK": "5,5",
                    "aytKMY": "7,0",
                    "aytBYL": "5,8",
                    "siralama": "146.041"
                },
                {
                    "title": "İSTANBUL TİCARET ÜNİVERSİTESİ -(Ücretli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "367,44",
                    "kont": "10",
                    "tytTR": "31,3",
                    "tytSOS": "11,8",
                    "tytMAT": "20,0",
                    "tytFEN": "13,5",
                    "aytMAT": "23,0",
                    "aytFZK": "3,0",
                    "aytKMY": "7,0",
                    "aytBYL": "2,5",
                    "siralama": "147.935"
                },
                {
                    "title": "IŞIK ÜNİVERSİTESİ -(İngilizce) (Ücretli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "367,3",
                    "kont": "20",
                    "tytTR": "26,0",
                    "tytSOS": "9,5",
                    "tytMAT": "22,8",
                    "tytFEN": "8,3",
                    "aytMAT": "27,8",
                    "aytFZK": "3,5",
                    "aytKMY": "1,5",
                    "aytBYL": "6,3",
                    "siralama": "148.124"
                },
                {
                    "title": "NECMETTİN ERBAKAN ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "366,46",
                    "kont": "72",
                    "tytTR": "31,8",
                    "tytSOS": "10,3",
                    "tytMAT": "14,5",
                    "tytFEN": "17,5",
                    "aytMAT": "20,8",
                    "aytFZK": "7,5",
                    "aytKMY": "3,5",
                    "aytBYL": "3,8",
                    "siralama": "149.371"
                },
                {
                    "title": "İSKENDERUN TEKNİK ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "365,13",
                    "kont": "82",
                    "tytTR": "27,3",
                    "tytSOS": "13,0",
                    "tytMAT": "25,5",
                    "tytFEN": "8,3",
                    "aytMAT": "27,3",
                    "aytFZK": "4,8",
                    "aytKMY": "5,0",
                    "aytBYL": "-1,0",
                    "siralama": "151.354"
                },
                {
                    "title": "TÜRK HAVA KURUMU ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "365,1",
                    "kont": "71",
                    "tytTR": "25,0",
                    "tytSOS": "3,3",
                    "tytMAT": "19,0",
                    "tytFEN": "12,5",
                    "aytMAT": "21,8",
                    "aytFZK": "4,0",
                    "aytKMY": "9,5",
                    "aytBYL": "4,3",
                    "siralama": "151.404"
                },
                {
                    "title": "BARTIN ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "363,88",
                    "kont": "82",
                    "tytTR": "27,5",
                    "tytSOS": "12,8",
                    "tytMAT": "13,5",
                    "tytFEN": "12,0",
                    "aytMAT": "25,0",
                    "aytFZK": "0,0",
                    "aytKMY": "6,3",
                    "aytBYL": "4,8",
                    "siralama": "153.242"
                },
                {
                    "title": "NEVŞEHİR HACI BEKTAŞ VELİ ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "363,33",
                    "kont": "52",
                    "tytTR": "31,3",
                    "tytSOS": "9,5",
                    "tytMAT": "22,0",
                    "tytFEN": "14,0",
                    "aytMAT": "20,0",
                    "aytFZK": "3,0",
                    "aytKMY": "3,3",
                    "aytBYL": "3,3",
                    "siralama": "154.072"
                },
                {
                    "title": "BİRUNİ ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "362,2",
                    "kont": "42",
                    "tytTR": "34,3",
                    "tytSOS": "13,5",
                    "tytMAT": "25,0",
                    "tytFEN": "10,5",
                    "aytMAT": "23,0",
                    "aytFZK": "2,0",
                    "aytKMY": "4,8",
                    "aytBYL": "0,3",
                    "siralama": "155.768"
                },
                {
                    "title": "OSTİM TEKNİK ÜNİVERSİTESİ -(%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "360,47",
                    "kont": "42",
                    "tytTR": "22,5",
                    "tytSOS": "11,5",
                    "tytMAT": "27,0",
                    "tytFEN": "17,5",
                    "aytMAT": "20,3",
                    "aytFZK": "0,5",
                    "aytKMY": "2,0",
                    "aytBYL": "6,8",
                    "siralama": "158.385"
                },
                {
                    "title": "KAHRAMANMARAŞ SÜTÇÜ İMAM ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "359,68",
                    "kont": "67",
                    "tytTR": "30,0",
                    "tytSOS": "12,3",
                    "tytMAT": "17,0",
                    "tytFEN": "14,5",
                    "aytMAT": "20,3",
                    "aytFZK": "4,3",
                    "aytKMY": "1,3",
                    "aytBYL": "4,3",
                    "siralama": "159.616"
                },
                {
                    "title": "ANKARA BİLİM ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "359,36",
                    "kont": "43",
                    "tytTR": "31,3",
                    "tytSOS": "13,8",
                    "tytMAT": "16,5",
                    "tytFEN": "14,3",
                    "aytMAT": "17,0",
                    "aytFZK": "0,8",
                    "aytKMY": "5,8",
                    "aytBYL": "5,5",
                    "siralama": "160.142"
                },
                {
                    "title": "İSTİNYE ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "357,83",
                    "kont": "51",
                    "tytTR": "27,5",
                    "tytSOS": "15,3",
                    "tytMAT": "20,3",
                    "tytFEN": "11,3",
                    "aytMAT": "14,8",
                    "aytFZK": "6,8",
                    "aytKMY": "6,0",
                    "aytBYL": "4,5",
                    "siralama": "162.602"
                },
                {
                    "title": "KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "357,28",
                    "kont": "62",
                    "tytTR": "17,3",
                    "tytSOS": "5,0",
                    "tytMAT": "17,3",
                    "tytFEN": "8,8",
                    "aytMAT": "32,0",
                    "aytFZK": "4,5",
                    "aytKMY": "6,8",
                    "aytBYL": "1,0",
                    "siralama": "163.530"
                },
                {
                    "title": "AMASYA ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "354,6",
                    "kont": "62",
                    "tytTR": "26,3",
                    "tytSOS": "8,5",
                    "tytMAT": "19,0",
                    "tytFEN": "15,3",
                    "aytMAT": "21,5",
                    "aytFZK": "2,8",
                    "aytKMY": "6,8",
                    "aytBYL": "4,3",
                    "siralama": "168.041"
                },
                {
                    "title": "İNÖNÜ ÜNİVERSİTESİ -(İÖ) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "354,49",
                    "kont": "72",
                    "tytTR": "23,0",
                    "tytSOS": "11,0",
                    "tytMAT": "18,0",
                    "tytFEN": "8,0",
                    "aytMAT": "21,5",
                    "aytFZK": "3,0",
                    "aytKMY": "4,8",
                    "aytBYL": "7,0",
                    "siralama": "168.224"
                },
                {
                    "title": "ERZURUM TEKNİK ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "354,06",
                    "kont": "72",
                    "tytTR": "28,3",
                    "tytSOS": "9,0",
                    "tytMAT": "16,3",
                    "tytFEN": "9,0",
                    "aytMAT": "23,0",
                    "aytFZK": "3,3",
                    "aytKMY": "8,0",
                    "aytBYL": "1,3",
                    "siralama": "168.987"
                },
                {
                    "title": "BEYKENT ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "353,77",
                    "kont": "60",
                    "tytTR": "28,5",
                    "tytSOS": "12,3",
                    "tytMAT": "24,0",
                    "tytFEN": "9,0",
                    "aytMAT": "17,8",
                    "aytFZK": "1,0",
                    "aytKMY": "5,8",
                    "aytBYL": "4,8",
                    "siralama": "169.505"
                },
                {
                    "title": "FIRAT ÜNİVERSİTESİ -(İÖ) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "353,72",
                    "kont": "88",
                    "tytTR": "28,0",
                    "tytSOS": "10,8",
                    "tytMAT": "13,5",
                    "tytFEN": "7,8",
                    "aytMAT": "17,3",
                    "aytFZK": "5,8",
                    "aytKMY": "5,5",
                    "aytBYL": "6,0",
                    "siralama": "169.576"
                },
                {
                    "title": "RECEP TAYYİP ERDOĞAN ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "353,25",
                    "kont": "62",
                    "tytTR": "24,8",
                    "tytSOS": "12,3",
                    "tytMAT": "31,0",
                    "tytFEN": "13,0",
                    "aytMAT": "15,5",
                    "aytFZK": "4,3",
                    "aytKMY": "2,0",
                    "aytBYL": "3,8",
                    "siralama": "170.410"
                },
                {
                    "title": "GİRESUN ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "353,22",
                    "kont": "52",
                    "tytTR": "21,3",
                    "tytSOS": "8,8",
                    "tytMAT": "17,0",
                    "tytFEN": "7,3",
                    "aytMAT": "32,0",
                    "aytFZK": "5,0",
                    "aytKMY": "2,5",
                    "aytBYL": "3,3",
                    "siralama": "170.445"
                },
                {
                    "title": "DOĞU AKDENİZ ÜNİVERSİTESİ -(İngilizce) (Ücretli) (4 Yıllık)",
                    "type": "KKTC",
                    "tp": "349,7",
                    "kont": "30",
                    "tytTR": "21,8",
                    "tytSOS": "16,5",
                    "tytMAT": "13,0",
                    "tytFEN": "11,5",
                    "aytMAT": "12,5",
                    "aytFZK": "8,0",
                    "aytKMY": "4,0",
                    "aytBYL": "7,3",
                    "siralama": "176.474"
                },
                {
                    "title": "MALATYA TURGUT ÖZAL ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "346,85",
                    "kont": "62",
                    "tytTR": "28,3",
                    "tytSOS": "12,5",
                    "tytMAT": "25,0",
                    "tytFEN": "9,5",
                    "aytMAT": "14,0",
                    "aytFZK": "1,3",
                    "aytKMY": "4,5",
                    "aytBYL": "6,8",
                    "siralama": "181.604"
                },
                {
                    "title": "ULUSLARARASI FİNAL ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "KKTC",
                    "tp": "346,79",
                    "kont": "5",
                    "tytTR": "16,3",
                    "tytSOS": "3,3",
                    "tytMAT": "19,8",
                    "tytFEN": "9,0",
                    "aytMAT": "27,3",
                    "aytFZK": "4,8",
                    "aytKMY": "7,5",
                    "aytBYL": "1,8",
                    "siralama": "181.707"
                },
                {
                    "title": "KTO KARATAY ÜNİVERSİTESİ -(%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "346,39",
                    "kont": "42",
                    "tytTR": "21,5",
                    "tytSOS": "13,0",
                    "tytMAT": "22,0",
                    "tytFEN": "8,5",
                    "aytMAT": "20,5",
                    "aytFZK": "0,8",
                    "aytKMY": "2,5",
                    "aytBYL": "8,0",
                    "siralama": "182.430"
                },
                {
                    "title": "TOKAT GAZİOSMANPAŞA ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "345,85",
                    "kont": "77",
                    "tytTR": "23,3",
                    "tytSOS": "5,3",
                    "tytMAT": "17,3",
                    "tytFEN": "13,8",
                    "aytMAT": "10,5",
                    "aytFZK": "7,0",
                    "aytKMY": "7,0",
                    "aytBYL": "10,5",
                    "siralama": "183.421"
                },
                {
                    "title": "DOĞU AKDENİZ ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "KKTC",
                    "tp": "345,65",
                    "kont": "10",
                    "tytTR": "29,3",
                    "tytSOS": "10,0",
                    "tytMAT": "26,8",
                    "tytFEN": "12,8",
                    "aytMAT": "21,5",
                    "aytFZK": "4,0",
                    "aytKMY": "1,8",
                    "aytBYL": "1,0",
                    "siralama": "183.810"
                },
                {
                    "title": "İSTANBUL OKAN ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "345,14",
                    "kont": "46",
                    "tytTR": "26,3",
                    "tytSOS": "9,0",
                    "tytMAT": "13,0",
                    "tytFEN": "8,8",
                    "aytMAT": "19,0",
                    "aytFZK": "1,5",
                    "aytKMY": "6,8",
                    "aytBYL": "6,8",
                    "siralama": "184.752"
                },
                {
                    "title": "NİĞDE ÖMER HALİSDEMİR ÜNİVERSİTESİ  -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "345",
                    "kont": "62",
                    "tytTR": "21,8",
                    "tytSOS": "11,0",
                    "tytMAT": "26,3",
                    "tytFEN": "8,3",
                    "aytMAT": "18,5",
                    "aytFZK": "1,8",
                    "aytKMY": "7,0",
                    "aytBYL": "3,5",
                    "siralama": "185.016"
                },
                {
                    "title": "SİVAS CUMHURİYET ÜNİVERSİTESİ -(İÖ) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "344,89",
                    "kont": "62",
                    "tytTR": "27,5",
                    "tytSOS": "13,5",
                    "tytMAT": "20,8",
                    "tytFEN": "8,0",
                    "aytMAT": "14,0",
                    "aytFZK": "3,0",
                    "aytKMY": "4,5",
                    "aytBYL": "7,3",
                    "siralama": "185.238"
                },
                {
                    "title": "ÇANKIRI KARATEKİN ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "343,71",
                    "kont": "67",
                    "tytTR": "23,8",
                    "tytSOS": "10,3",
                    "tytMAT": "26,3",
                    "tytFEN": "9,5",
                    "aytMAT": "19,0",
                    "aytFZK": "3,0",
                    "aytKMY": "5,3",
                    "aytBYL": "3,0",
                    "siralama": "187.488"
                },
                {
                    "title": "İSTANBUL KÜLTÜR ÜNİVERSİTESİ -(İngilizce) (Ücretli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "343,55",
                    "kont": "10",
                    "tytTR": "24,8",
                    "tytSOS": "15,3",
                    "tytMAT": "20,0",
                    "tytFEN": "14,3",
                    "aytMAT": "18,3",
                    "aytFZK": "6,3",
                    "aytKMY": "1,3",
                    "aytBYL": "3,8",
                    "siralama": "187.791"
                },
                {
                    "title": "NİŞANTAŞI ÜNİVERSİTESİ -(%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "343,33",
                    "kont": "50",
                    "tytTR": "24,8",
                    "tytSOS": "12,0",
                    "tytMAT": "23,3",
                    "tytFEN": "5,8",
                    "aytMAT": "21,3",
                    "aytFZK": "5,0",
                    "aytKMY": "-0,3",
                    "aytBYL": "4,3",
                    "siralama": "188.174"
                },
                {
                    "title": "VAN YÜZÜNCÜ YIL ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "343,17",
                    "kont": "52",
                    "tytTR": "13,8",
                    "tytSOS": "9,8",
                    "tytMAT": "23,8",
                    "tytFEN": "4,8",
                    "aytMAT": "28,0",
                    "aytFZK": "3,3",
                    "aytKMY": "3,8",
                    "aytBYL": "1,8",
                    "siralama": "188.466"
                },
                {
                    "title": "ANKARA BİLİM ÜNİVERSİTESİ -(İngilizce) (Ücretli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "342,18",
                    "kont": "8",
                    "tytTR": "29,3",
                    "tytSOS": "12,8",
                    "tytMAT": "22,5",
                    "tytFEN": "13,8",
                    "aytMAT": "8,5",
                    "aytFZK": "4,3",
                    "aytKMY": "4,3",
                    "aytBYL": "5,5",
                    "siralama": "190.287"
                },
                {
                    "title": "NİŞANTAŞI ÜNİVERSİTESİ -(Ücretli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "342,16",
                    "kont": "1",
                    "tytTR": "16,8",
                    "tytSOS": "3,3",
                    "tytMAT": "25,0",
                    "tytFEN": "8,3",
                    "aytMAT": "23,3",
                    "aytFZK": "0,0",
                    "aytKMY": "6,3",
                    "aytBYL": "5,5",
                    "siralama": "190.317"
                },
                {
                    "title": "KARAMANOĞLU MEHMETBEY ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "341,27",
                    "kont": "62",
                    "tytTR": "23,8",
                    "tytSOS": "11,8",
                    "tytMAT": "16,0",
                    "tytFEN": "13,8",
                    "aytMAT": "15,5",
                    "aytFZK": "2,3",
                    "aytKMY": "5,8",
                    "aytBYL": "6,3",
                    "siralama": "192.053"
                },
                {
                    "title": "BEYKOZ ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "340,98",
                    "kont": "42",
                    "tytTR": "24,0",
                    "tytSOS": "5,3",
                    "tytMAT": "22,3",
                    "tytFEN": "9,0",
                    "aytMAT": "14,8",
                    "aytFZK": "3,8",
                    "aytKMY": "5,8",
                    "aytBYL": "6,5",
                    "siralama": "192.599"
                },
                {
                    "title": "GAZİANTEP İSLAM BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "340,37",
                    "kont": "62",
                    "tytTR": "28,0",
                    "tytSOS": "11,3",
                    "tytMAT": "27,5",
                    "tytFEN": "12,5",
                    "aytMAT": "12,5",
                    "aytFZK": "2,8",
                    "aytKMY": "3,0",
                    "aytBYL": "4,3",
                    "siralama": "193.775"
                },
                {
                    "title": "İSKENDERUN TEKNİK ÜNİVERSİTESİ -(İÖ) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "339,91",
                    "kont": "82",
                    "tytTR": "25,3",
                    "tytSOS": "16,3",
                    "tytMAT": "21,8",
                    "tytFEN": "10,3",
                    "aytMAT": "9,8",
                    "aytFZK": "2,3",
                    "aytKMY": "1,5",
                    "aytBYL": "9,3",
                    "siralama": "194.700"
                },
                {
                    "title": "HİTİT ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "339,46",
                    "kont": "62",
                    "tytTR": "27,0",
                    "tytSOS": "8,8",
                    "tytMAT": "16,0",
                    "tytFEN": "13,3",
                    "aytMAT": "12,8",
                    "aytFZK": "4,5",
                    "aytKMY": "4,3",
                    "aytBYL": "5,0",
                    "siralama": "195.631"
                },
                {
                    "title": "İSTANBUL TOPKAPI ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "338,89",
                    "kont": "34",
                    "tytTR": "20,0",
                    "tytSOS": "8,3",
                    "tytMAT": "23,5",
                    "tytFEN": "10,0",
                    "aytMAT": "18,8",
                    "aytFZK": "3,3",
                    "aytKMY": "2,0",
                    "aytBYL": "5,5",
                    "siralama": "196.755"
                },
                {
                    "title": "YOZGAT BOZOK ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "338,28",
                    "kont": "77",
                    "tytTR": "28,5",
                    "tytSOS": "11,0",
                    "tytMAT": "20,8",
                    "tytFEN": "6,5",
                    "aytMAT": "12,0",
                    "aytFZK": "4,8",
                    "aytKMY": "2,5",
                    "aytBYL": "6,3",
                    "siralama": "197.957"
                },
                {
                    "title": "İSTANBUL AREL ÜNİVERSİTESİ  -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "336,89",
                    "kont": "41",
                    "tytTR": "27,5",
                    "tytSOS": "6,0",
                    "tytMAT": "16,8",
                    "tytFEN": "13,8",
                    "aytMAT": "9,5",
                    "aytFZK": "8,0",
                    "aytKMY": "2,8",
                    "aytBYL": "6,0",
                    "siralama": "200.880"
                },
                {
                    "title": "DOĞUŞ ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "335,59",
                    "kont": "85",
                    "tytTR": "26,0",
                    "tytSOS": "7,3",
                    "tytMAT": "14,5",
                    "tytFEN": "7,8",
                    "aytMAT": "17,5",
                    "aytFZK": "5,5",
                    "aytKMY": "5,3",
                    "aytBYL": "4,3",
                    "siralama": "203.514"
                },
                {
                    "title": "BİRUNİ ÜNİVERSİTESİ -(%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "331,81",
                    "kont": "51",
                    "tytTR": "28,8",
                    "tytSOS": "12,5",
                    "tytMAT": "21,8",
                    "tytFEN": "9,5",
                    "aytMAT": "17,3",
                    "aytFZK": "1,0",
                    "aytKMY": "2,0",
                    "aytBYL": "4,8",
                    "siralama": "211.478"
                },
                {
                    "title": "TÜRK HAVA KURUMU ÜNİVERSİTESİ -(İngilizce) (Ücretli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "331,56",
                    "kont": "14",
                    "tytTR": "21,5",
                    "tytSOS": "8,0",
                    "tytMAT": "24,0",
                    "tytFEN": "4,3",
                    "aytMAT": "15,8",
                    "aytFZK": "5,5",
                    "aytKMY": "4,0",
                    "aytBYL": "4,0",
                    "siralama": "212.008"
                },
                {
                    "title": "OSMANİYE KORKUT ATA ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "331,2",
                    "kont": "67",
                    "tytTR": "32,5",
                    "tytSOS": "8,3",
                    "tytMAT": "23,8",
                    "tytFEN": "14,0",
                    "aytMAT": "11,8",
                    "aytFZK": "1,8",
                    "aytKMY": "4,3",
                    "aytBYL": "2,8",
                    "siralama": "212.808"
                },
                {
                    "title": "İSTİNYE ÜNİVERSİTESİ -(%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "331,08",
                    "kont": "34",
                    "tytTR": "24,5",
                    "tytSOS": "7,8",
                    "tytMAT": "20,5",
                    "tytFEN": "7,8",
                    "aytMAT": "15,5",
                    "aytFZK": "4,5",
                    "aytKMY": "7,3",
                    "aytBYL": "0,5",
                    "siralama": "213.065"
                },
                {
                    "title": "ERZİNCAN BİNALİ YILDIRIM ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "330,89",
                    "kont": "72",
                    "tytTR": "33,8",
                    "tytSOS": "10,5",
                    "tytMAT": "20,8",
                    "tytFEN": "10,8",
                    "aytMAT": "9,3",
                    "aytFZK": "4,3",
                    "aytKMY": "2,0",
                    "aytBYL": "3,3",
                    "siralama": "213.476"
                },
                {
                    "title": "GİRNE AMERİKAN ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "KKTC",
                    "tp": "329,58",
                    "kont": "10",
                    "tytTR": "24,3",
                    "tytSOS": "7,0",
                    "tytMAT": "16,0",
                    "tytFEN": "8,5",
                    "aytMAT": "26,5",
                    "aytFZK": "3,8",
                    "aytKMY": "1,0",
                    "aytBYL": "-0,5",
                    "siralama": "216.285"
                },
                {
                    "title": "MALTEPE ÜNİVERSİTESİ -(İngilizce) (Ücretli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "329,04",
                    "kont": "29",
                    "tytTR": "28,5",
                    "tytSOS": "12,8",
                    "tytMAT": "4,8",
                    "tytFEN": "10,5",
                    "aytMAT": "9,5",
                    "aytFZK": "7,8",
                    "aytKMY": "3,0",
                    "aytBYL": "4,8",
                    "siralama": "217.523"
                },
                {
                    "title": "KTO KARATAY ÜNİVERSİTESİ -(Ücretli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "327,34",
                    "kont": "4",
                    "tytTR": "24,3",
                    "tytSOS": "8,3",
                    "tytMAT": "23,3",
                    "tytFEN": "8,0",
                    "aytMAT": "14,3",
                    "aytFZK": "3,5",
                    "aytKMY": "3,0",
                    "aytBYL": "3,0",
                    "siralama": "221.337"
                },
                {
                    "title": "LEFKE AVRUPA ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "KKTC",
                    "tp": "327,18",
                    "kont": "15",
                    "tytTR": "19,0",
                    "tytSOS": "5,0",
                    "tytMAT": "21,0",
                    "tytFEN": "9,5",
                    "aytMAT": "21,5",
                    "aytFZK": "2,5",
                    "aytKMY": "3,3",
                    "aytBYL": "2,8",
                    "siralama": "221.699"
                },
                {
                    "title": "İSTANBUL GELİŞİM ÜNİVERSİTESİ -(%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "327,14",
                    "kont": "60",
                    "tytTR": "22,3",
                    "tytSOS": "8,0",
                    "tytMAT": "14,5",
                    "tytFEN": "15,0",
                    "aytMAT": "12,8",
                    "aytFZK": "-0,5",
                    "aytKMY": "7,3",
                    "aytBYL": "7,3",
                    "siralama": "221.788"
                },
                {
                    "title": "YAKIN DOĞU ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "KKTC",
                    "tp": "325,73",
                    "kont": "20",
                    "tytTR": "26,3",
                    "tytSOS": "8,8",
                    "tytMAT": "18,5",
                    "tytFEN": "10,0",
                    "aytMAT": "5,3",
                    "aytFZK": "5,3",
                    "aytKMY": "5,0",
                    "aytBYL": "7,0",
                    "siralama": "224.906"
                },
                {
                    "title": "İSTANBUL TOPKAPI ÜNİVERSİTESİ -(%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "325,51",
                    "kont": "34",
                    "tytTR": "27,8",
                    "tytSOS": "10,8",
                    "tytMAT": "16,8",
                    "tytFEN": "5,5",
                    "aytMAT": "18,8",
                    "aytFZK": "2,3",
                    "aytKMY": "4,3",
                    "aytBYL": "3,3",
                    "siralama": "225.388"
                },
                {
                    "title": "HARRAN ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "325,08",
                    "kont": "82",
                    "tytTR": "33,3",
                    "tytSOS": "12,8",
                    "tytMAT": "13,5",
                    "tytFEN": "6,8",
                    "aytMAT": "13,3",
                    "aytFZK": "9,0",
                    "aytKMY": "-0,5",
                    "aytBYL": "3,5",
                    "siralama": "226.384"
                },
                {
                    "title": "ULUSLARARASI KIBRIS ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "KKTC",
                    "tp": "324,48",
                    "kont": "10",
                    "tytTR": "29,3",
                    "tytSOS": "12,0",
                    "tytMAT": "31,0",
                    "tytFEN": "11,5",
                    "aytMAT": "9,8",
                    "aytFZK": "2,3",
                    "aytKMY": "0,5",
                    "aytBYL": "0,8",
                    "siralama": "227.854"
                },
                {
                    "title": "ARTVİN ÇORUH ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "323,76",
                    "kont": "26",
                    "tytTR": "23,0",
                    "tytSOS": "9,0",
                    "tytMAT": "17,5",
                    "tytFEN": "11,5",
                    "aytMAT": "16,8",
                    "aytFZK": "1,8",
                    "aytKMY": "4,5",
                    "aytBYL": "3,0",
                    "siralama": "229.529"
                },
                {
                    "title": "ADIYAMAN ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "322,81",
                    "kont": "41",
                    "tytTR": "10,8",
                    "tytSOS": "15,8",
                    "tytMAT": "18,8",
                    "tytFEN": "11,5",
                    "aytMAT": "10,8",
                    "aytFZK": "3,3",
                    "aytKMY": "8,5",
                    "aytBYL": "3,3",
                    "siralama": "231.784"
                },
                {
                    "title": "FENERBAHÇE ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "322,12",
                    "kont": "42",
                    "tytTR": "22,8",
                    "tytSOS": "7,0",
                    "tytMAT": "9,5",
                    "tytFEN": "10,0",
                    "aytMAT": "19,0",
                    "aytFZK": "0,8",
                    "aytKMY": "6,3",
                    "aytBYL": "5,3",
                    "siralama": "233.410"
                },
                {
                    "title": "ALANYA HAMDULLAH EMİN PAŞA ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "321,82",
                    "kont": "15",
                    "tytTR": "22,5",
                    "tytSOS": "10,3",
                    "tytMAT": "19,0",
                    "tytFEN": "7,5",
                    "aytMAT": "17,0",
                    "aytFZK": "1,8",
                    "aytKMY": "5,0",
                    "aytBYL": "1,3",
                    "siralama": "234.149"
                },
                {
                    "title": "İSTANBUL ATLAS ÜNİVERSİTESİ -(%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "321,34",
                    "kont": "42",
                    "tytTR": "26,3",
                    "tytSOS": "10,5",
                    "tytMAT": "18,0",
                    "tytFEN": "9,5",
                    "aytMAT": "10,5",
                    "aytFZK": "1,5",
                    "aytKMY": "3,5",
                    "aytBYL": "6,8",
                    "siralama": "235.292"
                },
                {
                    "title": "GİRNE ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "KKTC",
                    "tp": "319,81",
                    "kont": "10",
                    "tytTR": "25,8",
                    "tytSOS": "7,8",
                    "tytMAT": "14,8",
                    "tytFEN": "11,5",
                    "aytMAT": "8,3",
                    "aytFZK": "7,0",
                    "aytKMY": "4,0",
                    "aytBYL": "3,5",
                    "siralama": "239.004"
                },
                {
                    "title": "İSTANBUL GEDİK ÜNİVERSİTESİ -(%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "319,62",
                    "kont": "39",
                    "tytTR": "17,0",
                    "tytSOS": "7,3",
                    "tytMAT": "8,5",
                    "tytFEN": "10,0",
                    "aytMAT": "20,3",
                    "aytFZK": "0,8",
                    "aytKMY": "8,3",
                    "aytBYL": "3,3",
                    "siralama": "239.491"
                },
                {
                    "title": "İSTANBUL RUMELİ ÜNİVERSİTESİ -(%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "319,41",
                    "kont": "15",
                    "tytTR": "28,3",
                    "tytSOS": "5,0",
                    "tytMAT": "18,8",
                    "tytFEN": "5,8",
                    "aytMAT": "18,0",
                    "aytFZK": "1,5",
                    "aytKMY": "2,0",
                    "aytBYL": "2,0",
                    "siralama": "240.045"
                },
                {
                    "title": "HASAN KALYONCU ÜNİVERSİTESİ -(İngilizce) (Ücretli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "318,31",
                    "kont": "10",
                    "tytTR": "21,0",
                    "tytSOS": "9,8",
                    "tytMAT": "19,0",
                    "tytFEN": "7,0",
                    "aytMAT": "15,3",
                    "aytFZK": "4,3",
                    "aytKMY": "3,0",
                    "aytBYL": "0,8",
                    "siralama": "242.737"
                },
                {
                    "title": "BİNGÖL ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "318,04",
                    "kont": "31",
                    "tytTR": "27,3",
                    "tytSOS": "7,0",
                    "tytMAT": "12,0",
                    "tytFEN": "7,8",
                    "aytMAT": "16,8",
                    "aytFZK": "0,5",
                    "aytKMY": "7,8",
                    "aytBYL": "2,5",
                    "siralama": "243.389"
                },
                {
                    "title": "MUNZUR ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "317,11",
                    "kont": "41",
                    "tytTR": "12,8",
                    "tytSOS": "6,8",
                    "tytMAT": "14,0",
                    "tytFEN": "2,5",
                    "aytMAT": "21,5",
                    "aytFZK": "-0,8",
                    "aytKMY": "8,3",
                    "aytBYL": "4,3",
                    "siralama": "245.733"
                },
                {
                    "title": "İSTANBUL AREL ÜNİVERSİTESİ  -(%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "316,88",
                    "kont": "37",
                    "tytTR": "21,0",
                    "tytSOS": "8,8",
                    "tytMAT": "14,5",
                    "tytFEN": "7,0",
                    "aytMAT": "15,0",
                    "aytFZK": "4,0",
                    "aytKMY": "3,3",
                    "aytBYL": "4,3",
                    "siralama": "246.303"
                },
                {
                    "title": "ÜSKÜDAR ÜNİVERSİTESİ -(İngilizce) (Ücretli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "316,47",
                    "kont": "14",
                    "tytTR": "23,8",
                    "tytSOS": "9,3",
                    "tytMAT": "25,5",
                    "tytFEN": "8,5",
                    "aytMAT": "16,8",
                    "aytFZK": "2,8",
                    "aytKMY": "-0,3",
                    "aytBYL": "1,3",
                    "siralama": "247.357"
                },
                {
                    "title": "BEYKENT ÜNİVERSİTESİ -(%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "315,67",
                    "kont": "68",
                    "tytTR": "17,0",
                    "tytSOS": "11,5",
                    "tytMAT": "13,3",
                    "tytFEN": "8,8",
                    "aytMAT": "9,8",
                    "aytFZK": "5,5",
                    "aytKMY": "5,3",
                    "aytBYL": "3,5",
                    "siralama": "249.334"
                },
                {
                    "title": "DOĞU AKDENİZ ÜNİVERSİTESİ -(Ücretli) (4 Yıllık)",
                    "type": "KKTC",
                    "tp": "315,51",
                    "kont": "15",
                    "tytTR": "25,5",
                    "tytSOS": "11,8",
                    "tytMAT": "14,3",
                    "tytFEN": "10,5",
                    "aytMAT": "17,5",
                    "aytFZK": "2,0",
                    "aytKMY": "1,0",
                    "aytBYL": "1,0",
                    "siralama": "249.723"
                },
                {
                    "title": "KIBRIS BATI ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "KKTC",
                    "tp": "315,5",
                    "kont": "2",
                    "tytTR": "29,5",
                    "tytSOS": "15,5",
                    "tytMAT": "10,0",
                    "tytFEN": "5,8",
                    "aytMAT": "6,8",
                    "aytFZK": "1,8",
                    "aytKMY": "2,5",
                    "aytBYL": "7,8",
                    "siralama": "249.767"
                },
                {
                    "title": "BATMAN ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "313,2",
                    "kont": "52",
                    "tytTR": "18,3",
                    "tytSOS": "-3,5",
                    "tytMAT": "24,8",
                    "tytFEN": "8,3",
                    "aytMAT": "20,3",
                    "aytFZK": "2,0",
                    "aytKMY": "2,5",
                    "aytBYL": "6,0",
                    "siralama": "255.675"
                },
                {
                    "title": "BOLU ABANT İZZET BAYSAL ÜNİVERSİTESİ -(KKTC Uyruklu) (4 Yıllık)",
                    "type": "Devlet",
                    "tp": "313,07",
                    "kont": "1",
                    "tytTR": "20,5",
                    "tytSOS": "12,5",
                    "tytMAT": "12,3",
                    "tytFEN": "7,3",
                    "aytMAT": "10,8",
                    "aytFZK": "5,0",
                    "aytKMY": "2,0",
                    "aytBYL": "3,8",
                    "siralama": "256.022"
                },
                {
                    "title": "LEFKE AVRUPA ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "KKTC",
                    "tp": "312,97",
                    "kont": "4",
                    "tytTR": "24,0",
                    "tytSOS": "9,8",
                    "tytMAT": "22,0",
                    "tytFEN": "6,8",
                    "aytMAT": "10,5",
                    "aytFZK": "1,8",
                    "aytKMY": "2,0",
                    "aytBYL": "3,5",
                    "siralama": "256.272"
                },
                {
                    "title": "DOĞU AKDENİZ ÜNİVERSİTESİ -(%50 İndirimli) (4 Yıllık)",
                    "type": "KKTC",
                    "tp": "309,97",
                    "kont": "5",
                    "tytTR": "29,8",
                    "tytSOS": "13,3",
                    "tytMAT": "15,8",
                    "tytFEN": "5,8",
                    "aytMAT": "11,5",
                    "aytFZK": "3,5",
                    "aytKMY": "0,0",
                    "aytBYL": "2,3",
                    "siralama": "264.446"
                },
                {
                    "title": "BİTLİS EREN ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "309,65",
                    "kont": "31",
                    "tytTR": "26,8",
                    "tytSOS": "10,0",
                    "tytMAT": "10,8",
                    "tytFEN": "10,5",
                    "aytMAT": "8,0",
                    "aytFZK": "3,0",
                    "aytKMY": "3,3",
                    "aytBYL": "3,8",
                    "siralama": "265.372"
                },
                {
                    "title": "SİİRT ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "308,22",
                    "kont": "31",
                    "tytTR": "18,0",
                    "tytSOS": "8,5",
                    "tytMAT": "11,0",
                    "tytFEN": "4,8",
                    "aytMAT": "16,5",
                    "aytFZK": "3,3",
                    "aytKMY": "5,0",
                    "aytBYL": "3,3",
                    "siralama": "269.365"
                },
                {
                    "title": "İSTANBUL ESENYURT ÜNİVERSİTESİ -(%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "306,74",
                    "kont": "25",
                    "tytTR": "18,5",
                    "tytSOS": "0,5",
                    "tytMAT": "8,5",
                    "tytFEN": "11,3",
                    "aytMAT": "15,5",
                    "aytFZK": "7,5",
                    "aytKMY": "3,5",
                    "aytBYL": "3,3",
                    "siralama": "273.557"
                },
                {
                    "title": "ULUSLARARASI KIBRIS ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "KKTC",
                    "tp": "305,8",
                    "kont": "6",
                    "tytTR": "12,3",
                    "tytSOS": "9,8",
                    "tytMAT": "10,8",
                    "tytFEN": "7,0",
                    "aytMAT": "18,8",
                    "aytFZK": "0,3",
                    "aytKMY": "9,0",
                    "aytBYL": "-0,3",
                    "siralama": "276.236"
                },
                {
                    "title": "ULUSLARARASI FİNAL ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "KKTC",
                    "tp": "304,47",
                    "kont": "2",
                    "tytTR": "16,3",
                    "tytSOS": "7,8",
                    "tytMAT": "19,5",
                    "tytFEN": "8,3",
                    "aytMAT": "14,0",
                    "aytFZK": "0,3",
                    "aytKMY": "3,0",
                    "aytBYL": "4,3",
                    "siralama": "280.170"
                },
                {
                    "title": "KIBRIS İLİM ÜNİVERSİTESİ -(İngilizce) (Burslu) (4 Yıllık)",
                    "type": "KKTC",
                    "tp": "303,51",
                    "kont": "1",
                    "tytTR": "26,3",
                    "tytSOS": "10,0",
                    "tytMAT": "15,8",
                    "tytFEN": "8,0",
                    "aytMAT": "5,8",
                    "aytFZK": "2,8",
                    "aytKMY": "4,3",
                    "aytBYL": "5,5",
                    "siralama": "282.892"
                },
                {
                    "title": "KIRGIZİSTAN-TÜRKİYE MANAS ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Yurtdışı",
                    "tp": "302,54",
                    "kont": "3",
                    "tytTR": "23,3",
                    "tytSOS": "15,3",
                    "tytMAT": "14,5",
                    "tytFEN": "10,0",
                    "aytMAT": "15,8",
                    "aytFZK": "-0,3",
                    "aytKMY": "0,0",
                    "aytBYL": "2,0",
                    "siralama": "285.761"
                },
                {
                    "title": "YAKIN DOĞU ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "KKTC",
                    "tp": "301,56",
                    "kont": "9",
                    "tytTR": "27,8",
                    "tytSOS": "9,3",
                    "tytMAT": "9,0",
                    "tytFEN": "10,8",
                    "aytMAT": "7,3",
                    "aytFZK": "3,8",
                    "aytKMY": "1,8",
                    "aytBYL": "3,5",
                    "siralama": "288.763"
                },
                {
                    "title": "AVRASYA ÜNİVERSİTESİ -(%50 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "301,22",
                    "kont": "12",
                    "tytTR": "24,0",
                    "tytSOS": "7,5",
                    "tytMAT": "13,8",
                    "tytFEN": "6,5",
                    "aytMAT": "18,8",
                    "aytFZK": "2,5",
                    "aytKMY": "1,0",
                    "aytBYL": "3,0",
                    "siralama": "289.867"
                },
                {
                    "title": "GİRNE AMERİKAN ÜNİVERSİTESİ -(İngilizce) (%50 İndirimli) (4 Yıllık)",
                    "type": "KKTC",
                    "tp": "300,89",
                    "kont": "5",
                    "tytTR": "26,8",
                    "tytSOS": "11,8",
                    "tytMAT": "14,3",
                    "tytFEN": "9,0",
                    "aytMAT": "8,3",
                    "aytFZK": "3,5",
                    "aytKMY": "0,5",
                    "aytBYL": "4,5",
                    "siralama": "290.826"
                },
                {
                    "title": "KOCAELİ SAĞLIK VE TEKNOLOJİ ÜNİVERSİTESİ -(%25 İndirimli) (4 Yıllık)",
                    "type": "Vakıf",
                    "tp": "300,17",
                    "kont": "25",
                    "tytTR": "25,5",
                    "tytSOS": "0,0",
                    "tytMAT": "13,8",
                    "tytFEN": "6,3",
                    "aytMAT": "15,0",
                    "aytFZK": "-1,3",
                    "aytKMY": "5,8",
                    "aytBYL": "3,8",
                    "siralama": "293.017"
                },
                {
                    "title": "ŞIRNAK ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "300,15",
                    "kont": "12",
                    "tytTR": "17,3",
                    "tytSOS": "8,0",
                    "tytMAT": "11,3",
                    "tytFEN": "4,5",
                    "aytMAT": "16,8",
                    "aytFZK": "-0,5",
                    "aytKMY": "5,8",
                    "aytBYL": "3,0",
                    "siralama": "293.074"
                },
                {
                    "title": "GİRNE AMERİKAN ÜNİVERSİTESİ -(İngilizce) (Ücretli) (4 Yıllık)",
                    "type": "KKTC",
                    "tp": "299,82",
                    "kont": "2",
                    "tytTR": "27,3",
                    "tytSOS": "11,0",
                    "tytMAT": "6,8",
                    "tytFEN": "11,0",
                    "aytMAT": "5,3",
                    "aytFZK": "-1,0",
                    "aytKMY": "3,5",
                    "aytBYL": "8,5",
                    "siralama": "294.072"
                },
                {
                    "title": "IĞDIR ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "299,63",
                    "kont": "31",
                    "tytTR": "15,3",
                    "tytSOS": "10,3",
                    "tytMAT": "13,5",
                    "tytFEN": "12,5",
                    "aytMAT": "5,8",
                    "aytFZK": "2,3",
                    "aytKMY": "5,3",
                    "aytBYL": "5,5",
                    "siralama": "294.658"
                },
                {
                    "title": "HOCA AHMET YESEVİ ULUSLARARASI TÜRK-KAZAK ÜNİVERSİTESİ -(Uzaktan Öğretim) (Ücretli) (4 Yıllık)",
                    "type": "Yurtdışı",
                    "tp": "299,48",
                    "kont": "130",
                    "tytTR": "24,5",
                    "tytSOS": "15,5",
                    "tytMAT": "10,8",
                    "tytFEN": "6,5",
                    "aytMAT": "14,3",
                    "aytFZK": "0,8",
                    "aytKMY": "2,5",
                    "aytBYL": "4,5",
                    "siralama": "295.142"
                },
                {
                    "title": "ARDAHAN ÜNİVERSİTESİ -(4 Yıllık)",
                    "type": "Devlet",
                    "tp": "299,22",
                    "kont": "31",
                    "tytTR": "25,8",
                    "tytSOS": "9,3",
                    "tytMAT": "21,0",
                    "tytFEN": "13,3",
                    "aytMAT": "2,3",
                    "aytFZK": "4,5",
                    "aytKMY": "0,8",
                    "aytBYL": "4,3",
                    "siralama": "295.941"
                }
            ],
        }
    ];

    mySiralama = 4727;

    tlINDEXS = [];

    addToTL = (e) => {
        let uniINDEX = e.currentTarget.previousElementSibling.textContent - 1;
        let uniROW = e.currentTarget.parentElement.parentElement;

        uniROW.setAttribute('data-tl', true);

        this.tlINDEXS.push(uniINDEX);

        // localStorage.setItem('tlINDEXS', JSON.stringify(this.tlINDEXS));

        set(ref(db, "App/tercihListesiIndexs"), this.tlINDEXS).then(() => {

        }).catch((err) => {
            console.log(err);
        });

        e.currentTarget.className = "remove-from-list-btn";
        e.currentTarget.textContent = "𝕏";

        removeBTNS = document.querySelectorAll('.remove-from-list-btn');

        removeBTNS.forEach((btn) => {
            btn.addEventListener('click', this.removeFromTL);
        });
    }

    removeFromTL = (e) => {
        let uniINDEX = e.currentTarget.previousElementSibling.textContent - 1;


        this.tlINDEXS.map((x, index) => {
            if(x == uniINDEX) {
                this.tlINDEXS.splice(index, 1);
            }
        })

        // localStorage.setItem('tlINDEXS', JSON.stringify(this.tlINDEXS));

        set(ref(db, "App/tercihListesiIndexs"), this.tlINDEXS).then(() => {

        }).catch((err) => {
            console.log(err);
        });

        e.currentTarget.className = "add-to-list-btn";
        e.currentTarget.innerHTML = '<i class="fa-solid fa-plus"></i>';

        let addTercihListesiBTNs = document.querySelectorAll('.add-to-list-btn');

        addTercihListesiBTNs.forEach((btn) => {
            btn.addEventListener('click', this.addToTL);
        });
    }

}

const tp = new TabanPuanlar();

get(ref(db, "App/tercihListesiIndexs")).then((snapshot) => {
    tp.tlINDEXS = snapshot.val();

    tp.tpList.map((item) => {
    let titles = [];
    item.uniInfos.map((info, index) => {
        titles.push(info.title);

        if(info.siralama && info.siralama_2021 && info.siralama_2020 && info.siralama_2019) {
            let siralama = JSON.parse(JSON.stringify(info.siralama).replace('.', ''));
            let siralama2021 = JSON.parse(JSON.stringify(info.siralama_2021).replace('.', ''));
            let siralama2020 = JSON.parse(JSON.stringify(info.siralama_2020).replace('.', ''));
            let siralama2019 = JSON.parse(JSON.stringify(info.siralama_2019).replace('.', ''));

            let percentages = [];
            let avrPercentage = null;
            let expectingSiralama = null;

            percentages.push((siralama - siralama2021) * 100 / siralama2021);
            percentages.push((siralama2021 - siralama2020) * 100 / siralama2020);
            percentages.push((siralama2020 - siralama2019) * 100 / siralama2019);

            percentages.map((p, index) => {
                if(index == 0) {
                    avrPercentage += p * 37;
                } else if (index == 1) {
                    avrPercentage += p * 33;
                } else if (index == 2) {
                    avrPercentage += p * 30;
                }
            });

            avrPercentage = avrPercentage / 100;

            siralama = parseInt(siralama);

            expectingSiralama = siralama + (siralama * avrPercentage) / 100;
            // expectingSiralama = `${(siralama + (siralama * percentages[0]) / 100).toFixed(2)} (${percentages[0].toFixed(2)})`;

            info.expectingSiralama = expectingSiralama.toFixed(0);
        }

        titles.map((title, index) => {

        let letters = [];

        for(let i = 0; i < title.length; i++) {
            letters.push(title[i]);
        }

        letters.map((letter, index) => {
            if(letter == "İ") {
                letters[index] = "I";
            }

            if(letter == "Ğ") {
                letters[index] = "G";
            }

            if(letter == "Ş") {
                letters[index] = "S";
            }

            if(letter == "ş") {
                letters[index] == "s";
            }

            if(letter == "-") {
                letters.splice(index + 1, 0, " ");
            }
        });

        let newTitle = letters.join('');

        info.title = newTitle;

        });
    });
});

tp.tpList.forEach((tpItem) => {
    tpItem.uniInfos.forEach((info, index) => {
        // if(info.title.indexOf('%50') == -1 && info.title.toLowerCase().indexOf('ücretli') == -1) {

            info.index = index + 1;

            if(info.type.toLocaleLowerCase() == 'vakıf') {
                info.type = "Vakif";
            }

            tp.tlINDEXS.map((x) => {
                if(x == index) {
                    info.inTL = true;
                }
            });

            let div = document.createElement('div');
            div.className = "tp-item";

            if(index % 2) {
                div.classList.add('s2');
            } else {
                div.classList.add('s1');
            }

            div.setAttribute('data-tl', info.inTL);

            div.innerHTML = `
            <div class="top-side">
                <div class="tp-item-index">${info.index}</div>
                ${ !info.inTL ? '<div class="add-to-list-btn"><i class="fa-solid fa-plus"></i></div>' : "<div class='remove-from-list-btn'>𝕏</div>"}
                <div class="tp-item-title">${info.title}</div>
                <div class="tp-item-type">${info.type}</div>
                <div class="tp-item-kont">${info.kont}</div>
                <div class="tp-item-tp">${info.tp}</div>
                <div class="tp-item-siralama">
                    <div class="siralama siralama-expecting">${info.expectingSiralama || '—'}</div> 
                    <div class="siralama">${info.siralama}</div> 
                    <div class="siralama siralama-old">${info.siralama_2021}</div> 
                    <div class="siralama siralama-old">${info.siralama_2020}</div> 
                    <div class="siralama siralama-old">${info.siralama_2019}</div> 
                </div>

                <div class="tp-item-show-more-btn"><i class="fa-solid fa-chevron-down"></i></div>
            </div>

            <div class="bottom-side">
                <div class="bottom-top">
                    <div class="bt-item">TYT Turkce</div>
                    <div class="bt-item">TYT Sosyal</div>
                    <div class="bt-item">TYT Matematik</div>
                    <div class="bt-item">TYT Fen</div>

                    <div class="bt-item">AYT Matematik</div>
                    <div class="bt-item">AYT Fizik</div>
                    <div class="bt-item">AYT Kimya</div>
                    <div class="bt-item">AYT Biyoloji</div>
                </div>

                <div class="bottom-bottom">
                    <div class="bb-item">${info.tytTR}</div>
                    <div class="bb-item">${info.tytSOS}</div>
                    <div class="bb-item">${info.tytMAT}</div>
                    <div class="bb-item">${info.tytFEN}</div>

                    <div class="bb-item">${info.aytMAT}</div>
                    <div class="bb-item">${info.aytFZK}</div>
                    <div class="bb-item">${info.aytKMY}</div>
                    <div class="bb-item">${info.aytBYL}</div>
                </div>
            </div>
            `;

            info.siralama = JSON.parse(JSON.stringify(info.siralama).replace('.', ''));

            info.expectingSiralama = parseInt(info.expectingSiralama);

            if(info.siralama > tp.mySiralama && info.expectingSiralama < tp.mySiralama) {
                div.classList.add('not-expecting');

                if(index % 2) {
                    div.classList.add('other-expecting');
                }
            }

            if(info.siralama < tp.mySiralama && info.expectingSiralama < tp.mySiralama) {
                div.classList.add('nope');

                if(index % 2) {
                    div.classList.add('nope-v2');
                }
            }

            if(info.siralama < tp.mySiralama) {
                div.classList.add('nope');

                if(index % 2) {
                    div.classList.add('other-nope');
                }
            }

            tpListAREA.appendChild(div);

            addTercihListesiBTNs = document.querySelectorAll('.add-to-list-btn');
            removeBTNS = document.querySelectorAll('.remove-from-list-btn');

            removeBTNS.forEach((btn) => {
                btn.addEventListener('click', tp.removeFromTL);
            });

            addTercihListesiBTNs.forEach((btn) => {
                btn.addEventListener('click', tp.addToTL);
            });
        // }
    });
});
}).catch((err) => {
    console.log(err);
})


let texts = [
    "156\n221\n397\n281",
    "315\n327\n341\n429",
    "350\n432\n602\n722",
    "878\n1.048\n1.170\n1.488",
    "1.179\n1.821\n2.450\n2.580",
    "1.326\n1.871\n2.660\n2.983",
    "1.578\n2.059\n2.860\n3.540",
    "1.879\n2.273\n2.960\n3.756",
    "2.851\n4.744\n6.990\n8.345",
    "3.131\n4.351\n5.590\n6.507",
    "3.576\n5.248\n7.200\n11.743",
    "3.591\n4.320\n5.420\n7.081",
    "5.056\n8.476\n11.200\n13.683",
    "6.131\n11.029\n16.700\n24.038",
    "6.177\n8.983\n13.400\n21.690",
    "6.275\n9.445\n12.000\n20.068",
    "7.006\n11.345\n15.700\n19.082",
    "8.205\n12.287\n15.000\n16.330",
    "8.619\n13.420\n19.300\n23.159",
    "9.617\n15.294\n18.300\n22.043",
    "9.748\n16.518\n22.900\n32.293",
    "9.926\n15.935\n20.900\n27.489",
    "10.276\n16.111\n21.100\n24.246",
    "11.357\n17.157\n18.400\n18.456",
    "11.746\n19.854\n25.000\n30.214",
    "12.716\n41.430\n—\n—",
    "12.833\n25.159\n34.100\n36.499",
    "13.889\n—\n—\n—",
    "15.816\n26.098\n30.000\n33.624",
    "17.820\n—\n—\n—",
    "18.195\n30.364\n33.800\n34.812",
    "18.256\n28.816\n38.600\n45.010",
    "20.149\n38.099\n41.600\n46.228",
    "20.267\n28.300\n33.400\n35.985",
    "21.514\n33.292\n37.800\n41.867",
    "22.186\n—\n—\n—",
    "22.484\n35.809\n—\n—",
    "22.863\n34.395\n40.900\n43.449",
    "22.882\n27.424\n28.200\n33.229",
    "23.186\n35.531\n38.600\n41.364",
    "23.273\n32.672\n37.000\n40.978",
    "24.857\n31.771\n32.800\n31.263",
    "25.072\n64.053\n—\n—",
    "25.166\n36.854\n38.100\n37.209",
    "25.837\n30.980\n26.700\n27.636",
    "26.213\n36.382\n40.000\n42.183",
    "26.643\n36.751\n43.400\n42.930",
    "27.405\n44.469\n51.800\n67.115",
    "27.534\n37.831\n41.500\n44.685",
    "28.567\n38.568\n43.700\n47.459",
    "30.649\n40.472\n—\n—",
    "31.540\n48.013\n53.000\n65.382",
    "31.804\n39.103\n43.100\n48.663",
    "33.002\n44.127\n—\n—",
    "33.033\n42.225\n46.700\n49.091",
    "33.665\n37.059\n36.000\n35.845",
    "34.195\n41.380\n44.000\n47.048",
    "35.121\n45.002\n50.700\n55.585",
    "36.415\n42.116\n46.500\n47.894",
    "36.929\n45.195\n—\n—",
    "38.162\n46.567\n50.600\n54.065",
    "38.443\n—\n—\n—",
    "38.519\n202.225\n—\n—",
    "39.095\n45.910\n48.400\n49.830",
    "40.125\n45.263\n44.700\n40.724",
    "41.166\n50.003\n53.500\n56.004",
    "41.281\n55.869\n—\n—",
    "41.824\n51.926\n—\n—",
    "42.048\n45.728\n44.500\n46.442",
    "42.177\n52.466\n57.300\n—",
    "42.869\n51.296\n51.900\n51.656",
    "43.123\n52.816\n57.900\n66.863",
    "43.553\n51.458\n55.900\n60.810",
    "43.599\n63.022\n73.500\n95.097",
    "43.727\n51.378\n—\n—",
    "43.992\n50.828\n53.600\n57.467",
    "44.192\n53.689\n56.600\n—",
    "44.663\n53.682\n61.400\n69.864",
    "44.818\nDolmadı\n—\n—",
    "45.508\n51.956\n54.800\n57.435",
    "45.636\n50.526\n51.000\n48.457",
    "47.063\n53.044\n54.100\n54.560",
    "47.353\n56.623\n62.300\n72.110",
    "47.457\n58.289\n60.400\n67.376",
    "48.119\n57.371\n61.500\n67.040",
    "48.937\n51.981\n53.100\n53.176",
    "49.889\n—\n—\n—",
    "49.934\n61.840\n—\n—",
    "50.208\n—\n—\n—",
    "50.249\n59.085\n59.400\n62.565",
    "50.800\n62.229\n69.100\n82.021",
    "51.020\n—\n—\n—",
    "52.287\n61.462\n63.000\n58.262",
    "52.897\n59.466\n59.200\n—",
    "53.203\n62.721\n64.900\n74.343",
    "54.091\n62.843\n—\n—",
    "55.435\n62.959\n68.100\n77.196",
    "56.373\n67.659\n71.600\n84.367",
    "56.556\n68.193\n78.700\n100.773",
    "56.674\n66.088\n72.500\n70.871",
    "57.421\n67.348\n73.100\n83.394",
    "57.761\n68.455\n76.800\n—",
    "58.228\n71.586\n79.700\n96.315",
    "58.404\n65.641\n71.600\n83.620",
    "60.493\n71.841\n79.500\n93.094",
    "61.089\n66.786\n73.900\n73.068",
    "61.212\n74.771\n84.600\n102.808",
    "61.406\n77.847\n87.800\n103.690",
    "61.434\n78.244\n98.500\n138.506",
    "61.488\n69.627\n79.100\n68.260",
    "62.547\n74.109\n80.000\n74.746",
    "62.781\n76.039\n79.900\n83.147",
    "62.878\n78.382\n88.300\n103.675",
    "64.487\n83.206\n89.700\n97.873",
    "64.926\n79.103\n84.500\n94.350",
    "65.433\n85.049\n94.700\n127.206",
    "65.731\n83.490\n95.600\n—",
    "66.455\n—\n—\n—",
    "67.153\n106.678\n111.000\n161.121",
    "68.862\n84.230\n92.600\n110.804",
    "68.870\n87.491\n105.000\n135.868",
    "69.468\n87.338\n99.700\n121.318",
    "71.807\n90.027\n101.000\n121.159",
    "72.502\n100.895\n106.000\n147.294",
    "73.131\n93.286\n93.500\n106.461",
    "73.871\n93.618\n106.000\n130.558",
    "74.148\n—\n—\n—",
    "76.467\n99.954\n119.000\n144.259",
    "78.563\n80.621\n—\n—",
    "79.216\n108.888\n—\n—",
    "79.829\n98.211\n111.000\n138.703",
    "79.900\n121.000\n—\n—",
    "79.923\n95.977\n102.000\n120.334",
    "79.940\n102.142\n125.000\n—",
    "80.766\n105.215\n—\n—",
    "81.634\n97.082\n107.000\n126.849",
    "81.768\n102.251\n—\n—",
    "82.705\n84.281\n89.100\n89.944",
    "82.867\n118.874\n132.000\n133.884",
    "84.251\n—\n—\n—",
    "84.840\n—\n—\n—",
    "85.309\n—\n—\n—",
    "85.613\n108.131\n127.000\n153.706",
    "85.958\n108.077\n128.000\n156.467",
    "86.120\n101.170\n129.000\n173.954",
    "86.315\n113.244\n127.000\n175.132",
    "88.143\n114.643\n142.000\n167.484",
    "89.568\n117.869\n139.000\n—",
    "90.263\n113.785\n135.000\n158.331",
    "90.455\n137.313\n—\n—",
    "91.510\n105.165\n125.000\n136.878",
    "91.863\n—\n—\n—",
    "92.218\n120.416\n147.000\n172.371",
    "92.803\n111.543\n127.000\n151.206",
    "95.548\n128.094\n148.000\n175.263",
    "95.554\n117.004\n—\n—",
    "96.200\n120.767\n144.000\n170.534",
    "96.474\nDolmadı\n—\n—",
    "96.986\n123.656\n—\n—",
    "97.664\n127.289\n142.000\n196.632",
    "99.932\n126.543\n148.000\n169.994",
    "100.615\n160.086\n206.000\n244.445",
    "104.617\n125.109\n135.000\n142.857",
    "105.686\n136.127\n162.000\n186.530",
    "107.116\n143.377\n185.000\n199.800",
    "108.754\n137.344\n168.000\n198.284",
    "110.091\n118.371\n122.000\n134.181",
    "110.206\n—\n—\n—",
    "110.819\n149.111\n182.000\n—",
    "111.602\n177.514\n255.000\nDolmadı",
    "113.031\n148.490\n174.000\n200.446",
    "113.069\n156.213\n—\n—",
    "113.639\n153.484\n180.000\n—",
    "114.360\n115.703\n113.000\n108.870",
    "114.542\n153.347\n182.000\n216.472",
    "114.573\n143.646\n206.000\n275.789",
    "114.796\n161.675\n—\n—",
    "115.274\n—\n—\n—",
    "116.413\n146.703\n166.000\n191.770",
    "117.986\n167.172\n185.000\n208.433",
    "118.268\n137.198\n152.000\n180.710",
    "118.719\n155.264\n179.000\n205.166",
    "118.868\n139.912\n151.000\n142.383",
    "121.938\n—\n—\n—",
    "123.895\n160.056\n189.000\n210.486",
    "125.652\n169.304\n—\n—",
    "126.121\n—\n—\n—",
    "126.739\n145.475\n157.000\n175.984",
    "128.997\n185.671\n214.000\n230.051",
    "132.084\n172.454\n193.000\n222.135",
    "133.429\n—\n—\n—",
    "133.451\n172.815\n—\n—",
    "133.969\n180.046\n213.000\n243.165",
    "136.646\n173.621\n196.000\n222.856",
    "138.053\n180.270\n—\n—",
    "139.659\n190.028\n—\n—",
    "139.801\n170.060\n199.000\n237.554",
    "140.464\n—\n—\n—",
    "141.068\n183.185\n209.000\n231.316",
    "141.160\n183.022\n207.000\n245.422",
    "143.676\n193.502\n—\n—",
    "146.041\n183.300\n208.000\n230.252",
    "147.935\n191.971\n217.000\n240.212",
    "148.124\n196.800\n230.000\n261.407"
]

texts.map((text, textIndex) => {
    let siralamalar = text.split('\n'); 

    tp.tpList[0].uniInfos.map((info, index) => {
        if(textIndex == index) {
            info.siralama_2021 = siralamalar[1];
            info.siralama_2020 = siralamalar[2];
            info.siralama_2019 = siralamalar[3];
        }
    });
});

let titles = [];



let showMoreBTNS = document.querySelectorAll('.tp-item-show-more-btn');

function ShowDetails(e) {
    let row = e.currentTarget.parentElement.parentElement;

    if(!e.currentTarget.classList.contains('active')) {
        e.currentTarget.classList.add('active');

        e.currentTarget.innerHTML = `<i class="fa-solid fa-chevron-up"></i>`;

        let bottomSide = row.querySelector('.bottom-side');

        bottomSide.style.height = "4vh";
    } else {
        e.currentTarget.classList.remove('active');

        e.currentTarget.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`;

        let bottomSide = row.querySelector('.bottom-side');

        bottomSide.style.height = "0vh";
 
    }
}

showMoreBTNS.forEach((showMoreBTN) => {
    showMoreBTN.addEventListener('click', ShowDetails);
});

// search
const searchArea = document.querySelector('.search-area');

let searchPlaceholders = ["3D Turkiye Geneli 5", "Endemik Turkiye Geneli 4", "TYT Matematik Deneme Onerisi", "AYT Biyoloji Onerileri", "Ders Calisirken Muzik Dinlenir Mi?", "Uclu Kalem Mi Kursun Kalem Mi?", "..."];

function changePlaceholder() {
    let randomNumber = Math.floor((Math.random() * searchPlaceholders.length));

    searchArea.placeholder = searchPlaceholders[randomNumber];
}

changePlaceholder();

setInterval(changePlaceholder, 60000);

// uni search
const uniSearchAREA = document.querySelector('.tabanp-search');
let rows = document.querySelectorAll('.tp-item');

function letterToENG(l) {
   if(l == 'ü') {
    return 'u';
   } else if (l == 'ğ') {
    return 'g';
   } else if (l == 'ş') {
    return 's';
   } else if (l == 'ç') {
    return 'c';
   } else if (l == 'ö') {
    return 'o';
   } else if (l == 'ı') {
    return "i";
   } else {
    return l;
   }
}

function searchUni() {
    let value = uniSearchAREA.value.toLowerCase();

    // let valueLetters = value.split('');
    // let newValue = "";

    // valueLetters.map((vLatter) => {

    // })

    // if(value.length > 2) {
        rows = document.querySelectorAll('.tp-item');
        for(let x = 0; x < rows.length; x++) {
            let uniTitle = rows[x].querySelector('.tp-item-title').textContent.toLowerCase();

            let letters = uniTitle.split('');
            let newTitle = ""; 

            letters.map((letter) => {
                let newLetter = letterToENG(letter);
                newTitle += newLetter;
            });

            if(uniTitle.indexOf(value) == -1 && newTitle.indexOf(value) == -1) {
                rows[x].style.display = 'none';
            } else {
                rows[x].style.display = 'flex';
            }
        }
    // }
}

uniSearchAREA.addEventListener('keyup', searchUni);

const loginBTN = document.querySelector('.login-btn');
const registerBTN = document.querySelector('.register-btn');
const profileBTN = document.querySelector('.profile');

let isMobile = false;

if(window.innerWidth < 1000) {
    isMobile = true;
}

if(isMobile) {
    loginBTN.style.display = "none";
    registerBTN.style.display = "none";

    setTimeout(() => {
        profileBTN.style.display = "none";
    }, 1000);


    let topbartopicItems = document.querySelectorAll('.top-bar-item');

    topbartopicItems.forEach((item, index) => {
        if(index == 1 || index == 2 || index == 4 || index == 5 || index == 8 || index == 9) {
            item.style.display = "none";
        }

    })
}

const btn = document.querySelector('.toggle-my-preferables');
const toggleBursBtn = document.querySelector('.toggle-burs');

let showingMy = false;

btn.addEventListener('click', (e) => {
    if(!e.target.classList.contains('showing')) {
        let rows = document.querySelectorAll('.tp-item');

        for(let x = 0; x < 12; x++) {
            rows[x].style.display = "none";
        }

        e.target.textContent = "Tümü"

        e.target.classList.add('showing');
        showingMy = true;
    } else {
        let rows = document.querySelectorAll('.tp-item');

        for(let x = 0; x < 12; x++) {
            rows[x].style.display = "flex";
        }

        e.target.textContent = "Benim Seçebildiklerim";

        e.target.classList.remove('showing');
        showingMy = false;
    }
})

toggleBursBtn.addEventListener("click", (e) => {
    if(e.target.classList.contains('showing-all')) {
        let rows = document.querySelectorAll('.tp-item');

        rows.forEach((row, index) => {
            let rowsTitle = row.querySelector('.tp-item-title').textContent.toLowerCase();

            if(rowsTitle.indexOf('ücretli') != -1) {
                row.style.display = "none";
            } 

            if(showingMy && (index < 12)) {
                row.style.display = 'none';
            } 
        })

        e.target.textContent = "%50 Burslulari Gizle"

        e.target.classList.add('showing-50');
        e.target.classList.remove('showing-all');
    } else if(e.target.classList.contains('showing-50')) {
        let rows = document.querySelectorAll('.tp-item');

        rows.forEach((row, index) => {
            let rowsTitle = row.querySelector('.tp-item-title').textContent.toLowerCase();

            if(rowsTitle.indexOf('ücretli') != -1 || rowsTitle.indexOf('%50') != -1) {
                row.style.display = "none";
            } 

            if(showingMy && (index < 12)) {
                row.style.display = 'none';
            } 
        })

        e.target.textContent = "Tumunu Goster"

        e.target.classList.remove('showing-50');
        e.target.classList.add('showing-burssuz');
    } else if(e.target.classList.contains('showing-burssuz')) {
        let rows = document.querySelectorAll('.tp-item');

        rows.forEach((row, index) => {
            row.style.display = "flex";

            if(showingMy && (index < 12)) {
                row.style.display = 'none';
            }
        });

        e.target.textContent = "Burssuzlari Gizle"

        e.target.classList.remove('showing-burssuz');
        e.target.classList.add('showing-all');
    }
});

const tercihListemBTN = document.querySelector('.tercih-listesi-btn');

tercihListemBTN.addEventListener('click', () => {
    if(tercihListemBTN.classList.contains('not-showing-tl')) {
        let rows = document.querySelectorAll('.tp-item');

        rows.forEach((row) => {
            console.log(row.dataset.tl);
            if(row.dataset.tl == 'true') {
                row.style.display = "flex";
                console.log(row);
            } else {
                row.style.display = "none";
            }
        });

        tercihListemBTN.textContent = "Universiteleri Goster";
        tercihListemBTN.classList.remove('not-showing-tl')
        tercihListemBTN.classList.add('showing-tl')
    } else {
        let rows = document.querySelectorAll('.tp-item');

        rows.forEach((row) => {
            row.style.display = "flex";
        });

        tercihListemBTN.textContent = "Tercih Listem";
        tercihListemBTN.classList.remove('showing-tl');
        tercihListemBTN.classList.add('not-showing-tl');
    }
});

// GET EXPECTING SIRALAMALAR INSIDE SITE (basarisiralamalari.com);
// const rows = document.querySelectorAll('tr');

// rows.forEach((row, index) => {
//     if(index > 1) {
//         let siralamalarDIV = row.querySelectorAll('td')[5];
//         let siralamalar = siralamalarDIV.textContent.split('\n');

//         let s2022 = parseInt(JSON.parse(JSON.stringify(siralamalar[0]).replace('.', '')));
//         let s2021 = parseInt(JSON.parse(JSON.stringify(siralamalar[1]).replace('.', '')));
//         let s2020 = parseInt(JSON.parse(JSON.stringify(siralamalar[2]).replace('.', '')));
//         let s2019 = parseInt(JSON.parse(JSON.stringify(siralamalar[3]).replace('.', '')));

//         let p22_21 = (s2022 - s2021) * 100 / s2021;
//         let p21_20 = (s2021 - s2020) * 100 / s2020;
//         let p20_19 = (s2020 - s2019) * 100 / s2019;

//         // let avrPercentage = 0;

//         let avrPercentage = p22_21;

//         // avrPercentage += p22_21 * 37 / 100;
//         // avrPercentage += p21_20 * 33 / 100;
//         // avrPercentage += p20_19 * 30 / 100;

//         let expectingSiralama = s2022 + (s2022 * avrPercentage / 100);
        
//         let td = document.createElement('td');
//         td.style.color = "red";

//         td.textContent = Math.floor(expectingSiralama);

//         siralamalarDIV.prepend(td);
//     }
// });