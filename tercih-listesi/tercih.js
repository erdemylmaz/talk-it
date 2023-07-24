// search
const searchArea = document.querySelector('.search-area');

let searchPlaceholders = ["3D Turkiye Geneli 5", "Endemik Turkiye Geneli 4", "TYT Matematik Deneme Onerisi", "AYT Biyoloji Onerileri", "Ders Calisirken Muzik Dinlenir Mi?", "Uclu Kalem Mi Kursun Kalem Mi?", "..."];

changePlaceholder = () => {
    let randomNumber = Math.floor((Math.random() * searchPlaceholders.length));

    searchArea.placeholder = searchPlaceholders[randomNumber];
}

changePlaceholder();

setInterval(changePlaceholder, 60000);

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

// update top bar
let topbartopicItems = document.querySelectorAll('.top-bar-item');

topbaractiveTopic = 6;
// topbartopicItems[0].style.color = "#000";
topbartopicItems[6].style.color = "#fff";

// TopbarHoverEffect({currentTarget: topbartopicItems[topbaractiveTopic]});

//                       TERCIH LISTESI    

