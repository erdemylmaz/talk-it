// update top bar
topbaractiveTopic = 7;
// topbartopicItems[0].style.color = "#000";
topbartopicItems[7].style.color = "#fff";

TopbarHoverEffect({currentTarget: topbartopicItems[topbaractiveTopic]});

// search
const searchArea = document.querySelector('.search-area');

let searchPlaceholders = ["3D Turkiye Geneli 5", "Endemik Turkiye Geneli 4", "TYT Matematik Deneme Onerisi", "AYT Biyoloji Onerileri", "Ders Calisirken Muzik Dinlenir Mi?", "Uclu Kalem Mi Kursun Kalem Mi?", "..."];

changePlaceholder = () => {
    let randomNumber = Math.floor((Math.random() * searchPlaceholders.length));

    searchArea.placeholder = searchPlaceholders[randomNumber];
}

changePlaceholder();

setInterval(changePlaceholder, 60000);

// puan hesaplama
const tytNetSpan = document.querySelector('.tyt-net');
const tytPuanSpan = document.querySelector('.tyt-puan');

const obpInput = document.querySelector('.obp-input');

const turkceDogruInput = document.querySelector('.turkce-dogru-input');
const turkceYanlisInput = document.querySelector('.turkce-yanlis-input');
const turkceNetInput = document.querySelector('.turkce-net-input');

const sosyalDogruInput = document.querySelector('.sosyal-dogru-input');
const sosyalYanlisInput = document.querySelector('.sosyal-yanlis-input');
const sosyalNetInput = document.querySelector('.sosyal-net-input');

const tytMatDogruInput = document.querySelector('.tyt-mat-dogru-input');
const tytMatYanlisInput = document.querySelector('.tyt-mat-yanlis-input');
const tytMatNetInput = document.querySelector('.tyt-mat-net-input');

const tytFenDogruInput = document.querySelector('.tyt-fen-dogru-input');
const tytFenYanlisInput = document.querySelector('.tyt-fen-yanlis-input');
const tytFenNetInput = document.querySelector('.tyt-fen-net-input');

const aytNetSpan = document.querySelector('.ayt-net');
const aytPuanSpan = document.querySelector('.ayt-puan');

const aytMatDogruInput = document.querySelector('.ayt-mat-dogru-input');
const aytMatYanlisInput = document.querySelector('.ayt-mat-yanlis-input');
const aytMatNetInput = document.querySelector('.ayt-mat-net-input');

const aytFzkDogruInput = document.querySelector('.ayt-fzk-dogru-input');
const aytFzkYanlisInput = document.querySelector('.ayt-fzk-yanlis-input');
const aytFzkNetInput = document.querySelector('.ayt-fzk-net-input');

const aytKmyDogruInput = document.querySelector('.ayt-kmy-dogru-input');
const aytKmyYanlisInput = document.querySelector('.ayt-kmy-yanlis-input');
const aytKmyNetInput = document.querySelector('.ayt-kmy-net-input');

const aytBylDogruInput = document.querySelector('.ayt-byl-dogru-input');
const aytBylYanlisInput = document.querySelector('.ayt-byl-yanlis-input');
const aytBylNetInput = document.querySelector('.ayt-byl-net-input');

const allInputs = document.querySelectorAll('.form-input');

let tytDogru;
let tytYanlis;
let tytNet;
let tytPuan;

let aytDogru;
let aytYanlis;
let aytNet;
let aytPuan;

const graphicAREA = document.querySelector('.graphic');

class TYTGraphic {
    results = [
        {
            date: '30 May',
            net: 104.42,
        },
        {
            date: '27 May',
            net: 107.75,
        },
        {
            date: '25 May',
            net: 104.5,
        },
        {
            date: '23 May',
            net: 100,
        },
        {
            date: '15 May',
            net: 82.5,
        },
        {
            date: '2 May',
            net: 99,
        },
    ];

    initResults = () => {
        this.results.map((result) => {
            let div = document.createElement('div');
            div.className = "graphic-data";

            // 50 net puan 512px

            let marginTop = (120 - result.net) * (512 / 50) - 8;

            div.innerHTML = `
                <div class="data-point-area">
                    <div class="data-point" style="margin-top: ${marginTop}px"></div>
                </div>

                <div class="data-date">${result.date} <br /> (${result.net})</div> 
            `;

            graphicAREA.appendChild(div);
        });
    }
}

