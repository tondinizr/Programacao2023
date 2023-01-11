import { injectHmtl } from './modalHtml.js';

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const modal = document.getElementById('modal');

const transparencia = [
    '.code',
    '.text',
    '.content',
    '.modal-body',
    '.modal-footer',
]

let openedMenu = false;
let openedModal = null;


function openModal(mn) {
    openedModal = mn;
    let modalBody = modal.querySelector('.modal-body');
    let modalFooter = modal.querySelector('.modal-footer');

    if (typeof modal == 'undefined' || modal === null)
        return;
        
    modalBody.classList.remove('transparente'); 
    modalFooter.classList.remove('transparente'); 
    modal.classList.add('modal-display_open'); 
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        modal.classList.add('modal_open'); 
        modal.classList.remove('modal_closed');
        injectHmtl(openedModal, modal);
        trapFocus(modal);
        modal.querySelector('h3').focus();
    }, 10);
    modal.addEventListener('closeModalEv', closeModal);    
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

function trapFocus(element) {
    var focusableEls = element.querySelectorAll('a:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled]), p.text, div.hamburger');
    var firstFocusableEl = focusableEls[0];  
    var lastFocusableEl = focusableEls[focusableEls.length - 1];
    var KEYCODE_TAB = 9;

    element.addEventListener('keydown', function(e) {
        var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
  
        if (!isTabPressed) { 
          return; 
        }
    
        if ( e.shiftKey ) /* shift + tab */ {
          if (document.activeElement === firstFocusableEl) {
            lastFocusableEl.focus();
              e.preventDefault();
            }
          } else /* tab */ {
          if (document.activeElement === lastFocusableEl) {
            firstFocusableEl.focus();
              e.preventDefault();
            }
          }
      });
}


window.addEventListener('clickHtml', (e)=>{ 
    if(e.detail.id === 'CLOSE'){
        closeModal();
    } else if(e.detail.id === 'MENU'){
        openedMenu = !openedMenu;
        //Links
        if(openedMenu){
            const header = document.querySelector("#header");
            trapFocus(header);
            header.querySelector('a').focus();
        }
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });
    
        //Animation
        hamburger.classList.toggle("toggle");
    } else if(e.detail.id != 'CLOSE' && e.detail.id != 'MENU'){
        if(openedMenu){
            hamburger.click();
        }
        if(openedModal){
            closeModal();
            setTimeout(() => {
                openModal(e.detail.id);
            }, 600);
        } else {
            openModal(e.detail.id);
        }
    }
});

const clickableEls = document.querySelectorAll('.clickable');
if(clickableEls){
    
    clickableEls.forEach(item => {
        item.addEventListener('keydown', function(e) {
            if(e.key === 'Enter'){
                item.click()
            }
        });
    });
}

window.addEventListener('keydown', function(e) {
    if(e.key === 'Escape'){
        if(openModal){
            closeModal();
        }
        if(openedMenu){
            hamburger.click();
        }
    };
});


