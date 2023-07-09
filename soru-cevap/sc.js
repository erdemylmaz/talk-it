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


//                      APP
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
}

topbaractiveTopic = 3;
// topbartopicItems[0].style.color = "#000";
topbartopicItems[3].style.color = "#fff";

TopbarHoverEffect({currentTarget: topbartopicItems[topbaractiveTopic]});

//              SORU_CEVAP
const ALERT_MODAL_TEXT = document.querySelector('.alert-modal-text');
const ALERT_MODAL = document.querySelector('.alert-modal');

const soruModal = document.querySelector('.create-soru-modal');
const openSoruModalBtn = document.querySelector('.sc-create-soru-btn');
const closeSoruModalBtn = document.querySelector('.close-soru-modal-btn');
const soruImageInput = document.querySelector('.soru-image-input');
const soruImagePreview = document.querySelector('.soru-modal-image');
const dragNDropText = document.querySelector('.dragndrop-text');

const scContainer = document.querySelector('.sorular');
const doneSorular = document.querySelector('.done-sorular');
const titleInput = document.querySelector('.soru-modal-title-input');
const dersSelect = document.querySelector('.soru-modal-ders-select');
const publishSoruBTN = document.querySelector('.publish-soru-btn');
const soruDescTextarea = document.querySelector('.soru-modal-desc-textarea');

const warningModal = document.querySelector('.login-warning-modal');
const toggleDoneSorularBTN = document.querySelector('.toggle-done-sorular-btn');

let sorularDIVS;

let dersFilter = document.querySelector('.ders-filter-select');

function addExtraZero(x) {
    return x < 10 ? "0" + x : x;
}

let months = ["Ocak", "Subat", "Mart", "Nisan", "Mayis", "Haziran", "Temmuz", "Agustos", "Eylul", "Ekim", "Kasim", "Aralik"];

function isImage(file) {
    return `${file.type}`.indexOf('image') != -1;
}

let images = [];

function getImage(e) {
    let file = e.target.files[0];

    if(isImage(file)) {
        const reader = new FileReader();

        reader.addEventListener('load', (event) => {
            images.push(reader.result);

            soruImageInput.style.display = "none";
            dragNDropText.style.display = "none";
            soruImagePreview.style.display = "flex";
            soruImagePreview.src = reader.result;

        });

        reader.readAsDataURL(file);

    }
}

let sorular = [];

ALERT_MODAL.style.display = "flex";
ALERT_MODAL_TEXT.textContent = "Lutfen Bekleyiniz";

let dotCount = 0;
let hasInitted = false;

// change loading dot (...) count
let interval = setInterval(() => {
    ALERT_MODAL_TEXT.textContent = "Lutfen Bekleyiniz";

    if(dotCount < 3) {
        dotCount++;
    } else {
        dotCount = 0;
        ALERT_MODAL_TEXT.textContent = "Lutfen Bekleyiniz";
    }

    for(let x = 0; x < dotCount; x++) {
        ALERT_MODAL_TEXT.textContent += ".";
    }
}, 500);

get(ref(db, "App/Sorular"))
.then((snapshot) => {

    sorular = snapshot.val();

    if(sorular.length > 1) {
        sorular.sort((a, b) => b.publishTime - a.publishTime);
    } 

    if(!sorular) {
        sorular = [];
    }

    initSorular();

    ALERT_MODAL.style.display = "none";
    hasInitted = true;
    clearInterval(interval);

    sorularDIVS = document.querySelectorAll('.sc-soru');

}).catch((err) => {
    console.log(err);
})

function initSorular() {
    sorular.map((soru, index) => {
        let a = document.createElement('a');
        a.className = "sc-soru"
        // a.href = "./soru/soru.html";
        a.setAttribute('data-soruid', soru.soruID);

        a.addEventListener('click', () => {
            ALERT_MODAL.style.display = "flex";
            ALERT_MODAL_TEXT.textContent = "Lutfen Bekleyin";

            let dotCount = 0;

            // change loading dot (...) count
            let int = setInterval(() => {
                ALERT_MODAL_TEXT.textContent = "Lutfen Bekleyin";

                if(dotCount < 3) {
                    dotCount++;
                } else {
                    dotCount = 0;
                    ALERT_MODAL_TEXT.textContent = "Lutfen Bekleyin";
                }

                for(let x = 0; x < dotCount; x++) {
                    ALERT_MODAL_TEXT.textContent += ".";
                }
            }, 500);
            
            // setTimeout(() => {
            //     // ALERT_MODAL.style.display = "none";
            //     // location.reload();
            // }, 1500);

            // localStorage.setItem('soru', JSON.stringify(soru)); // resim cok kaliteliyse olmuyor
            update(ref(db, "App/INITIALIZING_SORU"), soru).then(() => {
                // alert("success")
                location.href = "./soru/soru.html";
            }).catch((err) => {
                console.log(err);
            });
        });

        if(soru.status == "done") {
            a.classList.add("done-soru");
        }

        a.innerHTML = `
            <div class="soru-left">
                <img src="${soru.img}" class="soru-image" />
            </div>

            <div class="soru-container">
                <div class="soru-container-top">
                    <div class="soru-title">${soru.title}</div>
                </div>

                <div class="soru-container-bottom">
                    <span class="soru-tag">${soru.tag}</span>
                    <span class="soru-info">${soru.cevapCount} cevap</span>
                </div>
            </div>

            <div class="soru-right">
                <div class="soru-username ${soru.isAdmin ? "admin-username" : ""}">${soru.username} (${soru.userDegree})</div>
                <div class="soru-date">${soru.time} - ${soru.date}</div>
            </div>

            <div class="soru-status">${soru.status == "waiting" ? '<i class="fa-solid fa-hourglass-start"></i>' : '<i class="fa-solid fa-check"></i>'}</div> 
        `;

        if(soru.status == "done") {
            doneSorular.appendChild(a);
        } else {
            scContainer.appendChild(a);
        }
    });
}

