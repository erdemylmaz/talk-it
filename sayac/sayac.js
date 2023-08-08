topbaractiveTopic = 4;
// topbartopicItems[0].style.color = "#000";
topbartopicItems[4].style.color = "#fff";

TopbarHoverEffect({currentTarget: topbartopicItems[topbaractiveTopic]});

// sayac
const sayacArea = document.querySelector('.sayac');

let endDate = new Date("Aug 8, 2023 23:59:00").getTime();

let oneDay = 1000 * 60 * 60 * 24;
let oneHour = oneDay / 24;
let oneMinute = oneHour / 60;
let oneSecond = oneMinute / 60;

setInterval(() => {
    let date = new Date();
    let t = endDate - date.getTime();

    let kalanGun = Math.floor(t / oneDay);
    let kalanSaat = Math.floor((t % oneDay) / oneHour);
    let kalanDakika = Math.floor((t % oneHour) / oneMinute);
    let kalanSaniye = Math.floor((t % oneMinute) / oneSecond);

    sayacArea.innerHTML = `
    <div class="days block">
        <div class="block-top">${kalanGun}</div>
        <div class="block-bottom">Gun</div>
    </div>

    <div class="hours block">
        <div class="block-top">${kalanSaat}</div>
        <div class="block-bottom">Saat</div>
    </div>

    <div class="minutes block">
        <div class="block-top">${kalanDakika}</div>
        <div class="block-bottom">Dakika</div>
    </div>

    <div class="seconds block">
        <div class="block-top">${kalanSaniye}</div>
        <div class="block-bottom">Saniye</div>
    </div> 
    `;

}, 1000);

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