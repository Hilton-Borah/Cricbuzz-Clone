
let container = document.getElementById("ro_schedule");

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

        let p1 = document.createElement("span");
        p1.innerText = el.scheduleAdWrapper.matchScheduleList[1].matchInfo[0].team1.teamName;

        let p2 = document.createElement("span");
        p2.innerText = el.scheduleAdWrapper.matchScheduleList[1].matchInfo[0].team2.teamName;

        
        let p = document.createElement("p");
        p.innerText = el.scheduleAdWrapper.date;

        div.append(p1,p2,p);
        container.append(div)
    });
}