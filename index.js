const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e4902ee446mshb4f0aa38d2ab799p105182jsn0d2cf513d531',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};

  async function getdata(){
    try{
        let res=await fetch ('https://cricbuzz-cricket.p.rapidapi.com/news/v1/index', options);
        let data=await res.json();
        console.log(data);

    }catch(err){
        console.log(err)
    }
  }
getdata();


    function append(data){
      let cont=document.getElementById("ni_cont");
cont.innerHTML=null;
      data.forEach((el)=>{
        let card=document.createElement("div");
        let context=document.createElement("p");
        context.innerText=el.story.context;
        let hline=document.createElement("h2");
        hline.innerText=el.story.hline;
        let intro=document.createElement("p");
        intro.innerText=el.story.intro;

        card.append(context,hline,intro);
        cont.append(card);

       
        
      })
    }