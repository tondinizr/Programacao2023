const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
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

function checkModal(id){
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
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.classList.add('modal-display_open'); 
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        modal.classList.add('modal_open'); 
        modal.classList.remove('modal_closed');
    }, 10);
}

function closeModal() {
    
    let modal = document.getElementById(openedModal);

    if (typeof modal == 'undefined' || modal === null)
        return;
    
    setTimeout(() => {
       modal.classList.remove('modal-display_open'); 
        openedModal = null;
    }, 300);
    modal.classList.add('modal_closed');
    modal.classList.remove('modal_open'); 
    document.body.style.overflow = 'auto';
}

function checkClose(e) {
    const modais = ['modal_HTML', 'modal_CSS', 'modal_JS', 'modal_OTHER'];
    if(modais.includes(e.srcElement.id)){
        closeModal();
    } 
 }

