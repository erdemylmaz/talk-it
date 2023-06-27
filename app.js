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

//                      APP

const logo = document.querySelector('.logo');

const navbarList = document.querySelector('.navbar-list');
const topicTitleDIV = document.querySelector('.topic-title'); 
const topicEntriesArea = document.querySelector('.topic-entries');
const container = document.querySelector('.container');

const replyModal = document.querySelector('.reply-modal');
const closeRMBTN = document.querySelector('.close-modal-btn');
const rmTopicTitleDIV = document.querySelector('.rm-topic-title');
const rmAnsweringEntryTextDIV = document.querySelector('.modal-entry-text');
const rmAnsweringEntryDateDIV = document.querySelector('.modal-entry-date');
const rmAnsweringEntryUsernameDIV = document.querySelector('.modal-entry-username');
const rmAnswerTextarea = document.querySelector('.rm-reply-textarea');
const rmPublishAnswerBTN = document.querySelector('.rm-publish-reply-btn');

const topicModal = document.querySelector('.create-topic-modal');
const closeTopicModalBTN = document.querySelector('.close-ctm-btn');
const publishTopicBTN = document.querySelector('.publish-topic-btn');
const publishingTopicTitleInput = document.querySelector('.topic-title-input');

const searchArea = document.querySelector('.search-area');

let cevaplaBTNS;
let publishEntryTextarea;
let publishEntryBTN;
let showRepliesBTNS;
let likeEntryBTNs;
let createTopicBtn;
let deleteEntryBtns;

function addExtraZero(x) {
    return x < 10 ? "0" + x : x;
}

class App {
    // user
    username = 'erdemyilmaz';
    degree = "UNI";
    isAdmin = true;
    hasLoggedIn = true;

    isHomepage = false;

    activeTopic = 0;
    lastEntryID = 10;

    isReplyModalOpen = false;

