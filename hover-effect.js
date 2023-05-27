let hoverDIV = document.querySelector('.navbar-hover-effect');
const navbar = document.querySelector('.navbar');
let topicItems = document.querySelectorAll('.nl-item');

let activeTopic = 0;

function HoverEffect(e) {
    let target = e.currentTarget
    let offsetTop = target.offsetTop;

    let height = target.offsetHeight;

    hoverDIV.style.height = `${height}px`;
    hoverDIV.style.top = `${offsetTop}px`;
};

topicItems.forEach((topicItem) => {
    topicItem.addEventListener('mouseenter', HoverEffect);
});

// on leave
navbar.addEventListener('mouseleave', (e) => {
    hoverDIV.style.height = `${topicItems[activeTopic].offsetHeight}px`;
    hoverDIV.style.top = `${topicItems[activeTopic].offsetTop}px`;
});

// 
let topbarhoverDIV = document.querySelector('.top-bar-hover');
const topbar = document.querySelector('.top-bar');
let topbartopicItems = document.querySelectorAll('.top-bar-item');

let topbaractiveTopic = 0;

function TopbarHoverEffect(e) {
    let target = e.currentTarget
    let offsetLeft = target.offsetLeft;

    let width = target.offsetWidth;

    topbarhoverDIV.style.width = `${width}px`;
    topbarhoverDIV.style.left = `${offsetLeft}px`;
};

topbartopicItems.forEach((topicItem) => {
    topicItem.addEventListener('mouseenter', (e) => {
        topbarhoverDIV.style.display = "flex";
        TopbarHoverEffect(e)
    });
});

// on leave
topbar.addEventListener('mouseleave', (e) => {
    topbarhoverDIV.style.display = "none";
});