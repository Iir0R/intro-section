const menuBtn = document.querySelector("#nav-btn")
const navigation = document.querySelector("#navigation")
const dark = document.querySelector("#dark")
const body = document.querySelector("#body")

menuBtn.addEventListener('click', () => {
    const open = menuBtn.getAttribute('aria-expanded') === "true";
    open ? closeMenu() : openMenu()
})

function openMenu() {
    menuBtn.setAttribute('aria-expanded', "true");
    navigation.setAttribute('data-state', "open");
    dark.setAttribute('data-state', "on");
    body.style.overflow = 'hidden';
}

function closeMenu() {
    menuBtn.setAttribute('aria-expanded', "false");
    navigation.setAttribute('data-state', "closed");
    dark.setAttribute('data-state', "of");
    body.style.overflow = 'scroll';
}


const featBtn = document.querySelector("#feat-btn")
const feat = document.querySelector("#features")

featBtn.addEventListener('click', () => {
    const featOpen = featBtn.getAttribute('aria-expanded') === "true";
    featOpen ? closeFeat() : openFeat()
})

function openFeat() {
    featBtn.setAttribute('aria-expanded', "true");
    feat.setAttribute('data-state', "open");
}

function closeFeat() {
    featBtn.setAttribute('aria-expanded', "false");
    feat.setAttribute('data-state', "closed");
}


const comBtn = document.querySelector("#com-btn")
const com = document.querySelector("#company")

comBtn.addEventListener('click', () => {
    const comOpen = comBtn.getAttribute('aria-expanded') === "true";
    comOpen ? closeCom() : openCom()
})

function openCom() {
    comBtn.setAttribute('aria-expanded', "true");
    com.setAttribute('data-state', "open");
}

function closeCom() {
    comBtn.setAttribute('aria-expanded', "false");
    com.setAttribute('data-state', "closed");
}