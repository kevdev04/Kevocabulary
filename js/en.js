document.addEventListener('DOMContentLoaded', function () {


// Aqui andan las variables
const word = document.querySelector('#word');
const palabra = document.querySelector('#palabra');
const btnReload = document.querySelector('#button');


btnReload.addEventListener('click', reload);

function reload (e) {

        let resultado;

        resultado = 'helpme'

        console.table(words);



        word.textContent = resultado;
        palabra.textContent = resultado;
}



const words = [

{
	word: "the",palabra: "El / Los",sentence: "The sun is up",
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
