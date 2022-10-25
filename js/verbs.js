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
        verb: 'Avoid',
        verbo: 'evitar',
        sentence: 'She took a detour to avoid the heavy traffic',
        oracion: 'Tomó un desvío para evitar el tráfico pesado'
},
{
        verb: 'Waste',
        verbo: 'desperdiciar',
        sentence: 'Dont waste your money.',
        oracion: 'No desperdicies tu dinero.'
},
{
        verb: 'Lay',
        verbo: 'poner',
        sentence: ' I dont like to lay my purse on the floor.',
        oracion: 'No me gusta dejar mi bolso en el suelo.'
},
{
        word: 'Become',
        palabra: 'convertirse en / convertirse en',
        sentence: 'Mary wants to become a teacher.',
        oracion: 'María quiere ser profesora.'
},
{
        word: 'halt',
        palabra: 'detener',
        sentence: 'The project had to be halted due to lack of funds.',
        oracion: 'El proyecto tuvo que detenerse por falta de fondos.'
},
{
        word: 'stood',
        palabra: 'puso',
        sentence: 'He stood on the edge of the cliff.',
        oracion: 'Se puso al borde del acantilado.'
},
{
        word: 'rest',
        palabra: 'descansar',
        sentence: 'His head was resting on her shoulder.',
        oracion: 'Su cabeza estaba apoyada en su hombro.'
},
{
        word: 'might',
        palabra: 'puede',
        sentence: 'I might see you tomorrow.',
        oracion: 'Puede que te vea mañana.'
},
{
        word: 'thought',
        palabra: 'pensamiento',
        sentence: 'I thought we were going to go somewhere.',
        oracion: 'Pensé que íbamos a ir a algún sitio.'
},
{
        word: 'filled',
        palabra: 'rellenado',
        sentence: 'He filled the bucket with water',
        oracion: 'Llenó el cubo de agua'
},
{
        word: 'matter',
        palabra: 'asunto / importancia ',
        sentence: 'No matter how much she eats, she never gains weight.  I dont think he has anything to do with the matter.',
        oracion: 'No importa cuánto coma, nunca gana peso. No creo que tenga nada que ver con el asunto. '
},
{

}

];


});
