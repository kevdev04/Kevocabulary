document.addEventListener('DOMContentLoaded', function () {


// Variables
const verby = document.querySelector('#word');
const verboHTML = document.querySelector('#palabra');
const sentence = document.querySelector('#sen');
const oracion = document.querySelector('#oracion');
const btnReload = document.querySelector('#button');
const scrollBttn = document.querySelector('#scrollButton');
let index = 0;


// Event Listeners



btnReload.addEventListener('click', reload);



// Functions

function updateIndex() {
index = index === verbs.length - 1 ?
        0 :
        index + 1;
}


function reload() {

        const conjunto = verbs.map((verb) => verb.word);
        const conjunto2 = verbs.map((verb) => verb.palabra);
        const conjunto3 = verbs.map((verb) => verb.sentence);
        const conjunto4 = verbs.map((verb) => verb.oracion);

        verby.textContent = conjunto[index]
        verboHTML.textContent = conjunto2[index]
        sentence.textContent = conjunto3[index]
        oracion.textContent = conjunto4[index]

        updateIndex();
}

document.querySelector("#btm").addEventListener("click", () => {
        window.scrollTo(0,document.body.scrollHeight);
});

});
