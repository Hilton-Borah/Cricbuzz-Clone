
//  Piyuswh kumar (fw19_0701)


  //  piyush0746@gmail.com
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '89c2bb4061mshd4bd3c3b7d698dfp113eb8jsne516feb819a0',
// 		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
// 	}
// };

   //piyushfrommasaischool@gmail.com
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "2cf47c4ae4msh1ff17835303bffep1c595fjsn717d7ecc5244",
  //     "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
  //   },
  // };


  // //  piyushkrme@gmail.com
  // const options = {
  // 	method: 'GET',
  // 	headers: {
  // 		'X-RapidAPI-Key': '3d06a6ac36msh147abc70433ca94p19e7c6jsne335b42b0a2d',
  // 		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  // 	}
  // };

  //          // piyushme102@gmail.com
  const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5879ea99d2mshc21ab04fc31f74ep1aeb50jsn426bb31923d7',
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
};

let data;

fetch(
  "https://cricbuzz-cricket.p.rapidapi.com/schedule/v1/international",
  options
)
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    data = res.matchScheduleMap;
    console.log(data);
    // console.log(res);
    pi_appendschedule(data);
  })
  .catch(function (err) {
    console.log(err);
  });

let container = document.getElementById("pi_schedulecontainer");

function pi_appendschedule(data) {
  container.innerHTML = "";
  data.forEach(function (el) {
    let pimatchdatediv = document.createElement("div");
    pimatchdatediv.setAttribute("class", "pimatchTypediv");

    if (el.scheduleAdWrapper) {
      let pimatchdate = document.createElement("h2");
      pimatchdate.setAttribute("class", "pidatescudelofmatch");
      pimatchdate.innerText = el.scheduleAdWrapper.date;
      pimatchdatediv.append(pimatchdate);

      for (
        let i = 0;
        i < el.scheduleAdWrapper.matchScheduleList.length;
        i++
      ) {
        let piseriesName = document.createElement("h3");
        piseriesName.setAttribute("class", "piseriesName");
        piseriesName.innerText =
          el.scheduleAdWrapper.matchScheduleList[i].seriesName;

        let piseriesNamediv = document.createElement("div");
        piseriesNamediv.append(piseriesName);

        let piteamName1 =
          el.scheduleAdWrapper.matchScheduleList[i].matchInfo[0].team1
            .teamName;
        let piteamName2 =
          el.scheduleAdWrapper.matchScheduleList[i].matchInfo[0].team2
            .teamName;
        let pitypeoffmatch =
          el.scheduleAdWrapper.matchScheduleList[i].matchInfo[0].matchDesc;
        let picountryvscountry = document.createElement("p");
        picountryvscountry.setAttribute("class", "picountryvscountry");
        picountryvscountry.innerText = `${piteamName1} VS ${piteamName2}, ${pitypeoffmatch}`;
        let pigroundname =
          el.scheduleAdWrapper.matchScheduleList[i].matchInfo[0].venueInfo
            .ground;
        let pigroundcity =
          el.scheduleAdWrapper.matchScheduleList[i].matchInfo[0].venueInfo
            .city;
        let pigroundcountry =
          el.scheduleAdWrapper.matchScheduleList[i].matchInfo[0].venueInfo
            .country;
        let pigroundaddress = document.createElement("p");
        pigroundaddress.setAttribute("class", "pigroundaddress");
        pigroundaddress.innerText = `${pigroundname}, ${pigroundcity}, ${pigroundcountry}`;

        let pigroundNamediv = document.createElement("div");
        pigroundNamediv.append(picountryvscountry, pigroundaddress);

        let pimatchtime = document.createElement("p");
        pimatchtime.innerText =el.scheduleAdWrapper.matchScheduleList[i].matchInfo[0].venueInfo.timezone.slice(1,7)+" PM";
        let pimatchtimediv = document.createElement("div");
        pimatchtimediv.append(pimatchtime);

        let piparticularmatchdiv = document.createElement("div");
        piparticularmatchdiv.setAttribute("class", "piparticularmatchdiv");
        piparticularmatchdiv.append(
          piseriesNamediv,
          pigroundNamediv,
          pimatchtimediv
        );

        pimatchdatediv.append(piparticularmatchdiv);

        //  console.log(el.scheduleAdWrapper.matchScheduleList[i].seriesName)
        //  console.log(el.scheduleAdWrapper.matchScheduleList[i].matchInfo[0].team1.teamName)
        //  console.log(el.scheduleAdWrapper.matchScheduleList[i].matchInfo[0].team2.teamName)
        //  console.log(el.scheduleAdWrapper.matchScheduleList[i].matchInfo[0].matchDesc)
        //  console.log(el.scheduleAdWrapper.matchScheduleList[i].matchInfo[0].venueInfo.ground)
        //  console.log(el.scheduleAdWrapper.matchScheduleList[i].matchInfo[0].venueInfo.city)
        //  console.log(el.scheduleAdWrapper.matchScheduleList[i].matchInfo[0].venueInfo.country)
        //  console.log(el.scheduleAdWrapper.matchScheduleList[i].matchInfo[0].venueInfo.timezone)
        //  console.log(el.scheduleAdWrapper.matchScheduleList[i].matchInfo[0].venueInfo)
      }
    }
    container.append(pimatchdatediv);
  });
}

// matchScheduleList: Array(2)
// 0: {seriesName: 'Nepal tour of Kenya, 2022', matchInfo: Array(1), seriesId: 4560, seriesHomeCountry: 1, seriesCategory: 'International'}
// 1: {seriesName: 'South Africa tour of England, 2022', matchInfo: Array(1), seriesId: 3646, seriesHomeCountry: 1, seriesCategory: 'International'}

// matchInfo: Array(1)
// 0:
// endDate: "1661471999000"
// matchDesc: "1st T20I"
// matchFormat: "T20"
// matchId: 51460
// seriesId: 4560
// startDate: "1661421600000"
// team1: {teamId: 14, teamName: 'Kenya', teamSName: 'KEN', imageId: 172129}
// team2: {teamId: 72, teamName: 'Nepal', teamSName: 'NEP', imageId: 172169}