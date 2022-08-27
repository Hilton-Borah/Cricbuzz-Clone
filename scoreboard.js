
import {navbar, footer} from "./componanats/firstnav.js"

let guptacontainer = document.getElementById("hi_first_navbar_inside")
guptacontainer.innerHTML=navbar()

let guptafooter = document.getElementById("gupta_footer")
guptafooter.innerHTML=footer()





import appendsecond from "./componanats/secondnav.js"


let hi_container = document.getElementById("hi_second_navbar_inside")


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1d4ebfd689mshd6d5452c5d03785p10425fjsnc78cb22ea40b',
        'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
    }
};

fetch('https://unofficial-cricbuzz.p.rapidapi.com/matches/list?matchState=recent', options)
    // .then(response => response.json())
    // .then(response => console.log(response))
    // .catch(err => console.error(err));
    // .then(response => response.json())
    // .then(response =>console.log(response); console.log(response.typeMatches[0]))
    // .catch(err => console.error(err));
    .then((res) => {
        return res.json()
    }).then((res) => {
        console.log(res)
        console.log(res.typeMatches[0].seriesAdWrapper[0])
        appenddata(res.typeMatches[0].seriesAdWrapper[0])
        appendsecond(res.typeMatches[0].seriesAdWrapper[0],hi_container)
        console.log(res.typeMatches[1].seriesAdWrapper[0])
        appenddata(res.typeMatches[1].seriesAdWrapper[0])
        appendsecond(res.typeMatches[1].seriesAdWrapper[0],hi_container)
        console.log(res.typeMatches[2].seriesAdWrapper[0])
        appenddata(res.typeMatches[2].seriesAdWrapper[0])
        appendsecond(res.typeMatches[2].seriesAdWrapper[0],hi_container)
        console.log(res.typeMatches[3].seriesAdWrapper[0])
        appenddata(res.typeMatches[3].seriesAdWrapper[0])
        appendsecond(res.typeMatches[3].seriesAdWrapper[0],hi_container)
    }).catch((err) => {
        console.log(err)
    })






function appenddata(el) {
    // data.forEach((el)=>{
    let maindiv = document.createElement("div");
    // maindiv.style.backgroundColor="green"
    maindiv.style.marginTop = "10px"
    maindiv.setAttribute("class", "hi_maindiv")

    // let t1=document.createElement("h3")
    // t1.innerText=el.seriesMatches.seriesName

    let t2 = document.createElement("p")
    t2.style.fontSize = "15px"
    t2.style.color = "#1e7dc4"
    t2.innerText = el.seriesMatches.matches[0].matchInfo.status

    let main1 = document.createElement("div")
    // main1.style.backgroundColor="yellow"
    main1.setAttribute("class", "hi_main1")

    let t3 = document.createElement("h3")
    t3.innerText = el.seriesMatches.matches[0].matchInfo.team1.teamSName

    let t4 = document.createElement("h3")
    t4.innerText = el.seriesMatches.matches[0].matchScore.team1Score.inngs1.runs + "-"
    t4.style.marginLeft = "20px"

    let t5 = document.createElement("h3")
    t5.innerText = el.seriesMatches.matches[0].matchScore.team1Score.inngs1.wickets

    let t6 = document.createElement("h3")
    t6.innerText = `(${el.seriesMatches.matches[0].matchScore.team1Score.inngs1.overs})`

    main1.append(t3, t4, t5, t6)

    let main2 = document.createElement("div")
    // main2.style.backgroundColor="red"
    main2.setAttribute("class", "hi_main2")

    let t7 = document.createElement("h3")
    t7.innerText = el.seriesMatches.matches[0].matchInfo.team2.teamSName

    let t8 = document.createElement("h3")
    t8.innerText = el.seriesMatches.matches[0].matchScore.team2Score.inngs1.runs + "-"
    t8.style.marginLeft = "20px"

    let t9 = document.createElement("h3")
    t9.innerText = el.seriesMatches.matches[0].matchScore.team2Score.inngs1.wickets

    let t10 = document.createElement("h3")
    t10.innerText = `(${el.seriesMatches.matches[0].matchScore.team2Score.inngs1.overs})`

    let hounddiv = document.createElement("div")

    main2.append(t7, t8, t9, t10)

    maindiv.append(main1, main2, t2)

    document.getElementById("hi_third_navbar_inside").append(maindiv)

}


 document.getElementById("an_profile").addEventListener( "click", anpiprofile);

 function anpiprofile(){
    window.location.href="afterlogin1.html"
 }

