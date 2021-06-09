let rgb=document.getElementById("rgb");
let wrap=document.getElementById("wrap");
let imgler=document.getElementsByTagName("img");
console.log(imgler)
function renk(){
    let red=parseInt(Math.random()*255);
    let green=parseInt(Math.random()*255);
    let blue=parseInt(Math.random()*255);
    return "rgb("+red+","+" "+green+","+" "+blue+")";
}
function randomIndex3(){
    let randomIndex3sayı=parseInt(Math.random()*2);
    return randomIndex3sayı;
}
function randomIndex6(){
    let randomIndex6sayı=parseInt(Math.random()*5);
    return randomIndex6sayı;
}



function kutu(murat){

    if (wrap.childNodes.length==0){
        for(i=0; i<murat; i++){
            var img=document.createElement("img");
            img.style.width="100px";
            img.style.height="100px";
            img.style.borderRadius="100px";
            wrap.appendChild(img);
        }

        
    }
    else{
        while (wrap.firstChild) {
            wrap.removeChild(wrap.lastChild);
          }
        for(i=0; i<murat; i++){
            var img=document.createElement("img");
            img.style.width="100px";
            img.style.height="100px";
            img.style.borderRadius="100px";
            wrap.appendChild(img);
        }
    }
}


function oluşturucu(adet){
    kutu(adet)    
    rgb.innerHTML=renk(); 
    var randomSayı3=randomIndex3(); 
    if(adet==3){
        for(i=0; i<3; i++){
            if(i==randomSayı3){
                imgler[randomSayı3].style.backgroundColor=rgb.innerHTML;
            }
            else{
                imgler[i].style.backgroundColor=renk();
            }
        }
    }
    if(adet==6){
        var randomSayı6=randomIndex6();
        for(i=0; i<6; i++){
            if(i==randomSayı6){
                imgler[i].style.backgroundColor=rgb.innerHTML;
            }
            else{
                imgler[i].style.backgroundColor=renk();
            }
        }
    }  
}

function tikla(){
    document.querySelectorAll("img").forEach(img => img.addEventListener("click", function()
    {
        
        if(img.style.backgroundColor==rgb.innerHTML)
        {            
            document.getElementById("correct").innerHTML="correct";
            document.getElementById("mavi").style.backgroundColor=rgb.innerHTML;
            for(i=0; i<6; i++){
                imgler[i].style.backgroundColor=rgb.innerHTML;
            }
            
        }
        else{
            img.style.display="none";
        }
    }
    )
    );
}

function newgame(){
    oluşturucu(3)
    tikla()
    document.getElementById("correct").innerHTML="";
    document.getElementById("mavi").style.backgroundColor="aqua";
}

function easy(){
    oluşturucu(3)
    tikla()
    document.getElementById("correct").innerHTML="";
    document.getElementById("mavi").style.backgroundColor="aqua";

}
function hard(){
    oluşturucu(6)
    tikla()
    document.getElementById("correct").innerHTML="";
    document.getElementById("mavi").style.backgroundColor="aqua";
}
