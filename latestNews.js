
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9867463a05msh43e5b08d97f3488p1dd403jsn16c7c6af4393',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};

fetch('https://cricbuzz-cricket.p.rapidapi.com/news/v1/index', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));