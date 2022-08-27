import {navbar, footer} from "./componanats/firstnav.js"

let guptacontainer = document.getElementById("hi_first_navbar_inside")
guptacontainer.innerHTML=navbar()

let guptafooter = document.getElementById("gupta_footer")
guptafooter.innerHTML=footer()


const options = {
    method: 'GET',
    headers: {
        // 'X-RapidAPI-Key': 'e4902ee446mshb4f0aa38d2ab799p105182jsn0d2cf513d531',
        // 'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'

        // 'X-RapidAPI-Key': 'cf6425b08bmsh5787892ec04c87ep1ae0eajsne10f091df267',
        // 'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'

        //piyush
        // "X-RapidAPI-Key": "2cf47c4ae4msh1ff17835303bffep1c595fjsn717d7ecc5244",
        // "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",

        // 'X-RapidAPI-Key': '3d06a6ac36msh147abc70433ca94p19e7c6jsne335b42b0a2d',
  	    // 'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'


        //   "X-RapidAPI-Key": "2cf47c4ae4msh1ff17835303bffep1c595fjsn717d7ecc5244",
        //   "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",

          'X-RapidAPI-Key': '89c2bb4061mshd4bd3c3b7d698dfp113eb8jsne516feb819a0',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
};

let data;
async function getdata() {
    try {
        let res = await fetch('https://cricbuzz-cricket.p.rapidapi.com/news/v1/index', options);
        let res2 = await res.json();
        data = res2.storyList;
        console.log(data);
        append(data)

    } catch (err) {
        console.log(err)
    }
}
getdata();


function append(data) {
    let cont = document.getElementById("ni_LN_container");
    cont.innerHTML = null;
    data.forEach(async (el) => {
        if (el.story) {

            let card = document.createElement("div");
            card.id = "ni_news_content";
            let div1 = document.createElement("div");
            div1.id = "ni_image1";
            let div2 = document.createElement("div");
            div2.id = "ni_text";
            let hr = document.createElement("hr");

            let hline = document.createElement("p");
            hline.innerText = el.story.hline;

            let Iurl = await getimage(el.story.imageId);
            // console.log(Iurl);
            let img = document.createElement("img");
            img.src = Iurl;
            div1.append(img);
            div2.append(hline);
            card.append(div1, div2);
            cont.append(card, hr);
        }


    })
}



async function getimage(id) {
    try {
        let res = await fetch(`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${id}/i.jpg`, options);
        let data = res;

        console.log(data.url);
        return data.url;


    } catch (err) {
        console.log(err)
    }
}


function appendLN(data) {
    let cont = document.getElementById("ni_cont");
    cont.innerHTML = null;
    data.forEach((el) => {
        if (el) {

            let card = document.createElement("div");
            card.id = "ni_LN";
            let h2 = document.createElement("h2");
            h2.innerText = el.headline;
            let p = document.createElement("p");
            p.innerText = el.description;
            let hr = document.createElement("hr");




            card.append(h2, p,);
            cont.append(card, hr);
        }
    })

}

async function gettopic() {
    try {
        let res = await fetch('https://cricbuzz-cricket.p.rapidapi.com/news/v1/topics', options);
        let data = await res.json();

        console.log(data.topics);
        appendLN(data.topics)

    } catch (err) {
        console.log(err)
    }
}
gettopic();


document.querySelector("#gotohome").addEventListener("click", gotohomepage)

function gotohomepage(){
  window.location.href="index.html"
}



