import { injectHmtl } from './modalHtml.js';

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

const modal = document.querySelector("#modal");
const openModalHTML = document.querySelector("#openModalHTML");
const openModalCSS = document.querySelector("#openModalCSS");
const openModalJS = document.querySelector("#openModalJS");
const openModalOTHER = document.querySelector("#openModalOTHER");
const closeModalBtn = document.querySelector("#closeModal");

const transparencia = [
    '.code',
    '.text',
    '.content',
    '.modal-footer'
]

let openedMenu = false;
let openedModal = null;

if(hamburger){
    hamburger.addEventListener('click', ()=>{
        openedMenu = !openedMenu;
        if(openedModal){
            closeModal()
        }
       //Links
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });
    
        //Animation
        hamburger.classList.toggle("toggle");
    });
}

if(modal){
    modal.addEventListener('click', (e)=>{
        checkClose(e);
    });
}

if(openModalHTML){
    openModalHTML.addEventListener('click', ()=>{
        if(openedModal){
            closeModal();
            setTimeout(() => {
                checkModal('HTML');
            }, 700);
        } else {
            checkModal('HTML');
        }
    });
}

if(openModalCSS){
    openModalCSS.addEventListener('click', ()=>{
        if(openedModal){
            closeModal();
            setTimeout(() => {
                checkModal('CSS');
            }, 700);
        } else {
            checkModal('CSS');
        }
    });
}

if(openModalJS){
    openModalJS.addEventListener('click', ()=>{
        if(openedModal){
            closeModal();
            setTimeout(() => {
                checkModal('JS');
            }, 700);
        } else {
            checkModal('JS');
        }
    });
}

if(openModalOTHER){
    openModalOTHER.addEventListener('click', ()=>{
        if(openedModal){
            closeModal();
            setTimeout(() => {
                checkModal('OTHER');
            }, 700);
        } else {
            checkModal('OTHER');
        }
    });
}

if(closeModalBtn){
    closeModalBtn.addEventListener('click', ()=>{
        closeModal();
    });
}

export function checkModal(id){
    if(openedMenu){
        hamburger.click();
    }

    if(openedModal){
        if(openedModal === id){
            closeModal();
        } else {
            closeModal();
            setTimeout(() => {
                openModal(id)
            }, 300);
        }
    } else {
        openModal(id)
    }

}

function openModal(mn) {
    openedModal = mn;
    let modal = document.getElementById('modal');
    let modalFooter = modal.querySelector('.modal-footer');

    if (typeof modal == 'undefined' || modal === null)
        return;
        
    modalFooter.classList.remove('transparente'); 
    modal.classList.add('modal-display_open'); 
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        modal.classList.add('modal_open'); 
        modal.classList.remove('modal_closed');
        injectHmtl(openedModal, modal);
    }, 10);
}

function closeModal() {
    
    let modal = document.getElementById('modal');

    for (var item of transparencia){
        let items = modal.querySelectorAll(item);
        for (var child of items){
            child.classList.add('transparente');
        }   
    } 

    if (typeof modal == 'undefined' || modal === null)
        return;

    const modalBody = modal.querySelector('#modal-body');

    for (var child of modalBody.childNodes){
        child.remove();
    }   
    
    setTimeout(() => {
       modal.classList.remove('modal-display_open'); 
        openedModal = null;
    }, 400);
    modal.classList.add('modal_closed');
    modal.classList.remove('modal_open'); 
    document.body.style.overflow = 'auto';
    modal.querySelector('.modal-header-title').innerHTML = "Conteúdo de apoio NAME";
}

function checkClose(e) {
    if(e.srcElement.id === 'modal'){
        closeModal();
    } 
 }

