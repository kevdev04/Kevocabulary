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
index = index === verbs.length - 1 ?
        0 :
        index + 1;
}

  // you don't to define those variables each time you call reload, you can define them once outside the function.


function reload() {

        const conjunto = verbs.map((verb) => verb.verb);
        const conjunto2 = verbs.map((verb) => verb.verbo);
        const conjunto3 = verbs.map((verb) => verb.sentence);
        const conjunto4 = verbs.map((verb) => verb.oracion);

        verby.textContent = conjunto[index]
        verboHTML.textContent = conjunto2[index]
        sentence.textContent = conjunto3[index]
        oracion.textContent = conjunto4[index]

        updateIndex();
}




const verbs = [

{
        verb: 'avoid',
        verbo: 'evitar',
        sentence: 'She took a detour to avoid the heavy traffic',
        oracion: 'Tomó un desvío para evitar el tráfico pesado'
},
{
        verb: 'waste',
        verbo: 'desperdiciar',
        sentence: 'Dont waste your money.',
        oracion: 'No desperdicies tu dinero.'
},
{
        verb: 'lay',
        verbo: 'poner',
        sentence: ' I dont like to lay my purse on the floor.',
        oracion: 'No me gusta dejar mi bolso en el suelo.'
},

];


});
