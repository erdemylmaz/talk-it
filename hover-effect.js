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