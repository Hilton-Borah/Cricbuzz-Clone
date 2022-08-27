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
        // appenddata(res.typeMatches[0].seriesAdWrapper[0])
        appendsecond(res.typeMatches[0].seriesAdWrapper[0],hi_container)
        console.log(res.typeMatches[1].seriesAdWrapper[0])
        // appenddata(res.typeMatches[1].seriesAdWrapper[0])
        appendsecond(res.typeMatches[1].seriesAdWrapper[0],hi_container)
        console.log(res.typeMatches[2].seriesAdWrapper[0])
        // appenddata(res.typeMatches[2].seriesAdWrapper[0])
        appendsecond(res.typeMatches[2].seriesAdWrapper[0],hi_container)
        console.log(res.typeMatches[3].seriesAdWrapper[0])
        // appenddata(res.typeMatches[3].seriesAdWrapper[0])
        appendsecond(res.typeMatches[3].seriesAdWrapper[0],hi_container)
    }).catch((err) => {
        console.log(err)
    })

    let bag="";
    let user = localStorage.getItem("user")

    for (let i=0;i<10;i++){
        bag=bag+user[i]
    }

    document.getElementById("hi_username").value=bag
    document.getElementById("hi_email").value=user

    console.log(user)

