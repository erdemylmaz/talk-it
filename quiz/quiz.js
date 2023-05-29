// topbar
topbaractiveTopic = 5;
topbartopicItems[0].style.color = "#000";
topbartopicItems[5].style.color = "var(--blue)";

TopbarHoverEffect({currentTarget: topbartopicItems[topbaractiveTopic]});

const questionsDIV = document.querySelector('.questions');
const resultAREA = document.querySelector('.quiz-result');
let answerButtons;

let correctCount = 0;

class App {
    questions = [
        {
            answers: ["arkaplan", "arka plan"],
            correctAnswer: 1,
        },
        {
            answers: ["haftasonu", "hafta sonu"],
            correctAnswer: 1,
        },
        {
            answers: ["mahsul", "mahsül"],
            correctAnswer: 0,
        },
        {
            answers: ["gök bilim", "gökbilim"],
            correctAnswer: 0,
        },
        {
            answers: ["kamuoyu", "kamu oyu"],
            correctAnswer: 0,
        },
        {
            answers: ["köpekbalıgı", "köpek balıgı"],
            correctAnswer: 1,
        },
        {
            answers: ["devre dısı", "devredısı"],
            correctAnswer: 0,
        },
        {
            answers: ["ön izleme", "önizleme"],
            correctAnswer: 0,
        },
        {
            answers: ["yeryüzü", "yer yüzü"],
            correctAnswer: 0,
        },
        {
            answers: ["isbirligi", "is birligi"],
            correctAnswer: 1,
        },
        {
            answers: ["ac gözlü", "acgözlü"],
            correctAnswer: 1,
        },
        {
            answers: ["fark etmek", "farketmek"],
            correctAnswer: 0,
        },
        {
            answers: ["aperatif", "aperitif"],
            correctAnswer: 1,
        },
        {
            answers: ["arife", "arefe"],
            correctAnswer: 0,
        },
        {
            answers: ["atac", "atas"],
            correctAnswer: 1,
        },
        {
            answers: ["bilader", "birader"],
            correctAnswer: 1,
        },
        {
            answers: ["bihaber", "birhaber"],
            correctAnswer: 0,
        },
        {
            answers: ["boga yılanı", "boa yılanı"],
            correctAnswer: 1,
        },
        {
            answers: ["boy pos", "boy bos"],
            correctAnswer: 1,
        },
        {
            answers: ["cıva", "civa"],
            correctAnswer: 0,
        },
        {
            answers: ["doküman", "döküman"],
            correctAnswer: 0,
        },
        {
            answers: ["egsoz", "egzoz"],
            correctAnswer: 1,
        },
        {
            answers: ["erozyon", "erezyon"],
            correctAnswer: 0,
        },
        {
            answers: ["ardarda", "art arda"],
            correctAnswer: 1,
        },
        {
            answers: ["kuskonmaz", "kus konmaz"],
            correctAnswer: 0,
        },
        {
            answers: ["bas basa", "basbasa"],
            correctAnswer: 0,
        },
        {
            answers: ["elele", "el ele"],
            correctAnswer: 1,
        },
        {
            answers: ["günügününe", "günü gününe"],
            correctAnswer: 1,
        },
        {
            answers: ["konuksever", "konuk sever"],
            correctAnswer: 0,
        },
        {
            answers: ["hayvan sever", "hayvansever"],
            correctAnswer: 1,
        },
        {
            answers: ["boyunbagı", "boyun bagı"],
            correctAnswer: 1,
        },
        {
            answers: ["cekidüzen", "ceki düzen"],
            correctAnswer: 0,
        },
        {
            answers: ["oldumolası", "oldum olası"],
            correctAnswer: 1,
        },
        {
            answers: ["Ayse teyze", "Ayse Teyze"],
            correctAnswer: 0,
        },
        {
            answers: ["hakettigi", "hak ettigi"],
            correctAnswer: 1,
        },
        {
            answers: ["Galata Köprüsü", "Galata köprüsü"],
            correctAnswer: 0,
        },
        {
            answers: ["Roma Hipodromu", "Roma hipodromu"],
            correctAnswer: 1,
        },
        {
            answers: ["At Meydanı", "At meydanı"],
            correctAnswer: 0,
        },
        {
            answers: ["Ayasofya Camisi", "Ayasofya camisi"],
            correctAnswer: 0,
        },
        {
            answers: ["Alman çesmesi", "Alman Çesmesi"],
            correctAnswer: 1,
        },
        {
            answers: ["karıncaincitmez", "karınca incitmez"],
            correctAnswer: 0,
        },
        {
            answers: ["cokbilmis", "cok bilmis"],
            correctAnswer: 0,
        },
        {
            answers: ["degerbilir", "deger bilir"],
            correctAnswer: 1,
        },
        {
            answers: ["Resmi Gazete", "Resmi gazete"],
            correctAnswer: 0,
        },
        {
            answers: ["Hürriyet Gazetesi", "Hürriyet gazetesi"],
            correctAnswer: 1,
        },
        {
            answers: ["Leyla ile Mecnun", "Leyla Ile Mecnunu"],
            correctAnswer: 0,
        },
        {
            answers: ["Canakkale Bogazının", "Canakkale Bogazı'nın"],
            correctAnswer: 1,
        },
        {
            answers: ["Ankarada", "Ankara'da"],
            correctAnswer: 1,
        },
        {
            answers: ["KYK'da", "KYK'de"],
            correctAnswer: 1,
        },
        {
            answers: ["arz ederim", "arzederim"],
            correctAnswer: 0,
        },
        {
            answers: ["yalıcapkını", "yalı capkını"],
            correctAnswer: 0,
        },
        {
            answers: ["camgöbegi", "cam göbegi"],
            correctAnswer: 0,
        },
        {
            answers: ["deniz yılanı", "denizyılanı"],
            correctAnswer: 0,
        },
        {
            answers: ["hickimse", "hic kimse"],
            correctAnswer: 1,
        },
        {
            answers: ["pekcok", "pek cok"],
            correctAnswer: 1,
        },
        {
            answers: ["sıradısı", "sıra dısı"],
            correctAnswer: 1,
        },
    ];

