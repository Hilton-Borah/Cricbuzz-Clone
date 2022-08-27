
let container = document.getElementById("ro_schedule");

let data;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9867463a05msh43e5b08d97f3488p1dd403jsn16c7c6af4393',
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
		

		if(el.scheduleAdWrapper == undefined){
			return false
		}
        let div = document.createElement("div");
		div.style.lineHeight = "10px";
		div.style.marginTop = "27px"
		
		let p1 = document.createElement("span");
        p1.innerText = el.scheduleAdWrapper.matchScheduleList[0].matchInfo[0].team1.teamName  +" "+"vs" +" ";
		p1.style.fontSize = "18px"
		
		let p2 = document.createElement("span");
        p2.innerText = el.scheduleAdWrapper.matchScheduleList[0].matchInfo[0].team2.teamName;
		p2.style.fontSize = "20px"

		let p3 = document.createElement("p");
        p3.innerText = el.scheduleAdWrapper.matchScheduleList[0].matchInfo[0].matchDesc;

        let p4 = document.createElement("p");
        p4.innerText = el.scheduleAdWrapper.date;
		p4.style.color = "#917f87"
		p4.style.fontSize = "12px"
		
		let h =document.createElement("hr")
		
		div.append(p1,p2,p3,p4,h);
        container.append(div);
    });
}

