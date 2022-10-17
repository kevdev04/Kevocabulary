document.addEventListener('DOMContentLoaded', function () {


// Aqui andan las variables
const word = document.querySelector('#word');
const palabra = document.querySelector('#palabra');
const btnReload = document.querySelector('#button');


btnReload.addEventListener('click', reload);

function reload (e) {

        let resultado = words.map(e => e.word1);

        let resultado2 = words.map(e => e.palabra1);

        console.log(resultado);



        word.textContent = resultado;
        palabra.textContent = resultado2;
}



const words = [

{
	word1: "the",
        palabra1: "El / Los",sentence: "The sun is up",
        oracion: "El sol ha salido"
},
{
	word2: "be",palabra: "Ser / Estar",sentence: "Don't be sad",
        oracion: "No estes trsite"
},
{
        word3: 'as',palabra: 'como (adv.)',sentence: 'He used me as a guinea pig',
        oracion: 'Me utilizó como conejillo de indias'
},
{
        word4: 'will', palabra: '(futuro), voluntad', sentence: 'Will she come?',
        oracion: '¿Vendrá? (Ella)'
}

];


});
