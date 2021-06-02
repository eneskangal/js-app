var linkler=document.querySelectorAll("a");
console.log(linkler);
var content=document.getElementById("content");

linkler[0].addEventListener("click", function(){
    if (content.childNodes.length > 1){
       var enes= document.querySelectorAll("img");
       for(i=0; i<3; i++){
           enes[i].src=i+1+".jpg";
       }         
    }
    else{
        for(i=1; i<3; i++){
            var img=document.createElement("img");
            img.src=i+".jpg";
            content.appendChild(img);
        }
    }

})
linkler[1].addEventListener("click", function(){
    if (content.childNodes.length > 1){
        var enes= document.querySelectorAll("img"); 
        for(i=0; i<2; i++){
            enes[i].src=i+3+".jpg"
        }

    }
    else{
        for(i=3; i<5; i++){
            var img=document.createElement("img");
            img.src=i+".jpg";
            content.appendChild(img); 
        }
    }     
})
linkler[2].addEventListener("click", function(){
    if (content.childNodes.length > 1){
        var enes= document.querySelectorAll("img"); 
        for(i=0; i<2; i++){
            enes[i].src=i+5+".jpg"
        }

    }
    else{
        for(i=5; i<7; i++){
            var img=document.createElement("img");
            img.src=i+".jpg";
            content.appendChild(img); 
        }
    }     
})