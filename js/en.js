document.addEventListener('DOMContentLoaded', function () {


// Aqui andan las variables
const wordy = document.querySelector('#word');
const palabraHTML = document.querySelector('#palabra');
const sentence = document.querySelector('#sen')
const oracion = document.querySelector('#oracion')
const btnReload = document.querySelector('#button');


btnReload.addEventListener('click', reload);

function reload () {

        const conjunto = words.map((word) => word.word);
        const conjunto2 = words.map((word) => word.palabra);
        const conjunto3 = words.map((word) => word.sentence);
        const conjunto4 = words.map((word) => word.oracion);

        

        wordy.textContent = conjunto[0]
        palabraHTML.textContent = conjunto2[0]
        sentence.textContent = conjunto3[0]
        oracion.textContent = conjunto4[0]
}
btnReload.addEventListener('click', magia2);
function magia2() {
        if (conjunto[i] === 0) {
                conjunto[i++]
        }
}


const words = [

{
	word: "the",
        palabra: "El / Los",sentence: "The sun is up",
        oracion: "El sol ha salido"
},
{
	word: "be",palabra: "Ser / Estar",sentence: "Don't be sad",
        oracion: "No estes trsite"
},
{
        word: 'as',palabra: 'como (adv.)',sentence: 'He used me as a guinea pig',
        oracion: 'Me utilizó como conejillo de indias'
},
{
        word: 'will', palabra: '(futuro), voluntad', sentence: 'Will she come?',
        oracion: '¿Vendrá? (Ella)'
}

];


});