    shuffleArray = () => {
        this.questions.sort(() => Math.random() - 0.5)
    }

    init = () => {
        this.questions.forEach((question, questionIndex) => {
            let div = document.createElement('div');
            div.className = "question";
            div.setAttribute('data-questionindex', questionIndex)
            div.setAttribute('data-correctanswer', question.correctAnswer);

            div.innerHTML = `
                <div class="answer" data-questionindex = "${questionIndex}" data-answerindex = "0" data-correctanswer = "${question.correctAnswer}">${question.answers[0]}</div>
                <div class="answer"  data-questionindex = "${questionIndex}" data-answerindex = "1" data-correctanswer = "${question.correctAnswer}">${question.answers[1]}</div> 
            `;

            questionsDIV.appendChild(div);

            answerButtons = document.querySelectorAll('.answer');
        });
    }

    selectAnswer = (e) => {
        let correctAnswer = e.target.dataset.correctanswer;
        let selectedAnswer = e.target.dataset.answerindex;

        if(selectedAnswer == correctAnswer) {
            e.target.classList.add('answer-correct');
            correctCount += 1;

            resultAREA.textContent = `${correctCount}/${this.questions.length}`;
        } else {
            e.target.classList.add('answer-wrong');
        }
    }
}

const app = new App();

resultAREA.textContent = `0/${app.questions.length}`;
app.shuffleArray();
app.init();

answerButtons.forEach((answerBTN) => {
    answerBTN.addEventListener('click', app.selectAnswer);
});

// search
const searchArea = document.querySelector('.search-area');

let searchPlaceholders = ["3D Turkiye Geneli 5", "Endemik Turkiye Geneli 4", "TYT Matematik Deneme Onerisi", "AYT Biyoloji Onerileri", "Ders Calisirken Muzik Dinlenir Mi?", "Uclu Kalem Mi Kursun Kalem Mi?", "..."];

changePlaceholder = () => {
    let randomNumber = Math.floor((Math.random() * searchPlaceholders.length));

    searchArea.placeholder = searchPlaceholders[randomNumber];
}

changePlaceholder();

setInterval(changePlaceholder, 60000);