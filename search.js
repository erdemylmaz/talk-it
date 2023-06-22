const searchInput = document.querySelector('.search-area');
const resultsArea = document.querySelector('.search-results');

let results;

let createResult;

changeTopicBySearch = (e) => {
    let topicIndex = e.currentTarget.dataset.topicindex;

    app.activeTopic = topicIndex;

    localStorage.setItem('currentTopic', app.activeTopic);

    location.reload();
}

search = () => {
    let value = searchInput.value;

    if(value.length > 2) {
        resultsArea.style.display = "flex";
        resultsArea.innerHTML = "";

        let firstResults = [];

        app.topics.map((topic, topicIndex) => {
            if(topic.title.toLowerCase().indexOf(value.toLowerCase()) != -1) {
                firstResults.push({...topic, topicIndex: topicIndex});
            }
        });

        // sort by entry count
        firstResults.sort((a, b) => b.entryCount - a.entryCount);

        firstResults.map((result, index) => {
            if(index < 5) {
                let resultDIV = document.createElement('div');
                resultDIV.className = "search-result";
                resultDIV.setAttribute("data-topicindex", result.topicIndex);

                resultDIV.innerHTML = `
                    <div class="result-title">${result.title}</div>
                    <div class="result-entryCount">${result.entryCount} Entry</div>
                    <div class="result-date">${result.createDate}</div>
                `;

                resultsArea.appendChild(resultDIV);
            }
        });

        if(firstResults.length == 0) {
                let resultDIV = document.createElement('div');
                resultDIV.className = "search-result create-result";
                resultDIV.setAttribute('data-title', value);

                resultDIV.innerHTML = `
                    <div class="result-title">${value}</div>

                    <div class="result-entryCount">Create Topic!</div>
                `;

                resultsArea.appendChild(resultDIV);

                createResult = document.querySelector('.create-result');

                createResult.addEventListener('click', () => {
                    publishingTopicTitleInput.value = value;

                    app.createNewTopic();
                });
        }
    } else {
        resultsArea.style.display = 'none';
    }

    results = document.querySelectorAll('.search-result');

    results.forEach((result) => {
        result.addEventListener('click', changeTopicBySearch);
    })
}

searchInput.addEventListener('keyup', search);