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
index = index === words.length - 1 ?
        0 :
        index + 1;
}


function reload() {

        const conjunto = words.map((verb) => verb.word);
        const conjunto2 = words.map((verb) => verb.palabra);
        const conjunto3 = words.map((verb) => verb.sentence);
        const conjunto4 = words.map((verb) => verb.oracion);

        verby.textContent = conjunto[index]
        verboHTML.textContent = conjunto2[index]
        sentence.textContent = conjunto3[index]
        oracion.textContent = conjunto4[index]

        updateIndex();
}

const words = [

        {
                word: 'kind',
                palabra: 'amable',
                sentence: 'Tom is very kind',
                oracion: 'Tom es muy amable'
        },
        {
                word: 'surface',
                palabra: 'superficie',
                sentence: 'Birds skimmed the surface of the pond.',
                oracion: 'Los pájaros rozaban la superficie del estanque.'
        },
        {
                word: 'measure',
                palabra: 'medida',
                sentence: 'We want to measure your blood pressure.',
                oracion: 'Queremos medir su presión arterial.'
        },
        {
                word: 'whole',
                palabra: 'todo / toda',
                sentence: 'We saw the whole family at the reunion.',
                oracion: 'Vimos a toda la familia en la reunión.'
        },
        {
                word: 'Toward',
                palabra: 'Hacia',
                sentence: 'The river runs toward the sea.',
                oracion: 'El río corre hacia el mar.'
        },
        {
                word: 'upon',
                palabra: 'Sobre / En',
                sentence: 'He carefully placed the vase upon the table. ',
                oracion: 'Colocó cuidadosamente el jarrón sobre la mesa.'
        },
        {
                word: 'wave',
                palabra: 'ola / onda',
                sentence: 'Flags were waving in the breeze.',
                oracion: 'Las banderas ondeaban en la brisa.'
        },
        {
                word: 'though',
                palabra: 'aunque',
                sentence: 'Though I do not usually drink coffee',
                oracion: 'Aunque no suelo tomar café'
        },
        {
                word: 'shape',
                palabra: 'forma',
                sentence: 'The athlete is in perfect shape.',
                oracion: 'El atleta está en perfecta forma.'
        },
        {
                word: 'noun',
                palabra: 'sustantivo',
                sentence: 'person: man, woman, teacher, John, Mary.',
                oracion: 'place: home, office, town, countryside, America.'
        },
        
        


];


});
