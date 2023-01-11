import { htmlTemplate } from './modals/html.js';
import { cssTemplate } from './modals/css.js';


const HTMLmodal = {
    HTML: {
        titulo: 'HTML',
        content : htmlTemplate
    },
    CSS: {
        titulo: 'CSS',
        content : cssTemplate
    },
    JS: {
        titulo: 'JAVASCRIPT',
        content : '<div><p>JS</p></div>'
    },
    OTHER: {
        titulo: 'OUTROS CONTEÚDOS',
        content : '<div><p>OUTROS CONTEÚDOS</p></div>'
    },
}

export  function injectHmtl(type, elem){
    var modal = HTMLmodal[type];



    var modalTitle = "";
    modalTitle = elem.querySelector('.modal-header-title').innerHTML;
    modalTitle = modalTitle.replace('NAME', modal.titulo);
    elem.querySelector('.modal-header-title').innerHTML = modalTitle;

    const modalBody = elem.querySelector('#modal-body');

    for (var child of modalBody.childNodes){
        child.remove();
    }
    modalBody.insertAdjacentHTML( 'beforeend', modal.content );
}