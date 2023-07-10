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

//                  SSS
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

//              SORU APP
const ALERT_MODAL_TEXT = document.querySelector('.alert-modal-text');
const ALERT_MODAL = document.querySelector('.alert-modal');
const ALERT_MODAL_CONTAINER = document.querySelector('.alert-modal-container');

const soruImageAREA = document.querySelector('.soru-image');
const soruInfoAREA = document.querySelector('.soru-info-area');

// const soru = JSON.parse(localStorage.getItem('soru'));
let soru;

ALERT_MODAL.style.display = "flex";
ALERT_MODAL_CONTAINER.style.animationName = "x";
ALERT_MODAL_TEXT.innerHTML = `
<svg
width="24"
height="24"
viewBox="0 0 24 24"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  opacity="0.2"
  fill-rule="evenodd"
  clip-rule="evenodd"
  d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
  fill="currentColor"
/>
<path
  d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
  fill="currentColor"
/>
</svg>
`;

let dotCount = 0;

// change loading dot (...) count
// let interval = setInterval(() => {
//     ALERT_MODAL_TEXT.textContent = "Lutfen Bekleyiniz";

//     if(dotCount < 3) {
//         dotCount++;
//     } else {
//         dotCount = 0;
//         ALERT_MODAL_TEXT.textContent = "Lutfen Bekleyiniz";
//     }

//     for(let x = 0; x < dotCount; x++) {
//         ALERT_MODAL_TEXT.textContent += ".";
//     }
// }, 500);

get(ref(db, "App/INITIALIZING_SORU")).then((snapshot) => {
    soru = snapshot.val();

    if(!soru.answers) {
        soru.answers = [];
    }

    initSoru();
    initAnswers();

    // clearInterval(interval);

    document.title = `${soru.title} - talk it!`;

    ALERT_MODAL.style.display = "none";
}).catch((err) => {
    console.log(err);
});

const publishAnswerBTN = document.querySelector('.publish-answer-btn');
const answerTextarea = document.querySelector('.answer-text-input');
const answerFileInput = document.querySelector('.answer-file-input');
const answersArea = document.querySelector('.answers');

let sorular = [];


get(ref(db,  "App/Sorular")).then((snapshot) => {
    sorular = snapshot.val();

}).catch((err) => {
    console.log(err);
});

const soruStatusArea = document.querySelector('.soru-status') 

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
        });

        reader.readAsDataURL(file);
    }
}

answerFileInput.addEventListener('change', getImage);

let hasApprovedAnswer = false;

function initSoru() {
    soruImageAREA.src = soru.img;

    soruInfoAREA.innerHTML = `
        <div class="soru-title">${soru.title}</div>
        <div class="soru-tag">${soru.tag}</div>

        <div class="soru-status">
            ${soru.status == "waiting" ? '<i class="fa-solid fa-hourglass-start fa-spin"></i>' : '<i class="fas fa-check"></i>'}
            
        </div>

        <div class="soru-description">
            ${soru.desc}
        </div>

        <div class="soru-footer">
            <div class="soru-owner-username ${soru.isAdmin == "true" ? "admin-username" : ""}">${soru.username} (${soru.userDegree})</div>
            <div class="soru-date">${soru.time} - ${soru.date}</div>
        </div> 
    `;
}

// initSoru();

function initAnswers() {
    if(!soru.answers) {
        soru.answers = [];
    }

    if(soru.answers.length > 1) {
        soru.answers.sort((a, b) => b.publishTime - a.publishTime);
        soru.answers.sort((a, b) => b.likeCount - a.likeCount);
    }

    soru.answers.map((answer) => {
        let div = document.createElement('div');

        div.className = "with-image-answer";

        if(answer.hasApproved) {
            div.classList.add('approved-answer');
            hasApprovedAnswer = true;
        }

        if(!answer.hasImage) {
            div.classList.add('without-image-answer');

            div.innerHTML = `
            <div class="answer-text">${answer.text}</div>
                
                <div class="approve-answer-btn">
                    <i class="fas fa-check"></i>
                </div>

                <div class="disapprove-answer-btn">
                    <i class="fas fa-xmark"></i>
                </div>

                <div class="answer-info">
                    <div class="answer-like-btn"><i class="far fa-heart"></i></div>
                    <div class="answer-like-count">${answer.likeCount} Begeni</div>
                    <div class="answer-owner-username ${answer.isAdmin == "true" ? "admin-username" : ""}">${answer.username} (${answer.userDegree})</div>
                    <div class="answer-date">${answer.time} - ${answer.date}</div>
                </div>
            `
        } else if(answer.hasImage && answer.text != "") {
            div.innerHTML = `
            <div class="answer-left">
                <img src="${answer.image}" class="answer-img" />
            </div>

            <div class="answer-right">
                <div class="approve-answer-btn">
                    <i class="fas fa-check"></i>
                </div>

                <div class="disapprove-answer-btn">
                    <i class="fas fa-xmark"></i>
                </div>

                <div class="answer-text">${answer.text}</div>

                <div class="answer-info">
                    <div class="answer-like-btn"><i class="far fa-heart"></i></div>
                    <div class="answer-like-count">${answer.likeCount} Begeni</div>
                    <div class="answer-owner-username ${answer.isAdmin == "true" ? "admin-username" : ""}">${answer.username} (${answer.userDegree})</div>
                    <div class="answer-date">${answer.time} - ${answer.date}</div>
                </div>
            </div> 
            `
        }

        if(answer.hasImage && answer.text == "") {
            div.classList.add('only-image-answer');
            div.classList.remove('without-image-answer');

            div.innerHTML = `
                <div class="answer-left">
                    <img src="${answer.image}" class="answer-img" />
                </div>

                <div class="approve-answer-btn">
                    <i class="fas fa-check"></i>
                </div>

                <div class="disapprove-answer-btn">
                    <i class="fas fa-xmark"></i>
                </div>

                <div class="answer-info">
                    <div class="answer-like-btn"><i class="far fa-heart"></i></div>
                    <div class="answer-like-count">${answer.likeCount} Begeni</div>
                    <div class="answer-owner-username ${answer.isAdmin == "true " ? "admin-username" : ""}">${answer.username} (${answer.userDegree})</div>
                    <div class="answer-date">${answer.time} - ${answer.date}</div>
                </div> 
            `;
        }

        if(answer.hasApproved) {
            answersArea.prepend(div);
        } else {
            answersArea.appendChild(div);
        }

    });
}

