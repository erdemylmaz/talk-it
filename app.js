const navbarList = document.querySelector('.navbar-list');
const topicTitleDIV = document.querySelector('.topic-title'); 
const topicEntriesArea = document.querySelector('.topic-entries');

class App {
    activeTopic = 0;

    topics = [
        {
            title: 'MSU 2023',
            entryCount: 5,
            createDate: '24 Nisan 2023',
            createTime: '20.15',
            createdUsername: 'erdemyilmaz',
            entries: [
                {
                    username: 'erdemyilmaz',
                    userDegree: 12,
                    publishDate: '24 Nisan 2023',
                    publishTime: '20.15',
                    text: 'Geometride katlamali soruyu ne yaptiniz?',
                    replyCount: 3,
                    entryID: 0,
                    replies: [
                        {
                            text: '12 buldum ama hic emin degilim',
                            username: 'd',
                            userDegree: 12,
                            publishDate: '24 Nisan 2023',
                            publishTime: '20.17', 
                            replyCount: 1,
                            entryID: 1,
                            replyTo: 0,
                            replies: [
                                {
                                    text: 'ben de 12 buldum cok eminim',
                                    username: 'ILD',
                                    userDegree: 'MZN',
                                    publishDate: '24 Nisan 2023',
                                    publishTime: '10.36',
                                    entryID: 2,
                                    replyCount: 0,
                                    replyTo: 1,
                                    replies: [],
                                },
                            ],
                        },{
                            text: 'cok ugrastim ama maalesef yapamadim :(',
                            username: 'e',
                            userDegree: 12,
                            publishDate: '24 Nisan 2023',
                            publishTime: '10.54',
                            replyCount: 0,
                            entryId: 3,
                            replyTo: 0,
                            replies: [],
                        },
                    ],
                },
                {
                    username: 'hedeftip',
                    userDegree: 12,
                    publishDate: '24 Nisan 2023',
                    publishTime: '10.55',
                    text: 'Bizim sinifta cok ses cikaran bi cocuk vardi, burdan ona saydilar (!)',
                    replyCount: 0,
                    entryId: 4,
                    replies: [],
                }
            ],
        },
        {
            title: 'TYT 2023',
            entryCount: 5,
            createDate: '24 Nisan 2023',
            createTime: '20.59',
            createdUsername: 'erdemyilmaz',
            entries: [
                {
                    username: 'erdemyilmaz',
                    publishDate: '24 Nisan 2023',
                    publishTime: '20.59',
                    userDegree: 12,
                    text: 'Sizce bu sene zor mu sorarlar',
                    replyCount: 1,
                    entryID: 5,
                    replies: [
                        {
                            text: 'bunun cevabini kimse bilmiyo kanka',
                            username: 'hedeftip',
                            publishDate: '24 Nisan 2023',
                            publishTime: '23.00', 
                            replyCount: 0,
                            userDegree: 12,
                            replyTo: 5,
                            entryID: 6,
                            replies: [],
                        },
                    ],
                }, {
                    username: 'd',
                    publishDate: '24 Nisan 2023',
                    publishTime: '23.00',
                    text: 'TYT Matematik icin deneme onerebilir misiniz?',
                    replyCount: 2,
                    entryID: 7,
                    userDegree: 12,
                    replies: [
                        {
                            text: "Mert Hoca'nin TYT Matematik denemelerini cok seviyorum ben ne kolay ne zor, yeni de nesil eger orta-ust bi ogrenciyse kesinlikle tavsiye ederim",
                            username: 'erdemyilmaz',
                            publishDate: '24 Nisan 2023',
                            publishTime: '23.01', 
                            userDegree: 12,
                            replyTo: 7,
                            entryID: 8,
                            replyCount: 1,
                            replies: [
                                {
                                    text: 'tesekkur ederim',
                                    username: 'd',
                                    publishDate: '24 Nisan 2023',
                                    publishTime: '23.03', 
                                    replyCount: 0,
                                    replyTo: 8,
                                    entryID: 9,
                                    userDegree: 12,
                                    replies: [],
                                }
                            ],
                        },
                    ],
 
                }
            ],
        },
        {
            title: 'Dr.Biyoloji',
            entryCount: 1,
            createDate: '24 Nisan 2023',
            createTime: '11.24',
            createdUsername: 'erdemyilmaz',
            entries: [
                {
                    username: 'erdemyilmaz',
                    publishDate: '24 Nisan 2023',
                    publishTime: '23.25',
                    userDegree: 'MZN',
                    text: 'Bana biyoloji calismayi sevdiren cok sevdigim hocam <3',
                    replyCount: 0,
                    entryID: 10,
                    replies: [],   
                }
            ]
        }
    ];

