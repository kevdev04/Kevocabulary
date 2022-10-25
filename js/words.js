document.addEventListener('DOMContentLoaded', function () {


// Aqui andan las variables
const verby = document.querySelector('#word');
const verboHTML = document.querySelector('#palabra');
const sentence = document.querySelector('#sen')
const oracion = document.querySelector('#oracion')
const btnReload = document.querySelector('#button');


btnReload.addEventListener('click', reload);

let index = 0;

function updateIndex() {
index = index === words.length - 1 ?
        0 :
        index + 1;
}


function reload() {

        const conjunto = words.map((verb) => verb.word);
        const conjunto2 = words.map((verb) => verb.palabra);
        const conjunto3 = words.map((verb) => verb.sentence);
        const conjunto4 = words.map((verb) => verb.oracion);

        verby.textContent = conjunto[index]
        verboHTML.textContent = conjunto2[index]
        sentence.textContent = conjunto3[index]
        oracion.textContent = conjunto4[index]

        updateIndex();
}

const words = [

        {
                word: 'kind',
                palabra: 'amable',
                sentence: 'Tom is very kind',
                oracion: 'Tom es muy amable'
        },
        {
                word: 'thought',
                palabra: 'pensamiento',
                sentence: 'I thought we were going to go somewhere.',
                oracion: 'Pensé que íbamos a ir a algún sitio.'
        },
        {
                word: 'might',
                palabra: 'puede',
                sentence: 'I might see you tomorrow.',
                oracion: 'Puede que te vea mañana.'
        }

];


});