let lastSoruID = parseInt(localStorage.getItem('lastSoruID'));

get(ref(db, "App/LAST_SORU_ID")).then((snapshot) => {
    lastSoruID = snapshot.val();
}).catch((err) => {
    console.log(err);
});

function publishSoru() {
    let d = new Date();

    let h = addExtraZero(d.getHours());
    let m = addExtraZero(d.getMinutes());

    let day = addExtraZero(d.getDate());
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    let time = d.getTime();

    let soru = {
        title: titleInput.value,
        username: localStorage.getItem('loggedAccUsername'),
        userDegree: localStorage.getItem('loggedAccDegree'),
        img: images[0],
        tag: dersSelect.value,
        publishTime: time,
        time: `${h}.${m}`,
        date: `${day} ${month} ${year}`,
        cevapCount: 0,
        status: 'waiting',
        soruID: lastSoruID + 1,
        isAdmin: localStorage.getItem('isAdmin'),
        answers: [],
        desc: soruDescTextarea.value,
    }

    sorular.push(soru);

    // localStorage.setItem('lastSoruID', lastSoruID + 1);

    set(ref(db, "App/LAST_SORU_ID"), lastSoruID + 1).then(() => {
        console.log("successfully changed LAST_SORU_ID");
    }).catch((err) => {
        console.log(err);
    });

    ALERT_MODAL.style.display = "flex";
    ALERT_MODAL_TEXT.textContent = "Soru Paylasiliyor";

    let dotCount = 0;

    // change loading dot (...) count
    setInterval(() => {
        ALERT_MODAL_TEXT.textContent = "Soru Paylasiliyor";

        if(dotCount < 3) {
            dotCount++;
        } else {
            dotCount = 0;
            ALERT_MODAL_TEXT.textContent = "Soru Paylasiliyor";
        }

        for(let x = 0; x < dotCount; x++) {
            ALERT_MODAL_TEXT.textContent += ".";
        }
    }, 500);

    set(ref(db, "App/Sorular"), sorular)
    .then(() => {
        // alert('basariyla paylasildi');
        ALERT_MODAL.style.display = "flex";
        ALERT_MODAL_TEXT.textContent = "Basariyla Paylasildi";

        setTimeout(() => {
            ALERT_MODAL.style.display = "none";
            location.reload();
        }, 1500);
        
    }).catch((err) => {
        console.log(err);
    })
}

soruImageInput.addEventListener('change', getImage);

publishSoruBTN.addEventListener('click', publishSoru);

openSoruModalBtn.addEventListener('click', () => {
    if(localStorage.getItem('hasLoggedIn') == "true") {
        soruModal.style.display = "flex";
    } else {
        warningModal.style.display = "flex";
        
        setTimeout(() => {
            warningModal.style.display = "none";
        }, 1500);
    }
});

document.addEventListener('click', (e) => {
    if(e.target.className == "create-soru-modal") {
        soruModal.style.display = "none";

        soruImageInput.style.display = "block";
        dragNDropText.style.display = "block";
        soruImagePreview.style.display = "none";
        soruImagePreview.src = "";
    }
});

closeSoruModalBtn.addEventListener('click', () => {
    soruModal.style.display = "none";

    soruImageInput.style.display = "block";
    dragNDropText.style.display = "block";
    soruImagePreview.style.display = "none";
    soruImagePreview.src = "";
});


dersFilter.addEventListener('change', () => {
    let filterValue = dersFilter.value;

    // filter sorular

    sorularDIVS.forEach((soru) => {
        let dersTitle = soru.querySelector('.soru-tag').textContent;

        console.log(dersTitle, filterValue, dersTitle.indexOf(filterValue));

        if(dersTitle.indexOf(filterValue) == -1) {
            soru.style.display = "none";
        } else {
            soru.style.display = "flex";
        }

        if(filterValue == "Tum Dersler") {
            soru.style.display = "flex";
        }
    });
});

toggleDoneSorularBTN.addEventListener('click', (e) => {
    if(toggleDoneSorularBTN.dataset.isactive == "false") {
        toggleDoneSorularBTN.textContent = 'Tamamlanmis Sorulari da Goster'
        toggleDoneSorularBTN.setAttribute('data-isactive', "true");
        doneSorular.style.display = "none";
    } else {
        toggleDoneSorularBTN.textContent = 'Tamamlanmis Sorulari Gizle'
        toggleDoneSorularBTN.setAttribute('data-isactive', "false");
        doneSorular.style.display = "block";
    }
});