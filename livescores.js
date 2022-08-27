
//  Piyuswh kumar (fw19_0701)

// Source of API=   https://rapidapi.com/cricketapilive/api/cricbuzz-cricket/      
//   visit rapidapi => login,signup  =>  subscribe for free  =>  select matches and matches/list => copy API


import {navbar, footer} from "./componanats/firstnav.js"

let guptacontainer = document.getElementById("hi_first_navbar_inside")
guptacontainer.innerHTML=navbar()

let guptafooter = document.getElementById("gupta_footer")
guptafooter.innerHTML=footer()

  //  piyush0746@gmail.com
//   const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '89c2bb4061mshd4bd3c3b7d698dfp113eb8jsne516feb819a0',
// 		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
// 	}
// };

//     //  piyushfrommasaischool@gmail.com
const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2cf47c4ae4msh1ff17835303bffep1c595fjsn717d7ecc5244",
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };

    //   piyushkrme@gmail.com 
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '3d06a6ac36msh147abc70433ca94p19e7c6jsne335b42b0a2d',
// 		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
// 	}
// };

    //   piyushme102@gmail.com
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '5879ea99d2mshc21ab04fc31f74ep1aeb50jsn426bb31923d7',
// 		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
// 	}
// };

let data;

fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent', options)
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    data=res.typeMatches
    console.log(data)
    //console.log(res);
    pi_append(data)
    })
  .catch(function (err) {
    console.log(err);
  });


  let container = document.getElementById("pi_container");

  let idcount=1;

  function pi_append(data) {
    container.innerHTML = "";
    data.forEach(function (el) {

    let pimatchTypediv= document.createElement('div')
    pimatchTypediv.setAttribute("id", `pimatchTypediv${idcount}`)
    idcount++;
      let pimatchTypename=document.createElement('h1')
      pimatchTypename.innerText=el.matchType
      pimatchTypediv.append(pimatchTypename)

      for(let i=0; i<el.seriesMatches.length;i++){

        if (el.seriesMatches[i].seriesAdWrapper){

          let matchdiv= document.createElement('div')
          matchdiv.setAttribute("class","pimatchdiv")
          let pimatch=document.createElement('h1')
          pimatch.setAttribute("class","piseriesName")
          //  console.log(el.seriesMatches[i].seriesAdWrapper.seriesName)
          pimatch.innerText=el.seriesMatches[i].seriesAdWrapper.seriesName
          matchdiv.append(pimatch)


            for(let j=0; j<el.seriesMatches[i].seriesAdWrapper.matches.length; j++){

              if(el.seriesMatches[i].seriesAdWrapper.matches[j].matchInfo){
                
                //console.log(el.seriesMatches[i].seriesAdWrapper.matches[j])  
              let pitesttypediv= document.createElement('div')
              pitesttypediv.setAttribute("class","pitesttypediv")

              let pifirstcountryname=document.createElement('h3')
              pifirstcountryname.innerText=el.seriesMatches[i].seriesAdWrapper.matches[j].matchInfo.team1.teamName

              let pisecondcountryname=document.createElement('h3')
              pisecondcountryname.innerText=el.seriesMatches[i].seriesAdWrapper.matches[j].matchInfo.team2.teamName

              let pitesttypename=document.createElement('p')
              
              pitesttypename.innerText=el.seriesMatches[i].seriesAdWrapper.matches[j].matchInfo.matchDesc

              let picountryvscountry=document.createElement('h2')
              picountryvscountry.setAttribute("class","picountryvscountry")
              picountryvscountry.innerText=`${pifirstcountryname.innerText} VS ${pisecondcountryname.innerText},   ${pitesttypename.innerText}`;

              let piwonstatus=document.createElement('h3')
              piwonstatus.setAttribute("class","pistatus")
              piwonstatus.innerText="Status:  "+el.seriesMatches[i].seriesAdWrapper.matches[j].matchInfo.status

              
              if(el.seriesMatches[i].seriesAdWrapper.matches[j].matchScore){

                 let piteamonerun=document.createElement('p')
                 piteamonerun.innerText=el.seriesMatches[i].seriesAdWrapper.matches[j].matchScore.team1Score.inngs1.runs
                 
                 let piteamonewicket=document.createElement('p')
                 piteamonewicket.innerText=el.seriesMatches[i].seriesAdWrapper.matches[j].matchScore.team1Score.inngs1.wickets
                 
                 let piteamoneover=document.createElement('p')
                 piteamoneover.innerText=el.seriesMatches[i].seriesAdWrapper.matches[j].matchScore.team1Score.inngs1.overs

                 let pifirstteafscore =document.createElement('h4')
                 pifirstteafscore.innerText=`Runs= ${piteamonerun.innerText}, Wickets= ${piteamonewicket.innerText}, Overs= ${piteamoneover.innerText}`

                 let piteamtworun=document.createElement('p')
                 piteamtworun.innerText=el.seriesMatches[i].seriesAdWrapper.matches[j].matchScore.team2Score.inngs1.runs
                 
                 let piteamtwowicket=document.createElement('p')
                 piteamtwowicket.innerText=el.seriesMatches[i].seriesAdWrapper.matches[j].matchScore.team2Score.inngs1.wickets
                 
                 let piteamtwoover=document.createElement('p')
                 piteamtwoover.innerText=el.seriesMatches[i].seriesAdWrapper.matches[j].matchScore.team2Score.inngs1.overs

                 let pisecondteafscore =document.createElement('h4')
                 pisecondteafscore.innerText=`Runs= ${piteamtworun.innerText}, Wickets= ${piteamtwowicket.innerText}, Overs= ${piteamtwoover.innerText}`
                 
              let pifulldetail=document.createElement("div")
              pifulldetail.setAttribute("class","pifulldetail")
              pifulldetail.append( pifirstcountryname, pifirstteafscore, pisecondcountryname,pisecondteafscore)
              pitesttypediv.append(picountryvscountry,piwonstatus, pifulldetail)

              matchdiv.append(pitesttypediv)

              }
              }

            }
          
          pimatchTypediv.append(matchdiv)
        }
      }
    
    
     container.append(pimatchTypediv);
    })
  }
  

  document.querySelector("#gotohome").addEventListener("click", gotohomepage)

  function gotohomepage(){
    window.location.href="index.html"
  }




