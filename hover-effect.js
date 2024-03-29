let mode = 'l';

if(mode == "dark") {
    document.body.classList.add('dark');
}

let hoverDIV = document.querySelector('.navbar-hover-effect');
const navbar = document.querySelector('.navbar');
let topicItems = document.querySelectorAll('.nl-item');

let activeTopic = 0;

if(localStorage.getItem("currentTopic")) {
    activeTopic = localStorage.getItem('currentTopic');
}

function HoverEffect(e) {
    let target = e.currentTarget;
    let offsetTop = target.offsetTop;

    let height = target.offsetHeight;

    hoverDIV.style.height = `${height}px`;
    hoverDIV.style.top = `${offsetTop}px`;
};

if(topicItems) {
    topicItems.forEach((topicItem) => {
        topicItem.addEventListener('mouseenter', HoverEffect);
    });
}

// on leave
if(navbar) {
    navbar.addEventListener('mouseleave', (e) => {
        let navbarItems = document.querySelectorAll('.nl-item');

        navbarItems.forEach((navbarItem) => {
            if(navbarItem.dataset.topicindex == activeTopic) {
                let offsetTop = navbarItem.offsetTop;
                let height = navbarItem.offsetHeight;

                hoverDIV.style.height = `${height}px`;
                hoverDIV.style.top = `${offsetTop}px`;
            }
        })
    });
}

// 
let topbarhoverDIV = document.querySelector('.top-bar-hover');
const topbar = document.querySelector('.top-bar');
let topbartopicItems = document.querySelectorAll('.top-bar-item');

let topbaractiveTopic = 0;

function TopbarHoverEffect(e) {
    let target = e.currentTarget
    let offsetLeft = target.offsetLeft;

    let width = target.offsetWidth;

    if(target.classList.contains('bmc')) {
        target.querySelector('i').style.color = "#634A00";
    } else {
        topbartopicItems[topbartopicItems.length - 1].querySelector('i').style.color = "#000";
    }

    // topbarhoverDIV.style.backgroundColor = "rgba(0,0,0,0.1)";

    topbarhoverDIV.style.width = `${width}px`;
    topbarhoverDIV.style.left = `${offsetLeft}px`;
};

topbartopicItems.forEach((topicItem) => {
    topicItem.addEventListener('mouseenter', (e) => {
        TopbarHoverEffect(e)
    });
});

// on leave
topbar.addEventListener('mouseleave', (e) => {
    TopbarHoverEffect({currentTarget: topbartopicItems[topbaractiveTopic]});
});

// setInterval(() => {
//     HoverEffect({currentTarget: topicItems[activeTopic]});
// }, 1000 / 2)

setTimeout(() => {
    TopbarHoverEffect({currentTarget: topbartopicItems[topbaractiveTopic]});

    let navbarItems = document.querySelectorAll('.nl-item');

    navbarItems.forEach((navbarItem) => {
        if(navbarItem.dataset.topicindex == activeTopic) {
            let offsetTop = navbarItem.offsetTop;
            let height = navbarItem.offsetHeight;

            hoverDIV.style.height = `${height}px`;
            hoverDIV.style.top = `${offsetTop}px`;
        }
    });
}, 1000);

let pageWidth = document.body.offsetWidth;

isMobile = false;

if(pageWidth < 1000) {
    isMobile = true;
}

if(isMobile) {
    topbarhoverDIV.style.display = "none";
    // hoverDIV.style.display = "flex";

    let mobileNavbar = document.querySelector('.mobile-navbar');
    const showMoreBtn = document.querySelector('.show-more-btn');
    const mobileNavbarContainer = document.querySelector('.mobile-navbar-container');

    showMoreBtn.addEventListener('click', () => {
        mobileNavbar.style.display = "flex";
    });

    document.addEventListener('click', (e) => {
        if(e.target.className == "mobile-navbar") {
            mobileNavbarContainer.style.animation = "reverseNavbarAnimation 500ms";

            setTimeout(() => {
                mobileNavbar.style.display = "none";
                mobileNavbarContainer.style.animation = "navbarAnimation 500ms";
            }, 500)
        }
    })
}

let loginDIV = document.querySelector('.login-div');
let profile = document.querySelector('.profile');

if(localStorage.getItem("hasLoggedIn") == "false") {
    loginDIV.style.display = "flex";
    profile.style.display = "none";
} else {
    loginDIV.style.display = "none";
    profile.style.display = "flex";
}