    init = () => {
        // init navbar
        this.topics.forEach((topic, index) => {
            let navbarItem = document.createElement('div');
            navbarItem.className = `nl-item`;
            navbarItem.setAttribute('data-topicindex', index);

            if(index == this.activeTopic) {
                navbarItem.style.color = `var(--blue)`;
            }

            navbarItem.innerHTML = `
                <div class="nl-item-text">${topic.title}</div>

                <div class="nl-item-entryCount">${topic.entryCount}</div>
            `;

            navbarList.appendChild(navbarItem);
        });

        topicItems = document.querySelectorAll('.nl-item');
        topicItems.forEach((item) => {
            item.addEventListener('mouseenter', HoverEffect);
            item.addEventListener('click', this.changeTopic);
        });

        // init container
        topicTitleDIV.textContent = this.topics[this.activeTopic].title;

        this.topics[this.activeTopic].entries.map((entry) => {
            console.log(entry);
            let entryDIV = document.createElement('div');
            entryDIV.className = "topic-entry";

            entryDIV.innerHTML = `
                <div class="entry-top entry-${entry.entryID}">
                    <div class="entry-pp"><i class="fa-regular fa-user"></i></div>

                    <div class="entry-text">${entry.text}</div>
                </div>

                <div class="entry-bottom">
                    <div class="entry-reply-btn">cevapla</div>
                    <div class="toggle-replies-btn">cevaplari goster (${entry.replyCount})</div>

                    <div class="entry-bottom-right">
                        <div class="entry-username">${entry.username} <span class="user-degree">(${entry.userDegree})</span></div>

                        <div class="entry-date">${entry.publishTime} - ${entry.publishDate}</div>
                    </div>
                </div>

                <div class="entry-replies replies-${entry.entryID}"></div>
            `;

            topicEntriesArea.appendChild(entryDIV);

            // init replies
            for(let x = 0; x < entry.replyCount; x++) {
                let reply = entry.replies[x];

                if(reply) {
                    let repliedEntryRepliesDIV = document.querySelector(`.replies-${reply.replyTo}`);

                    let replyDIV = document.createElement('div');
                    replyDIV.className = `reply entry-${reply.entryID}`;

                    replyDIV.innerHTML = `
                    <div class="reply-icon"></div>

                    <div class="entry-top">
                        <div class="entry-pp"><i class="fa-regular fa-user"></i></div>

                        <div class="entry-text">${reply.text}</div>
                    </div>

                    <div class="entry-bottom">
                        <div class="entry-reply-btn">cevapla</div>
                        <div class="toggle-replies-btn">cevaplari goster (${reply.replyCount})</div>

                        <div class="entry-bottom-right">
                            <div class="entry-username">${reply.username} <span class="user-degree">(${reply.userDegree})</span></div>

                            <div class="entry-date">${reply.publishTime} - ${reply.publishDate}</div>
                        </div>
                    </div>

                    <div class="entry-replies replies-${reply.entryID}"></div>
                    `;

                    repliedEntryRepliesDIV.appendChild(replyDIV);

                    for(let i = 0; i < reply.replyCount; i++) {

                        let reply2 = reply.replies[i];

                        let repliedEntryRepliesDIV = document.querySelector(`.replies-${reply2.replyTo}`);
        
                        let reply2DIV = document.createElement('div');
                        reply2DIV.className = `reply entry-${reply2.entryID}`;
        
                        reply2DIV.innerHTML = `
                        <div class="reply-icon"></div>
        
                        <div class="entry-top">
                            <div class="entry-pp"><i class="fa-regular fa-user"></i></div>
        
                            <div class="entry-text">${reply2.text}</div>
                        </div>
        
                        <div class="entry-bottom">
                            <div class="entry-reply-btn">cevapla</div>
                            <div class="toggle-replies-btn">cevaplari goster (${reply2.replyCount})</div>
        
                            <div class="entry-bottom-right">
                                <div class="entry-username">${reply2.username} <span class="user-degree">(${reply2.userDegree})</span></div>
        
                                <div class="entry-date">${reply2.publishTime} - ${reply2.publishDate}</div>
                            </div>
                        </div>
        
                        <div class="entry-replies"></div>
                        `;
        
                        repliedEntryRepliesDIV.appendChild(reply2DIV);
                        
                    }

                }
            }
        });
    }

    changeTopic = (e) => {
        this.activeTopic = e.currentTarget.dataset.topicindex;
        activeTopic = this.activeTopic;

        navbarList.innerHTML = `
            <div class="navbar-hover-effect"></div>
        `;

        hoverDIV = document.querySelector('.navbar-hover-effect');

        topicEntriesArea.innerHTML = ``;
        this.init();
    }
}

const app = new App();

app.init();

activeTopic = app.activeTopic;