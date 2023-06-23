let mode = 'l';

if(mode == "dark") {
    document.body.classList.add('dark');
}

let hoverDIV = document.querySelector('.navbar-hover-effect');
const navbar = document.querySelector('.navbar');
let topicItems = document.querySelectorAll('.nl-item');

let activeTopic = 0;

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
        hoverDIV.style.height = `${topicItems[activeTopic].offsetHeight}px`;
        hoverDIV.style.top = `${topicItems[activeTopic].offsetTop}px`;
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