    months = ["Ocak", 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

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
                            entryID: 3,
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
                    entryID: 4,
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

    searchPlaceholders = [];

    init = () => {
        // init navbar
        // let sortedTopics = this.topics.sort((a, b) => b.entryCount - a.entryCount);

        this.topics.forEach((topic, index) => {
            if(topic.status == "active") {
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

            }
        });

        // init create topic btn
        let createTopicDiv = document.createElement('div');
        createTopicDiv.className = "nl-item create-topic-btn";

        createTopicDiv.innerHTML = `
            <div class="nl-item-text">+</div>
        `;

        navbarList.appendChild(createTopicDiv);

        createTopicBtn = document.querySelector('.create-topic-btn');

        topicItems = document.querySelectorAll('.nl-item');
        topicItems.forEach((item) => {
            item.addEventListener('mouseenter', HoverEffect);
            item.addEventListener('click', this.changeTopic);
        });

        // init container
        topicTitleDIV.textContent = `#${this.topics[this.activeTopic].title}`;

        if(!this.topics[this.activeTopic].entries) {
            this.topics[this.activeTopic].entries = [];
        }

        this.topics[this.activeTopic].entries.map((entry) => {
            let entryDIV = document.createElement('div');
            entryDIV.className = "topic-entry";
            entryDIV.setAttribute('data-topic', this.activeTopic);
            entryDIV.setAttribute('data-entryid', entry.entryID);

            if(!entry.replies) {
                entry.replies = [];
            }

            entryDIV.innerHTML = `
                <div class="delete-entry-btn" style="display: ${this.canDeleteEntry(entry.username, this.username)}"><i class="fa-solid fa-trash"></i></div>
                <div class="entry-top entry-${entry.entryID}">
                    <div class="entry-pp"><i class="fa-regular fa-user"></i></div>

                    <div class="entry-text">${entry.text}</div>
                </div>

                <div class="entry-bottom">
                    <div class="entry-reply-btn">cevapla</div>
                    <div class="toggle-replies-btn toggle-repliesBTN-${entry.entryID}" data-toggledEntryID = '${entry.entryID}'>cevaplari goster (${entry.replyCount})</div>

                    <div class="entry-bottom-right">
                        <div class="entry-like-btn"><i class="fa-regular fa-heart"></i></div>
                        <div class="entry-username">${entry.username} <span class="user-degree">(${entry.userDegree})</span></div>

                        <div class="entry-date">${entry.publishTime} - ${entry.publishDate}</div>
                    </div>
                </div>

                <div class="entry-replies hidden replies-${entry.entryID}" data-status = "hidden"></div>
            `;

            topicEntriesArea.appendChild(entryDIV);

            // init replies
            for(let x = 0; x < entry.replyCount; x++) {
                let reply = entry.replies[x];

                if(reply.replies == undefined) {
                    reply.replies = [];
                }

                if(reply) {
                    let repliedEntryRepliesDIV = document.querySelector(`.replies-${reply.replyTo}`);

                    let replyDIV = document.createElement('div');
                    replyDIV.className = `reply entry-${reply.entryID}`;
                    replyDIV.setAttribute('data-topic', this.activeTopic);
                    replyDIV.setAttribute('data-r1RepliedEntryId', reply.replyTo);
                    replyDIV.setAttribute('data-isr1', 'true');
                    replyDIV.setAttribute('data-entryid', reply.entryID);

                    replyDIV.innerHTML = `
                    <div class="delete-entry-btn" style="display: ${this.canDeleteEntry(reply.username, this.username)}"><i class="fa-solid fa-trash"></i></div>
                    <div class="reply-icon"></div>

                    <div class="entry-top">
                        <div class="entry-pp"><i class="fa-regular fa-user"></i></div>

                        <div class="entry-text">${reply.text}</div>
                    </div>

                    <div class="entry-bottom">
                        <div class="entry-reply-btn">cevapla</div>
                        <div class="toggle-replies-btn toggle-repliesBTN-${reply.entryID}" data-toggledEntryID = '${reply.entryID}'>cevaplari goster (${reply.replyCount})</div>

                        <div class="entry-bottom-right">
                            <div class="entry-like-btn"><i class="fa-regular fa-heart"></i></div>
                            <div class="entry-username">${reply.username} <span class="user-degree">(${reply.userDegree})</span></div>

                            <div class="entry-date">${reply.publishTime} - ${reply.publishDate}</div>
                        </div>
                    </div>

                    <div class="entry-replies hidden replies-${reply.entryID}" data-status = "hidden"></div>
                    `;

                    repliedEntryRepliesDIV.appendChild(replyDIV);

                    let toggleReplyBTN = document.querySelector(`.toggle-repliesBTN-${reply.entryID}`);
            
                    if(reply.replyCount == 0) {
                        toggleReplyBTN.style.display = "none";
                    }


                    for(let i = 0; i < reply.replyCount; i++) {

                        let reply2 = reply.replies[i];

                        if(reply2.replies == undefined) {
                            reply2.replies = [];
                        }

                        let repliedEntryRepliesDIV = document.querySelector(`.replies-${reply2.replyTo}`);
        
                        let reply2DIV = document.createElement('div');
                        reply2DIV.className = `reply entry-${reply2.entryID}`;
                        reply2DIV.setAttribute('data-topic', this.activeTopic);
                        reply2DIV.setAttribute('data-isr2', 'true');
                        reply2DIV.setAttribute('data-r1EntryID', reply.entryID);
                        reply2DIV.setAttribute('data-r1RepliedEntryId', reply.replyTo);
                        reply2DIV.setAttribute('data-r2RepliedEntryId', reply2.replyTo);
                        reply2DIV.setAttribute('data-entryid', reply2.entryID);
        
                        reply2DIV.innerHTML = `
                        <div class="reply-icon"></div>
                        <div class="delete-entry-btn" style="display: ${this.canDeleteEntry(reply2.username, this.username)}"><i class="fa-solid fa-trash"></i></div>
        
                        <div class="entry-top">
                            <div class="entry-pp"><i class="fa-regular fa-user"></i></div>
        
                            <div class="entry-text">${reply2.text}</div>
                        </div>
        
                        <div class="entry-bottom">

                            <div class="entry-bottom-right">
                                <div class="entry-like-btn"><i class="fa-regular fa-heart"></i></div>
                                <div class="entry-username">${reply2.username} <span class="user-degree">(${reply2.userDegree})</span></div>
        
                                <div class="entry-date">${reply2.publishTime} - ${reply2.publishDate}</div>
                            </div>
                        </div>
        
                        <div class="entry-replies hidden" data-status = "hidden"></div>
                        `;
        
                        repliedEntryRepliesDIV.appendChild(reply2DIV);
                        
                        // let toggleReplyBTN = document.querySelector(`.toggle-repliesBTN-${reply2.entryID}`);
            
                        // if(reply2.replyCount == 0) {
                        //     toggleReplyBTN.style.display = "none";
                        // }
                    }

                }
            }

            let toggleReplyBTN = document.querySelector(`.toggle-repliesBTN-${entry.entryID}`);

            if(entry.replyCount == 0) {
                toggleReplyBTN.style.display = "none";
            }

        });

        showRepliesBTNS = document.querySelectorAll('.toggle-replies-btn')
        showRepliesBTNS.forEach((btn) => {
            btn.addEventListener('click', this.toggleReplies);
        });

        likeEntryBTNs = document.querySelectorAll('.like-entry-btn');
        likeEntryBTNs.forEach((btn) => {
            btn.addEventListener('click', this.likeEntry);
        });

            if(this.topics[this.activeTopic].entryCount == 0) {
                topicEntriesArea.innerHTML = `<div class="empty-text">Henüz "${this.topics[this.activeTopic].title}" basligi icin bir seyler yazilmamis.</div>`
            }

        // init container footer
        if(!document.querySelector('.publish-entry-area')) {

            let textarea = document.createElement('div');
            textarea.className = "publish-entry-area";

            textarea.innerHTML = `
                <textarea placeholder = '"${this.topics[this.activeTopic].title}" hakkında ne söylemek istersiniz?' class="publish-entry-textarea"></textarea>

                <div class="publish-entry-btn" data-publishingtopic = '${this.activeTopic}'>
                    <i class="fa-regular fa-paper-plane"></i>
                </div>
            `;

            topicEntriesArea.parentElement.appendChild(textarea);

            publishEntryTextarea = document.querySelector('.publish-entry-textarea');
            publishEntryBTN = document.querySelector('.publish-entry-btn');
            cevaplaBTNS = document.querySelectorAll('.entry-reply-btn');

            cevaplaBTNS.forEach((btn) => {
                btn.addEventListener('click', this.cevapla);
            });

            publishEntryBTN.addEventListener('click', this.publishEntry);

        }

        localStorage.setItem('topics', JSON.stringify(this.topics));

        createTopicBtn.addEventListener('click', () => {
            topicModal.style.display = "flex";
        });
    }

    toggleReplies = (e) => {
        let toggledEntryID = e.currentTarget.dataset.toggledentryid;
        let entrysRepliesArea = document.querySelector(`.replies-${toggledEntryID}`);

        let text = e.target.textContent.split(' ');

        if(entrysRepliesArea.dataset.status == "active") {
            entrysRepliesArea.setAttribute('data-status', "hidden");
            entrysRepliesArea.classList.add('hidden');
            text[1] = 'goster';

            let newText = text.join(' ');
            e.target.textContent = newText;

            entrysRepliesArea.style.display = "none";
        } else if (entrysRepliesArea.dataset.status == "hidden") {
            entrysRepliesArea.setAttribute('data-status', "active");
            entrysRepliesArea.classList.remove('hidden');

            text[1] = 'gizle';

            let newText = text.join(' ');
            e.target.textContent = newText;

            entrysRepliesArea.style.display = "flex";
        }
    }

    changeTopic = (e) => {
        if (!e.currentTarget.classList.contains('create-topic-btn')) {
            this.isHomepage = false;

            navbar.addEventListener('mouseleave', () => {
                hoverDIV.style.display = "flex";
            })

            if(isMobile) {
                navbar.style.display = "none";
                container.style.display = "block";
                topicTitleDIV.style.display = "flex";

                topbartopicItems[0].classList.remove('active-top-bar');
            }

            this.activeTopic = e.currentTarget.dataset.topicindex;
            activeTopic = this.activeTopic;

            navbarList.innerHTML = `
                <div class="navbar-hover-effect"></div>
            `;

            hoverDIV = document.querySelector('.navbar-hover-effect');
            
            get(ref(db, "App/Topics")).then((snapshot)=> {
                this.topics = snapshot.val();
            }).catch((err) => {
                console.log(err);
            })

            localStorage.setItem('currentTopic', this.activeTopic);

            topicEntriesArea.innerHTML = ``;
            this.init();

            publishEntryTextarea.placeholder = `"${this.topics[this.activeTopic].title}" hakkinda ne soylemek istersiniz?`;

            deleteEntryBtns = document.querySelectorAll('.delete-entry-btn');

            deleteEntryBtns.forEach((btn) => {
                btn.addEventListener('click', this.deleteEntry);
            });

            if (this.topics[this.activeTopic].entryCount == 0) {
                topicEntriesArea.innerHTML = `<div class="empty-text">Henüz "${this.topics[this.activeTopic].title}" basligi icin bir seyler yazilmamis.</div>`;
            }

            let navbarItems = document.querySelectorAll('.nl-item');
            navbarItems.forEach((navbarItem) => {
                if(navbarItem.dataset.topicindex == activeTopic) {
                    let offsetTop = navbarItem.offsetTop;
                    let height = navbarItem.offsetHeight;

                    hoverDIV.style.height = `${height}px`;
                    hoverDIV.style.top = `${offsetTop}px`;
                }
            });

            cevaplaBTNS = document.querySelectorAll('.entry-reply-btn');

            cevaplaBTNS.forEach((cevaplaBTN) => {
                cevaplaBTN.addEventListener('click', this.cevapla);
            });
        }
    };

    publishEntry = () => {
        if(this.hasLoggedIn) {

            let d = new Date();

            let day = addExtraZero(d.getDate());
            let month = d.getMonth();
            let year = d.getFullYear();

            let h = addExtraZero(d.getHours());
            let m = addExtraZero(d.getMinutes());

            let dateText = `${day} ${this.months[month]} ${year}`;
            let timeText = `${h}.${m}`;

            let value = publishEntryTextarea.value;

            if(value != "") {

                let entryID = this.lastEntryID + 1;

                this.lastEntryID = this.lastEntryID += 1;
                // publish to array
                let entry = {
                    username: this.username,
                    userDegree: this.degree,
                    publishDate: dateText,
                    publishTime: timeText,
                    text: value,
                    replyCount: 0,
                    entryID: entryID,
                    replies: [],
                };

                if(this.topics[this.activeTopic].entryCount == 0) {
                    topicEntriesArea.innerHTML = "";
                }

                if(!this.topics[this.activeTopic].entries) {
                    this.topics[this.activeTopic].entries = [];
                }

                this.topics[this.activeTopic].entries.push(entry);
                this.topics[this.activeTopic].entryCount += 1;

                localStorage.setItem('topics', JSON.stringify(this.topics));
                localStorage.setItem('lastEntryID', this.lastEntryID);
                
                set(ref(db, "App/Topics"), this.topics)
                .then(() => {
                    alert('Data Inserted successfully');
                }).catch((error) => {
                    alert(error);
                });

                publishEntryTextarea.value = "";

                // publish to document
                let entryDIV = document.createElement('div');
                entryDIV.className = "topic-entry";
                entryDIV.setAttribute('data-topic', this.activeTopic);
                entryDIV.setAttribute('data-entryid', entry.entryID);

                entryDIV.innerHTML = `
                    <div class="delete-entry-btn" style="display: ${this.canDeleteEntry(entry.username, this.username)}"><i class="fa-solid fa-trash"></i></div>
                    <div class="entry-top entry-${entry.entryID}">
                        <div class="entry-pp"><i class="fa-regular fa-user"></i></div>

                        <div class="entry-text">${entry.text}</div>
                    </div>

                    <div class="entry-bottom">
                        <div class="entry-reply-btn">cevapla</div>
                        <div style="display: none;" class="toggle-replies-btn toggle-repliesBTN-${entry.entryID}" data-toggledEntryID = '${entry.entryID}'>cevaplari goster (${entry.replyCount})</div>

                        <div class="entry-bottom-right">
                            <div class="entry-username">${entry.username} <span class="user-degree">(${entry.userDegree})</span></div>

                            <div class="entry-date">${entry.publishTime} - ${entry.publishDate}</div>
                        </div>
                    </div>

                    <div class="entry-replies hidden replies-${entry.entryID}" data-status = "hidden"></div>
                `;

                let navbarDIV;

                let topicDIVS = document.querySelectorAll('.nl-item');
                
                topicDIVS.forEach((topicDIV) => {
                    if(topicDIV.dataset.topicindex == this.activeTopic) {
                        navbarDIV = topicDIV;
                    }
                });

                // update navbar entry count 
                navbarDIV.querySelector('.nl-item-entryCount').textContent = this.topics[this.activeTopic].entryCount;

                topicEntriesArea.appendChild(entryDIV);

                // this.changeTopic({currentTarget: {dataset: {topicindex: this.activeTopic}}});

            }

            cevaplaBTNS = document.querySelectorAll('.entry-reply-btn');

            cevaplaBTNS.forEach((cevaplaBTN) => {
                cevaplaBTN.addEventListener('click', this.cevapla);
            });

            deleteEntryBtns = document.querySelectorAll('.delete-entry-btn');

            deleteEntryBtns.forEach((deleteBTN) => {
                deleteBTN.addEventListener('click', this.deleteEntry);
            })

        } else {
            alert("please log in")
        }
    }

    cevapla = (e) => {
        if(this.hasLoggedIn) {
            let answeringEntryDIV = e.currentTarget.parentElement.parentElement;
            let topic = answeringEntryDIV.dataset.topic;
            let entryID = answeringEntryDIV.dataset.entryid;
            let isr1 = answeringEntryDIV.dataset.isr1;
            let isr2 = answeringEntryDIV.dataset.isr2;
            let r1EntryID = answeringEntryDIV.dataset.r1entryid;
            let r1RepliedEntryId = answeringEntryDIV.dataset.r1repliedentryid;

            let answeringEntryObj;

            if(!isr1 && !isr2) {
                answeringEntryObj = this.topics[topic].entries.filter((x) => {
                    return x.entryID == entryID;
                })[0];
            } else if (isr1 && !isr2) {
                answeringEntryObj = this.topics[topic].entries.filter((i) => {
                    return i.entryID == r1RepliedEntryId;
                })[0].replies.filter((x) => {
                    return x.entryID == entryID
                })[0];

            } else if (!isr1 && isr2) {
                let r1AnsweringObj = this.topics[topic].entries[r1RepliedEntryId].replies.filter((x) => {
                    return x.entryID == r1EntryID;
                });

                answeringEntryObj = r1AnsweringObj[0].replies.filter((i) => {
                    return i.entryID == entryID
                })[0];

            }

            let replyTo = answeringEntryObj.entryID;

            replyModal.style.display = "flex";
            this.isReplyModalOpen = true;

            rmTopicTitleDIV.textContent = `#${this.topics[this.activeTopic].title}`;
            rmAnsweringEntryTextDIV.textContent = `${answeringEntryObj.text}`;
            rmAnsweringEntryDateDIV.textContent = `${answeringEntryObj.publishTime} - ${answeringEntryObj.publishDate}`;
            rmAnsweringEntryUsernameDIV.textContent = `${answeringEntryObj.username}`

            if(rmPublishAnswerBTN.value != "") {
                rmPublishAnswerBTN.addEventListener('click', () => {
                    let text = rmAnswerTextarea.value;

                    let d = new Date();

                    let day = addExtraZero(d.getDate());
                    let month = d.getMonth();
                    let year = d.getFullYear();

                    let h = addExtraZero(d.getHours());
                    let m = addExtraZero(d.getMinutes());

                    let dateText = `${day} ${this.months[month]} ${year}`;
                    let timeText = `${h}.${m}`;

                    let newEntryID = this.lastEntryID + 1;
                    this.lastEntryID += 1;
                    answeringEntryObj.replyCount += 1;

                    if(!answeringEntryObj.replies) {
                        answeringEntryDIV.replies = [];
                    }

                    this.topics[this.activeTopic].entryCount += 1;

                    let entry = {
                        username: this.username,
                        userDegree: this.degree,
                        publishDate: dateText,
                        publishTime: timeText,
                        text: text,
                        replyTo: replyTo,
                        replyCount: 0,
                        entryID: newEntryID,
                        replies: [],
                    }

                    answeringEntryObj.replies.push(entry);

                    this.isReplyModalOpen = false;
                    replyModal.style.display = "none";

                    localStorage.setItem('topics', JSON.stringify(this.topics));

                    set(ref(db, "App/Topics"), this.topics).then(() => {
                        alert("Reply Successfully Published");
                    }).catch((err) => {
                        console.log(err);
                    })

                    localStorage.setItem('lastEntryID', this.lastEntryID);

                    location.reload();
                });
            }
        } else {
            alert("please log in");
        }

    }

    likeEntry = (e) => {
    }

    createNewTopic = (e) => {
        if(this.hasLoggedIn) {
            let title = publishingTopicTitleInput.value;

            let d = new Date();

            let createDate = `${d.getDate()} ${this.months[d.getMonth()]} ${d.getFullYear()}`;

            let topic = {
                title: title,
                entryCount: 0,
                createDate: createDate,
                createTime: `${addExtraZero(d.getHours())}.${addExtraZero(d.getMinutes())}`,
                createdUsername: this.username,
                entries: [],
                status: "waiting",
            };

            this.topics.push(topic);

            // this.activeTopic = this.topics.length - 1;

            localStorage.setItem('topics', JSON.stringify(this.topics));

            set(ref(db, "App/Topics"), this.topics)
            .then(() => {
            }).catch((error) => {
                console(error);
            });

            alert("Waiting for permission");

            topicModal.style.display = "none";

            // location.reload();
        } else {
            alert('please log in');
        }
    }

    changeSearchPlaceholder = () => {
        let randomIndex = Math.floor(Math.random() * this.searchPlaceholders.length);

        let randomPlaceholder = this.searchPlaceholders[randomIndex];

        searchArea.placeholder = randomPlaceholder;
    }

    canDeleteEntry = (entryOwner, user) => {
        return entryOwner == user || this.isAdmin ? "flex" : "none";
    }

    deleteEntry = (e) => {
        let topic = this.topics[this.activeTopic];
        let entryID = e.currentTarget.parentElement.dataset.entryid;
        let deletingEntryDIV= e.currentTarget.parentElement;
        let isr1 = deletingEntryDIV.dataset.isr1;
        let isr2 = deletingEntryDIV.dataset.isr2;

        if(!isr1 && !isr2) {
            topic.entries.map((entry, index) => {
                if(entry.entryID == entryID) {
                    // deletingEntry = entry;
                    topic.entries.splice(index, 1);
                    topic.entryCount -= entry.replyCount + 1;
                    topicEntriesArea.removeChild(e.currentTarget.parentElement);
                }

            });
        } else if(isr1) {
            topic.entries.map((entry) => {
                if(entry.entryID == deletingEntryDIV.dataset.r1repliedentryid) {
                    entry.replies.map((reply,index) => {
                        if(reply.entryID == entryID) {
                            entry.replies.splice(index, 1);
                            entry.replyCount -= reply.replyCount + 1;
                            topic.entryCount -= reply.replyCount + 1;
                            deletingEntryDIV.parentElement.removeChild(deletingEntryDIV);
                        }
                    })
                }
            })
        } else if (isr2) {
            topic.entries.map((entry) => {
                entry.replies.map((reply) => {
                    if(!reply.replies) {
                        reply.replies = [];
                    }
                    
                    reply.replies.map((reply2, index) => {
                        if(reply2.entryID == entryID) {
                            reply.replies.splice(index, 1);
                            reply.replyCount -= 1;
                            topic.entryCount -= 1;
                            deletingEntryDIV.parentElement.removeChild(deletingEntryDIV);
                        }
                    });
                })
            })
        }

        let navbarDIV;

        let topicDIVS = document.querySelectorAll('.nl-item');
        
        topicDIVS.forEach((topicDIV) => {
            if(topicDIV.dataset.topicindex == this.activeTopic) {
                navbarDIV = topicDIV;
            }
        });

        // update navbar entry count 
        navbarDIV.querySelector('.nl-item-entryCount').textContent = topic.entryCount;

        if(topic.entryCount == 0) {
            navbarList.removeChild(navbarDIV);

            this.topics.splice(this.activeTopic, 1);
        }

        localStorage.setItem('topics', JSON.stringify(this.topics));

        set(ref(db, "App/Topics"), this.topics)
        .then(() => {
            alert("data removed successfully");
        }).catch((error) => {
            alert(error);
        });

        setTimeout(() => {
            // location.reload();
        }, 1000);
    }

    showTopics = () => {
        topicTitleDIV.style.display = "none";
        container.style.display = "none";
        navbar.style.display = "flex";

        topbartopicItems[0].classList.add('active-top-bar');
    }

    initHomepage = () => {
        let navbarItems = document.querySelectorAll('.nl-item');
        hoverDIV.style.display = "none";

        navbarItems.forEach((nlItem) => {
            nlItem.style.color = "#000";
        });

        if(this.isHomepage) {
            navbar.addEventListener('mouseleave', () => {
                hoverDIV.style.display = "none";
            });
        }

        navbar.addEventListener('mouseenter', (e) => {
            hoverDIV.style.display = "flex";
        });

        let publishEntryArea = document.querySelector('.publish-entry-area');
        publishEntryArea.style.display = "none";

        let randomTopics = [];

        let activeTopics = this.topics.filter((topic) => {
            return topic.status == "active";
        });

        for(let x = 0; x < 4; x++) {
            let randomNumber = Math.floor(Math.random() * activeTopics.length);

            if(randomTopics.indexOf(activeTopics[randomNumber]) == -1) {
                randomTopics.push(activeTopics[randomNumber]);
            } else {
                randomNumber = Math.floor(Math.random() * activeTopics.length);
                if(randomTopics.indexOf(activeTopics[randomNumber]) == -1) {
                    randomTopics.push(activeTopics[randomNumber]);
                } else {
                    randomNumber = Math.floor(Math.random() * activeTopics.length);
                    if(randomTopics.indexOf(activeTopics[randomNumber]) == -1) {
                        randomTopics.push(activeTopics[randomNumber]);
                    }
                }
            }
        }

        randomTopics.map((topic) => {
            let showingEntry = topic.entries[topic.entries.length - 1];

            let containerDIV = document.createElement('div');
            containerDIV.className = "container";

            containerDIV.innerHTML = `
                <div class="topic-title">${topic.title}</div>

                <div class="topic-entry" data-topic="-" data-entryid="${showingEntry.entryID}">
                <div class="delete-entry-btn" style="display: flex"><i class="fa-solid fa-trash"></i></div>
                <div class="entry-top entry-${showingEntry.entryID}">
                    <div class="entry-pp"><i class="fa-regular fa-user"></i></div>

                    <div class="entry-text">${showingEntry.text}</div>
                </div>

                <div class="entry-bottom">
                    <div class="entry-reply-btn">cevapla</div>
                    <div class="toggle-replies-btn toggle-repliesBTN-${showingEntry.entryID}" data-toggledentryid="${showingEntry.entryID}" style="display: none;">cevaplari goster (${showingEntry.replyCount})</div>

                    <div class="entry-bottom-right">
                        <div class="entry-like-btn"><i class="fa-regular fa-heart"></i></div>
                        <div class="entry-username">erdemyilmaz <span class="user-degree">(UNI)</span></div>

                        <div class="entry-date">${showingEntry.publishTime} - ${showingEntry.publishDate}</div>
                    </div>
                </div>

                <div class="entry-replies hidden replies-${showingEntry.entryID}" data-status="hidden"></div>
            </div> 
            `;
        });
    }
}

export const app = new App();

if(localStorage.getItem('lastEntryID')) {
    app.lastEntryID = parseInt(localStorage.getItem('lastEntryID'));
}

if(localStorage.getItem('currentTopic')) {
    app.activeTopic = localStorage.getItem('currentTopic');
} else {
    app.activeTopic = 3;
}

// get topics from database
get(child(ref(db), "App/Topics"))
.then((snapshot) => {
    app.topics = snapshot.val();
    
    app.topics.forEach((topic) => {
        if(!topic.entries) {
            topic.entries = [];
        }

        if(!topic.status) {
            topic.status = "active";
        }

        if(topic.status == "active") {
            app.searchPlaceholders.push(topic.title);

            app.changeSearchPlaceholder();
        }
    });

    localStorage.setItem('topics', JSON.stringify(app.topics));


    app.init();
}).catch((error) => {
    console.log(error);
});

setTimeout(() => {

    deleteEntryBtns = document.querySelectorAll('.delete-entry-btn');
    activeTopic = app.activeTopic;

    // logo.addEventListener('click', app.initHomepage);

    deleteEntryBtns.forEach((deleteBtn) => {
        deleteBtn.addEventListener('click', app.deleteEntry);
    })
    
    createTopicBtn.addEventListener('click', () => {
        if(app.hasLoggedIn) {
            topicModal.style.display = "flex";
        } else {
            alert("please log in");
            topicModal.style.display = "none";
        }
    });

    document.addEventListener('click', (e) => {
        if(e.target.classList.contains('reply-modal')) {
            app.isReplyModalOpen = false;
            replyModal.style.display = "none";
        } else if (e.target.classList.contains('create-topic-modal')) {
            topicModal.style.display = "none";
        }
    });

    closeRMBTN.addEventListener('click', () => {
            app.isReplyModalOpen = false;
            replyModal.style.display = "none";
    });

    closeTopicModalBTN.addEventListener('click', () => {
        topicModal.style.display = "none";
    })

    publishTopicBTN.addEventListener('click', app.createNewTopic);

}, 1000);

setInterval(app.changeSearchPlaceholder, 60000);
// app.changeSearchPlaceholder();

let isMobile = false;

let pageWidth = document.body.offsetWidth;

if(pageWidth < 1000) {
    isMobile = true;
}

if(isMobile) {
    topbartopicItems.forEach((tbItem, index) => {
        if(index == 1 || index == 2 || index == 3 || index == 5 || index == 8 || index == 9) {
            tbItem.style.display = "none";
        }

        if(index == 0) {
            tbItem.addEventListener('click', app.showTopics);
            tbItem.classList.remove('active-top-bar');
        }
    });
}
