import {app} from "./app.js";

const searchInput = document.querySelector('.search-area');
const resultsArea = document.querySelector('.search-results');

let results;
let createResult;

let topics = JSON.parse(localStorage.getItem('topics'));

let title = document.title;

let isHomepage;

if(title.indexOf("-") != -1) {
    isHomepage = false;
} else {
    isHomepage = true;
}

let isSoruPage = false;

let url = document.URL;

if(url.indexOf('soru.html') != -1) {
    isSoruPage = true;
}

let activeTopic2 = localStorage.getItem('activeTopic');

function changeTopicBySearch(e) {
    let topicIndex = e.currentTarget.dataset.topicindex;

    activeTopic2 = topicIndex;

    localStorage.setItem('currentTopic', activeTopic2);

    if(topicIndex) {
        location.reload();
    }
}

function search() {
    let value = searchInput.value;

    if(value.length > 1) {
        resultsArea.style.display = "flex";
        resultsArea.innerHTML = "";

        let firstResults = [];

        topics.map((topic, topicIndex) => {
            if(topic) {
                if(topic.title.toLowerCase().indexOf(value.toLowerCase()) != -1) {
                    firstResults.push({...topic, topicIndex: topicIndex});
                }
            }
        });

        // sort by entry count
        firstResults.sort((a, b) => b.entryCount - a.entryCount);

        let isAllWaiting = true;
        let hasSame = false;

        firstResults.map((result, index) => {
            if(index < 5) {
                let resultDIV;
                if(isHomepage) {
                    resultDIV = document.createElement('div');
                } else {
                    resultDIV = document.createElement('a');
                    resultDIV.href = "../index.html";

                    if(isSoruPage) {
                        resultDIV.href = "../../index.html";
                    }
                }

                if(value.toLowerCase() == result.title.toLowerCase()) {
                    hasSame = true;
                }

                if(result.status == "active") {
                    isAllWaiting = false;
                }

                resultDIV.className = "search-result";
                resultDIV.setAttribute("data-topicindex", result.topicIndex);

                if(result.status == "waiting") {
                    resultDIV.classList.add('waiting-search-result');
                    resultDIV.href = "#";
                }

                resultDIV.innerHTML = `
                    <div class="result-title">${result.title}</div>
                    <div class="result-entryCount">${result.entryCount} Entry</div>
                    <div class="result-date">${result.createDate}</div>
                    <div class="result-status">${result.status == "waiting" ? "waiting for permission" : ""}</div>
                `;

                resultsArea.appendChild(resultDIV);
            }
        });

        if(firstResults.length == 0 && isHomepage || (isAllWaiting && isHomepage && !hasSame) || (!hasSame && isHomepage)) {
                let resultDIV = document.createElement('div');
                resultDIV.className = "search-result create-result";
                resultDIV.setAttribute('data-title', value);

                console.log()

                resultDIV.innerHTML = `
                    <div class="result-title">${value}</div>

                    <div class="result-entryCount">Create Topic!</div>
                `;

                if(!hasSame) {
                    resultsArea.appendChild(resultDIV);
                } else {
                    resultsArea.prepend(resultDIV);
                }

                createResult = document.querySelector('.create-result');

                createResult.addEventListener('click', () => {
                    let publishingTopicTitleInput = document.querySelector('.topic-title-input');
                    publishingTopicTitleInput.value = value;

                    app.createNewTopic();
                });
        }

        if(firstResults.length == 0 && !isHomepage) {
            resultsArea.style.border = "none";
        } else {
            resultsArea.style.border = "1px solid #aaa";
        }
    } else {
        resultsArea.style.display = 'none';
    }

    results = document.querySelectorAll('.search-result');

    results.forEach((result) => {
        if(!result.classList.contains('waiting-search-result')) {
            result.addEventListener('click', changeTopicBySearch);
        }
    })
}

searchInput.addEventListener('keyup', search);