// initAnswers();

answerTextarea.addEventListener('click', () => {
    answerTextarea.style.height = "96px";
})

function publishAnswer() {
    if(answerTextarea.value != "" || answerFileInput.value) {
        ALERT_MODAL.style.display = "flex";
        ALERT_MODAL_CONTAINER.style.animationName = "x";
        ALERT_MODAL_TEXT.textContent = "Cevap Paylasiliyor";

        let dotCount = 0;

        // change loading dot (...) count
        setInterval(() => {
            ALERT_MODAL_TEXT.textContent = "Cevap Paylasiliyor";

            if(dotCount < 3) {
                dotCount++;
            } else {
                dotCount = 0;
                ALERT_MODAL_TEXT.textContent = "Cevap Paylasiliyor";
            }

            for(let x = 0; x < dotCount; x++) {
                ALERT_MODAL_TEXT.textContent += ".";
            }
        }, 500);

        let d = new Date();

        let h = addExtraZero(d.getHours());
        let m = addExtraZero(d.getMinutes());

        let day = addExtraZero(d.getDate());
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        let hasImage = false;

        if(answerFileInput.value) {
            hasImage = true;
        }

        let answer = {
            username: localStorage.getItem('loggedAccUsername'),
            userDegree: localStorage.getItem('loggedAccDegree'),
            isAdmin: localStorage.getItem('isAdmin'),
            publishTime: d.getTime(),
            time: `${h}.${m}`,
            date: `${day} ${month} ${year}`,
            text: answerTextarea.value,
            hasImage: hasImage,
            likeCount: 0,
            hasApproved: false,
        };

        if(answer.hasImage) {
            answer.image = images[0];
        }

        soru.cevapCount += 1;
        soru.answers.push(answer);

        // localStorage.setItem('soru', JSON.stringify(soru));

        set(ref(db, "App/INITIALIZING_SORU", soru)).then(() => {
            // alert("SUCCESSFULLY INITIALIZED");
            ALERT_MODAL.style.display = "none";
            ALERT_MODAL.style.display = "flex";
            ALERT_MODAL_CONTAINER.style.animationName = "modalAnimation";
            ALERT_MODAL_TEXT.textContent = `Basariyla Paylasildi.`;

            setTimeout(() => {
                ALERT_MODAL.style.display = "none";
            }, 1500);
        }).catch((err) => {
            alert(err);
        })

        sorular.map((s) => {
            if(s.soruID == soru.soruID) {
                s.answers = soru.answers;
                s.cevapCount = soru.cevapCount;
            }
        });

        // location.reload();


        set(ref(db, "App/Sorular"), sorular)
        .then(() => {
            // alert('basariyla paylasildi');

            location.reload();
        }).catch((err) => {
            console.log(soru);
            console.log(err)
        })

        // MODAL CIKICAK 1500MS SONRA LOCATION RELOAD;

    } else {
        alert('hata');
    }
}

publishAnswerBTN.addEventListener('click', publishAnswer);

if(hasApprovedAnswer) {
    soruStatusArea.innerHTML = `<i class="fas fa-check"></i>`
    soruStatusArea.style.color = "var(--pastelgreen)";
} else {
    soruStatusArea.innerHTML = `<i class="fas fa-hourglass-start fa-spin"></i>`
    soruStatusArea.style.color = "#634A00";
}