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
index = index === pv.length - 1 ?
        0 :
        index + 1;
}

  // you don't to define those variables each time you call reload, you can define them once outside the function.


function reload() {

        const conjunto = pv.map((verb) => verb.verb);
        const conjunto2 = pv.map((verb) => verb.verbo);
        const conjunto3 = pv.map((verb) => verb.sentence);
        const conjunto4 = pv.map((verb) => verb.oracion);

        verby.textContent = conjunto[index]
        verboHTML.textContent = conjunto2[index]
        sentence.textContent = conjunto3[index]
        oracion.textContent = conjunto4[index]

        updateIndex();
}




const pv = [



];


});
