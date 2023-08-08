//              DATABASE

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

//              APP
const warningModal = document.querySelector('.register-warning');
let hasLoggedIn = false;

if(localStorage.getItem('hasLoggedIn') == "true") {
    hasLoggedIn = true;
}

class Users {
    users = [];
}

const users = new Users();

get(ref(db, "App/Users")).then((snapshot) => {
    if(snapshot.exists()) {
        users.users = snapshot.val();
    }
}).catch((err) => {
    console.log(err);
})


const loginForm = document.querySelector('.login-container');
const registerForm = document.querySelector('.register-container');

const loginUsernameInput = document.querySelector('.username-input');
const loginPasswordInput = document.querySelector('.password-input');

const registerFirstnameInput = document.querySelector('.firstname-input');
const registerSurnameInput = document.querySelector('.surname-input');
const registerUsernameInput = document.querySelector('.r-username-input');
const registerPasswordInput = document.querySelector('.r-password-input');

const usernameCheckDIV = document.querySelector('.username-availability');
const registerUsernameText = document.querySelector('.r-username-text');

const footerLoginBtn = document.querySelector('.footer-login-btn');
const footerSignUpBtn = document.querySelector('.footer-sign-up-btn');

const loginBTN = document.querySelector('.login-btn');
const registerBTN = document.querySelector('.sign-up-btn');

const togglePasswordBTNS = document.querySelectorAll('.toggle-password-btn');

const select = document.querySelector("select");

let loginFormType = localStorage.getItem('loginType');

footerLoginBtn.addEventListener('click', () => {
    loginForm.style.display = "block";
    registerForm.style.display = "none";

    localStorage.setItem('loginType', 'login');
});

footerSignUpBtn.addEventListener('click', () => {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    warningModal.style.display = "flex";

    localStorage.setItem('loginType', 'register');
});


if(loginFormType == "login") {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
} else {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    warningModal.style.display = "flex";
    // alert("Lutfen aktif kullandiginiz sifreleri kullanmamaya ozen gosterin!");
}

let hasSameUsername = false;

function login() {
    users.users.map((user) => {
        if(user.username == loginUsernameInput.value && user.password == loginPasswordInput.value) {
            localStorage.setItem('hasLoggedIn', "true");
            localStorage.setItem('loggedAccUsername', user.username);

            location.href = "../index.html";
        } else {
        }
    });
}

function register() {
    if(!hasSameUsername && registerFirstnameInput.value != "" && registerSurnameInput.value != "" && registerPasswordInput.value != "" && registerUsernameInput.value != "") {
        let d = new Date();

        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();

        let h = d.getHours();
        let m = d.getMinutes();

        let user = {
            firstname: registerFirstnameInput.value,
            surname: registerSurnameInput.value,
            username: registerUsernameInput.value,
            password: registerPasswordInput.value,
            degree: select.value,
            createHour: h,
            createMin: m,
            createDay: day,
            createMonth: month,
            createYear: year,
            isAdmin: false,
        }

        users.users.push(user);
        set(ref(db, "App/Users"), users.users).then(() => {
            console.log("Successfully inserted user");
        }).catch((err) => {
            console.log(err);
        });

        localStorage.setItem('hasLoggedIn', "true");
        localStorage.setItem('loggedAccUsername', registerUsernameInput.value);

        location.href = "../index.html";
    } else {
        alert("Lutfen tum bosluklari doldurunuz.");
    }
}


function checkUsername() {
    hasSameUsername = false;

    users.users.map((user) => {
        if(user.username.toLowerCase() == registerUsernameInput.value.toLowerCase()) {
            hasSameUsername = true;
        }
    });

    if(registerUsernameInput.value != "") {
        if(hasSameUsername) {
            usernameCheckDIV.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
            registerUsernameText.style.color = "var(--red)";
            // usernameCheckDIV.style.color = "var(--red)";
        } else {
            usernameCheckDIV.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
            registerUsernameText.style.color = "var(--pastelgreen)";
            // usernameCheckDIV.style.color = "var(--pastelgreen)";
        }

    } else {
        usernameCheckDIV.innerHTML = ``;
        registerUsernameText.style.color = "#000";
    }
}

registerUsernameInput.addEventListener('keyup', checkUsername);

loginBTN.addEventListener('click', login);
registerBTN.addEventListener('click', register);

togglePasswordBTNS.forEach((toggleBTN) => {
    toggleBTN.addEventListener('click', (e) => {
        let passwordInput = e.currentTarget.previousElementSibling;

        if(passwordInput.type == "password") {
            passwordInput.type = "type";

            e.currentTarget.innerHTML = `<i class="fa-regular fa-eye"></i>`;
        } else {
            passwordInput.type = "password";
            e.currentTarget.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`
        }
    });
})

if(hasLoggedIn) {
    registerForm.style.display = "none";
    loginForm.style.display = "none";
}

const closeModalBtn = document.querySelector('.warning-close-btn')

document.addEventListener('click', (e) => {
    if(e.target.className == "register-warning") {
        warningModal.style.display = "none";
    }
})

closeModalBtn.addEventListener('click', () => {
    warningModal.style.display = "none";
})

const continueBTNs = document.querySelectorAll('.guest-btn');

// set(ref(db, "App/GUEST_NUMBERS"), [1177, 2695, 9839, 4786, 2844, 6148, 2903]);

function continueAsGuest() {
    let numbers = [];

    get(ref(db, "App/GUEST_NUMBERS")).then((snapshot) => {
        numbers = snapshot.val();

        let randomNumber = 1000 + Math.floor(Math.random() * 9000);

        while(numbers.find((n) => n == randomNumber)) {
            randomNumber = 1000 + Math.floor(Math.random() * 9000);
        }

        numbers.push(randomNumber);

        set(ref(db, "App/GUEST_NUMBERS"), numbers).catch((err) => {
        });

        let username = `Guest-${randomNumber}`;

        let user = {
                username: username,
                password: 'xxxxxguestxxxxx',
                degree: 'G',
                isAdmin: false,
            }

        users.users.push(user);
        set(ref(db, "App/Users"), users.users).then(() => {
            console.log("Successfully inserted user");
        }).catch((err) => {
            console.log(err);
        });

        localStorage.setItem('hasLoggedIn', "true");
        localStorage.setItem('loggedAccUsername', username);

        location.href = "../index.html";
    }).catch((err) => {
        console.log(err);
    });

    
}

continueBTNs.forEach((btn) => {
    btn.addEventListener('click', continueAsGuest);
})