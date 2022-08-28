const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ee63d43bc6mshcb966097e9e34b6p1ea795jsnb8f00594d042',
		'X-RapidAPI-Host': 'random-word-generator2.p.rapidapi.com'
	}
};

fetch('https://random-word-generator2.p.rapidapi.com/word.php?generator=words&api_key=5w36eV0FZJu9QIPlpR18', options)
	.then(response => response.json())
	.then(response => console.log(response))
    .then(data => mostrarData(data))
	.catch(err => console.error(err));

    const mostrarData = (data) => {
        console.log(data)
        let body = ''
        for (let i = 0; i<data.lenght; i++){
            body += `<h1>${data[i].word}</h1>`
        }
    }