var opened = false;
var lastTime = Date.now();
const interval = 2000;
const threshold = 3000;
var sendMessage = false;
setInterval(() => {

    let delta = Date.now() - lastTime;

    if (delta > interval + threshold) {
        opened = true;
    }

    lastTime = Date.now();

    if (!opened) {
        if(!sendMessage){
            console.clear();
            console.log('Olá meu jovem Padawan,');
            setTimeout(() => {
                console.log('bem vindo lado negro da força!');
                setTimeout(() => {
                    console.log('Temos cookies 🍪🍪');
                    //getPhrase();
                }, 1000);
            }, 1000);

            sendMessage = true;
        }
        }
        

}, interval)

function getPhrase() {
    let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://pensador-api.vercel.app/?term=Star+Wars&max=1000");
    
        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            randomPhrase(JSON.parse(xhr.responseText).frases);
        }};
    
        xhr.send();
}

function randomPhrase(phrase){
    const APIfrase = phrase.random();
    console.log('Ja dizia', APIfrase.autor.replaceAll('\n', ''));
    console.log(APIfrase.texto);
}

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}