//   (4) [{…}, {…}, {…}, {…}]
// 0:
// matchType: "International"
// seriesMatches: Array(10)
// 0:
// seriesAdWrapper:
// matches: Array(3)
// 0:
// matchInfo: {matchId: 49871, seriesId: 4436, seriesName: 'India tour of Zimbabwe, 2022', matchDesc: '3rd ODI', matchFormat: 'ODI', …}
// matchScore:
// team1Score: {inngs1: {…}}
// team2Score: {inngs1: {…}}
// [[Prototype]]: Object



// matchInfo:
// currBatTeamId: 2
// endDate: "1661181300000"
// isTimeAnnounced: true
//              matchDesc: "3rd ODI"
// matchFormat: "ODI"
// matchId: 49871
// seriesEndDt: "1661299200000"
// seriesId: 4436
// seriesName: "India tour of Zimbabwe, 2022"
// seriesStartDt: "1660780800000"
// startDate: "1661152500000"
// state: "Complete"
// stateTitle: "IND Won"
//             status: "India won by 13 runs"

// team1:
// imageId: 172127
// teamId: 12
//               testtypename: "Zimbabwe"
// teamSName: "ZIM"
// [[Prototype]]: Object
// team2:
// imageId: 172115
// teamId: 2
//               testtypename: "India"
// teamSName: "IND"


// matchScore:
// team1Score:
//                          inngs1: {inningsId: 2, runs: 276, wickets: 10, overs: 49.3}
// [[Prototype]]: Object
// team2Score:
//                          inngs1: {inningsId: 1, runs: 289, wickets: 8, overs: 49.6}
// [[Prototype]]: Object