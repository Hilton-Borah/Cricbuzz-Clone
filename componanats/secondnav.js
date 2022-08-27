

function appendsecond(el,hi_container) {
    let maindiv1 = document.createElement("div")
    maindiv1.setAttribute("class", "hi_maindiv1")

    let t3 = document.createElement("div")
    t3.innerText = el.seriesMatches.matches[0].matchInfo.team1.teamSName + " " + "vs" + " " + el.seriesMatches.matches[0].matchInfo.team2.teamSName + " " + "-" + " ";

    let t7 = document.createElement("div")
    if (el.seriesMatches.matches[0].matchScore.team1Score.inngs1.runs > el.seriesMatches.matches[0].matchScore.team2Score.inngs1.runs) {
        t7.innerText = el.seriesMatches.matches[0].matchInfo.team1.teamSName + " " + "Lead"
    } else if (el.seriesMatches.matches[0].matchScore.team1Score.inngs1.runs < el.seriesMatches.matches[0].matchScore.team2Score.inngs1.runs) {
        t7.innerText = el.seriesMatches.matches[0].matchInfo.team2.teamSName + " " + "Lead"
    } else {
        t7.innerText = "Preview"
    }

    maindiv1.append(t3, t7)

    hi_container.append(maindiv1)


}


export default appendsecond