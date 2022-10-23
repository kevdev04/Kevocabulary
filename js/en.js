document.addEventListener('DOMContentLoaded', function () {


// Aqui andan las variables
const wordy = document.querySelector('#word');
const palabraHTML = document.querySelector('#palabra');
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

  // you don't to define those variables each time you call reload, you can define them once outside the function.


function reload() {

        const conjunto = words.map((word) => word.word);
        const conjunto2 = words.map((word) => word.palabra);
        const conjunto3 = words.map((word) => word.sentence);
        const conjunto4 = words.map((word) => word.oracion);

        wordy.textContent = conjunto[index]
        palabraHTML.textContent = conjunto2[index]
        sentence.textContent = conjunto3[index]
        oracion.textContent = conjunto4[index]

        updateIndex();
}




const words = [

{
        word: 'avoid',
        palabra: 'evitar',
        sentence: 'She took a detour to avoid the heavy traffic',
        oracion: 'Tomó un desvío para evitar el tráfico pesado'
},
{
        word: 'waste',
        palabra: 'desperdiciar',
        sentence: 'Dont waste your money.',
        oracion: 'No desperdicies tu dinero.'
},
{
        word: 'lay',
        palabra: 'poner',
        sentence: ' I dont like to lay my purse on the floor.',
        oracion: 'No me gusta dejar mi bolso en el suelo.'
},

];


});
