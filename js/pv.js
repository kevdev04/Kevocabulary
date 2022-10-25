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

        {
                word: 'Catch out',
                palabra: 'Atrapado',
                sentence: 'One day he caught her out when he found some letters shed written.',
                oracion: 'Un día la sorprendió cuando encontró unas cartas que ella había escrito.'
        },
        {
                word: 'Catch on',
                palabra: 'Póngase al día',
                sentence: 'This game will catch on among young people.',
                oracion: 'Este juego se pondrá de moda entre los jóvenes.'
        },
        {
                word: 'Catch up',
                palabra: 'Alcanzar',
                sentence: 'John caught up with you later.',
                oracion: 'John te alcanzo más tarde.'
        },
        {
                word: 'Clear away',
                palabra: 'Recoger / Despejar',
                sentence: 'You should clear away all your toys before bedtime.',
                oracion: 'Debes recoger todos sus juguetes antes de acostarse.'
        },
        {
                word: 'Clear up',
                palabra: 'Aclarar',
                sentence: ' I think the trouble will clear up in a couple of days.',
                oracion: 'Creo que el problema se aclarará en un par de días.'
        },
        {
                word: 'Check off',
                palabra: 'Marque la casilla',
                sentence: 'Let’s check off the names of the people to be invited.',
                oracion: 'Marquemos los nombres de las personas a las que hay que invitar.'
        },
        {
                word: 'Knock off',
                palabra: '',
                sentence: 'What time will they knock off?',
                oracion: '¿A qué hora van a salir?'
        },
        {
                word: 'Carry over',
                palabra: 'Traspaso',
                sentence: 'The meeting carried over into lunch time.',
                oracion: 'La reunión se prolongó hasta la hora del almuerzo.'
        },
        {
                word: 'Get on',
                palabra: 'subir',
                sentence: 'I think they get on the wrong train.',
                oracion: 'Creo que se suben al tren equivocado.'
        },
        {
                word: 'Drop off',
                palabra: 'dejar',
                sentence: 'Where do you want me to drop you off?',
                oracion: '¿Dónde quieres que te deje?'
        }

];


});
