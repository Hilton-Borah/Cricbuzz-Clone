
/*let container = document.getElementById("ro_container");

let data;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6d8b7919e4mshfc83a22c29e1fcbp19d801jsn3943031b23e9',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};

fetch('https://cricbuzz-cricket.p.rapidapi.com/schedule/v1/international', options)
    
    .then(function (res){
        return res.json();
    })
    .then(function (res){
        
        console.log("res:",res.matchScheduleMap);
        

        appendData(res.matchScheduleMap);
    })
    .catch(function (err){
        console.log("error:",err);
    })

function appendData(data)
{
    container.innerHTML = null;

    data.forEach((el) =>{
        let div = document.createElement("div");

        let p1 = document.createElement("p");
        p1.innerText = el.scheduleAdWrapper.matchScheduleList[0].matchInfo[0].team1.teamName;

        let p2 = document.createElement("p");
        p2.innerText = el.scheduleAdWrapper.matchScheduleList[0].matchInfo[0].team2.teamName;

        
        let p = document.createElement("p");
        p.innerText = el.scheduleAdWrapper.date;

        div.append(p1,p2,p);
        container.append(div)
    });
}*/









/*const option = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9867463a05msh43e5b08d97f3488p1dd403jsn16c7c6af4393',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};

fetch('https://cricbuzz-cricket.p.rapidapi.com/news/v1/index', option)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9867463a05msh43e5b08d97f3488p1dd403jsn16c7c6af4393',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};

fetch('https://cricbuzz-cricket.p.rapidapi.com/photos/v1/index', options1)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


const optionss = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9867463a05msh43e5b08d97f3488p1dd403jsn16c7c6af4393',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};

fetch('https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c231889/i.jpg', optionss)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));*/

/*let news = [
	{
		image: "https://www.cricbuzz.com/a/img/v1/420x235/i1/c241308/vvs-laxman-joins-asia-cup-team.jpg",
		heading: "VVS Laxman joins Asia Cup team in Dubai",
		para: "Laxman will serve as the interim head coach till Dravid clears his Covid tests",
		a1: "Dravid tested positive for COVID-19",
		a2: "Mohammad Hasnain replaces injured Shaheen Afridi for Asia Cup",
		a3: "Pathirana included in Sri Lanka's squad for Asia Cup; Chandimal returns",
		a4: "Bangladesh include Mohammad Naim in Asia Cup squad"

	}
];

news.forEach(function(el){

	let div = document.createElement("div");

	let img = document.createElement("img");
	img.setAttribute("src",el.image);

	let a = document.createElement("a");
	a.

	let heading = document.createElement("h1");
	heading.innerText = el.heading;

	let para = document.createElement("p");
	para.innerText = el.para;

	let a1 = document.createElement("a")
	a1.setAttribute("href",el.a1);

	div.append(img,heading,para,a1);
	document.getElementById("ro_part2").append(div);
})*/