const tytGraphic = new TYTGraphic();

tytGraphic.initResults();

function calculatePoints() {
    let obp = obpInput.value;



    // TYT
    let turkceDogru = turkceDogruInput.value;
    let turkceYanlis = turkceYanlisInput.value;
    let turkceNet = turkceDogru - (turkceYanlis / 4);

    let sosyalDogru = sosyalDogruInput.value;
    let sosyalYanlis = sosyalYanlisInput.value;
    let sosyalNet = sosyalDogru - (sosyalYanlis / 4);

    let tytMatDogru = tytMatDogruInput.value;
    let tytMatYanlis = tytMatYanlisInput.value;
    let tytMatNet = tytMatDogru - (tytMatYanlis / 4);

    let tytFenDogru = tytFenDogruInput.value;
    let tytFenYanlis = tytFenYanlisInput.value;
    let tytFenNet = tytFenDogru - (tytFenYanlis / 4);

    // AYT
    let aytMatDogru = aytMatDogruInput.value;
    let aytMatYanlis = aytMatYanlisInput.value;
    let aytMatNet = aytMatDogru - (aytMatYanlis / 4);

    let aytFzkDogru = aytFzkDogruInput.value;
    let aytFzkYanlis = aytFzkYanlisInput.value;
    let aytFzkNet = aytFzkDogru - (aytFzkYanlis / 4);

    let aytKmyDogru = aytKmyDogruInput.value;
    let aytKmyYanlis = aytKmyYanlisInput.value;
    let aytKmyNet = aytKmyDogru - (aytKmyYanlis / 4);

    let aytBylDogru = aytBylDogruInput.value;
    let aytBylYanlis = aytBylYanlisInput.value;
    let aytBylNet = aytBylDogru - (aytBylYanlis / 4);


    // if(turkceDogru + turkceYanlis < 41 && sosyalDogru + sosyalYanlis < 21 && tytMatDogru + tytMatYanlis < 41 && tytFenDogru + tytFenYanlis < 21 && aytMatDogru + aytMatYanlis < 41 && aytFzkDogru + aytFzkYanlis < 15 && aytKmyDogru + aytKmyYanlis < 14 && aytBylDogru + aytBylYanlis < 14) {
        turkceNetInput.value = turkceNet;
        sosyalNetInput.value = sosyalNet;
        tytMatNetInput.value = tytMatNet;
        tytFenNetInput.value = tytFenNet;

        aytMatNetInput.value = aytMatNet;
        aytFzkNetInput.value = aytFzkNet;
        aytKmyNetInput.value = aytKmyNet;
        aytBylNetInput.value = aytBylNet;

        tytNet = turkceNet + sosyalNet + tytMatNet + tytFenNet;
        aytNet = aytMatNet + aytFzkNet + aytKmyNet + aytBylNet;

        tytPuan = (turkceNet * 3.3 + sosyalNet * 3.4 + tytMatNet * 3.3 + tytFenNet * 3.4 + obp * 0.6) + 100; 
        aytPuan = (aytMatNet * 3 + aytFzkNet * 2.85 + aytKmyNet * 3.07 + aytBylNet * 3.07 + obp * 0.6 + (turkceNet * 1.32 + sosyalNet * 1.36 + tytMatNet * 1.32 + tytFenNet * 1.36)) + 100;

        tytNetSpan.textContent = `${tytNet} Net`;
        tytPuanSpan.textContent = `${tytPuan.toFixed(2)} Puan`;

        aytNetSpan.textContent = `${aytNet} Net`;
        aytPuanSpan.textContent = `${aytPuan.toFixed(2)} Puan`;
    // } else {
        // alert('lutfen gecerli sonuclar giriniz.');
    // }
}

allInputs.forEach((input) => {
    if(input.classList.contains('net-input')) {
        input.value = 0;
    }

    input.addEventListener('keyup', calculatePoints);
});

obpInput.addEventListener('keyup', calculatePoints);

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