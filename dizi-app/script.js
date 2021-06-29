function DızıApp(src, alt, title, rate){
    this.src=src;
    this.alt=alt;
    this.title=title;
    this.rate=rate;
}
var Westworld=new DızıApp("1.jpg", "westworld", "westworld", "8.6");
var TheWalkingDead=new DızıApp("2.jpg", "twd", "the walking dead", "8.2");
var Sopranos=new DızıApp("3.jpg", "sopranos", "sopranos", "9.2");
var GameofThrones=new DızıApp("4.jpg", "game of thrones", "game of thrones", "9.3");
var PrisonBreak=new DızıApp("5.jpg", "prison break", "prison break", "8.3");
var RickandMorty=new DızıApp("6.jpg", "rick and morty", "rick and morty", "9.2");
var SonsofAnarchy=new DızıApp("7.jpg", "soa", "sons of anarchy", "8.5");
var search=document.getElementById("search");
search.addEventListener("keydown", yakala);
function yakala(e){
    if(e.key=="Enter"){
        arama(search.value)      
    }
}
var diziler=[Westworld, TheWalkingDead, Sopranos, GameofThrones, PrisonBreak, RickandMorty, SonsofAnarchy];
for(i=0; i<diziler.length; i++){
    var divElement=document.createElement("div");
    divElement.classList.add("dizi-app")
    document.getElementById("content").appendChild(divElement);  
    var divElement2=document.createElement("div");
    divElement2.classList.add("dizi-app-image");
    document.querySelectorAll(".dizi-app")[i].appendChild(divElement2);   
    var img=document.createElement("img");
    img.src=i+1+".jpg"
    img.alt=diziler[i].alt
    img.classList.add("img")
    document.querySelectorAll(".dizi-app-image")[i].appendChild(img);  
    var div=document.createElement("div");
    div.classList.add("dizi-app-yazı");
    document.querySelectorAll(".dizi-app")[i].appendChild(div);
    var h1=document.createElement("h1");
    h1.classList.add("h1")
    h1.innerHTML=diziler[i].title;
    document.querySelectorAll(".dizi-app-yazı")[i].appendChild(h1);  
    var p=document.createElement("p");
    p.classList.add("rate")
    p.innerHTML=diziler[i].rate;
    document.querySelectorAll(".dizi-app-yazı")[i].appendChild(p); 
}
function arama(deger){
    for(i=0; i<diziler.length; i++){
        var index=diziler[i].title.search(deger);  
        if(index==-1){
            document.getElementsByClassName("dizi-app")[i].style.display="none";           
        }else{
            document.getElementsByClassName("dizi-app")[i].style.display="block ";     
        }
    }  
}