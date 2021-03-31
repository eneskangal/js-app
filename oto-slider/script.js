var slideindex=1;
enes();

function enes(){
    var slides=document.getElementsByClassName("slide");
    for(i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }
    slideindex++
    if(slideindex>slides.length){
        slideindex=1;
    }
    slides[slideindex-1].style.display="block"       

}

setInterval(enes, 2000)
