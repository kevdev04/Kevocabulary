//elementos del DOM


const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'ee63d43bc6mshcb966097e9e34b6p1ea795jsnb8f00594d042',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://text-translator2.p.rapidapi.com/translate', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));