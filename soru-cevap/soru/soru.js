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
const soruImageAREA = document.querySelector('.soru-image');
const soruInfoAREA = document.querySelector('.soru-info-area');

const soru = JSON.parse(localStorage.getItem('soru'));
const publishAnswerBTN = document.querySelector('.publish-answer-btn');
const answerTextarea = document.querySelector('.answer-text-input');
const answerFileInput = document.querySelector('.answer-file-input');
const answersArea = document.querySelector('.answers');

const soruStatusArea = document.querySelector('.soru-status') 

if(!soru.answers) {
    soru.answers = [];
}

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

        <div class="soru-status"><i class="fa-solid fa-hourglass-start fa-spin"></i></div>

        <div class="soru-description">
            ${soru.desc}
        </div>

        <div class="soru-footer">
            <div class="soru-owner-username">${soru.username} (${soru.userDegree})</div>
            <div class="soru-date">${soru.time} - ${soru.date}</div>
        </div> 
    `;
}

initSoru();

function initAnswers() {
    soru.answers.sort((a, b) => b.publishTime - a.publishTime);
    soru.answers.sort((a, b) => b.likeCount - a.likeCount);

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
                    <div class="answer-owner-username ${answer.isAdmin ? "admin-username" : ""}">${answer.username} (${answer.userDegree})</div>
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
                    <div class="answer-owner-username ${answer.isAdmin ? "admin-username" : ""}">${answer.username} (${answer.userDegree})</div>
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
                    <div class="answer-owner-username ${answer.isAdmin ? "admin-username" : ""}">${answer.username} (${answer.userDegree})</div>
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

answerTextarea.addEventListener('click', () => {
    answerTextarea.style.height = "96px";
})

initAnswers();

function publishAnswer() {
    if(answerTextarea.value != "" || answerFileInput.value) {

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
            image: images[0],
            likeCount: 0,
            likedUsernames: [],
            hasApproved: false,
        };

        soru.cevapCount += 1;
        soru.answers.push(answer);

        localStorage.setItem('soru', JSON.stringify(soru));

        location.reload();

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