const aplicacion = document.querySelector('.first')


const app = [

{
	word: "the",
        palabra: "El / Los",
        sentence: "The sun is up",
        oracion: "El sol ha salido"
},
{
	word: "be",
        palabra: "Ser / Estar",
        sentence: "Don't be sad",
        oracion: "No estes trsite"
},
{
        word: 'as',
        palabra: 'como (adv.)',
        sentence: 'He used me as a guinea pig',
        oracion: 'Me utilizó como conejillo de indias'
},
{
        word: 'will',
        palabra: '(futuro), voluntad',
        sentence: 'Will she come?',
        oracion: '¿Vendrá? (Ella)'
}

];





const h1 = document.createElement('h1')
h1.innerHTML = app.word;

aplicacion.appendChild(h1)