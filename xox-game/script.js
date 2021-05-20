var blocks=document.querySelectorAll(".block");
var error=document.getElementById("error");
var info=document.getElementById("info");
var player="0"

    blocks.forEach(block => block.addEventListener("click", function(){
        if(block.innerHTML==""){
            if(player=="0"){
                player="X";
                info.innerHTML="0'da"
            }  
            else{
                player="0";
                info.innerHTML="X'de"
            }  
            block.innerHTML=player;
            }
            else{
                setTimeout(function(){
                    error.innerHTML="error"
                }, 1000)
                setTimeout(function(){
                    error.innerHTML=""
                }, 4000)
            }
            win();
    }))

function row(){
   
    let enes=blocks[0].innerHTML==blocks[1].innerHTML&&blocks[1].innerHTML==blocks[2].innerHTML&&blocks[0].textContent !=="";
    let enes2=blocks[3].innerHTML==blocks[4].innerHTML&&blocks[4].innerHTML==blocks[5].innerHTML&&blocks[3].textContent !=="";
    let enes3=blocks[5].innerHTML==blocks[7].innerHTML&&blocks[7].innerHTML==blocks[8].innerHTML&&blocks[5].textContent !=="";
   
    if(enes==true||enes2==true||enes3==true){
        alert(player+" "+"kazandı");
        location.reload();
    }    
}
function col(){
   
    let col=blocks[0].innerHTML==blocks[3].innerHTML&&blocks[3].innerHTML==blocks[6].innerHTML&&blocks[0].textContent !=="";
    let col2=blocks[1].innerHTML==blocks[4].innerHTML&&blocks[4].innerHTML==blocks[7].innerHTML&&blocks[1].textContent !=="";
    let col3=blocks[2].innerHTML==blocks[5].innerHTML&&blocks[5].innerHTML==blocks[8].innerHTML&&blocks[2].textContent !=="";
   
    if(col==true||col2==true||col3==true){
        alert(player+" "+"kazandı")
        location.reload();
    }
    
} 
function capraz(){
   
    let capraz=blocks[0].innerHTML==blocks[4].innerHTML&&blocks[4].innerHTML==blocks[8].innerHTML&&blocks[0].textContent !=="";
    let capraz2=blocks[2].innerHTML==blocks[4].innerHTML&&blocks[4].innerHTML==blocks[6].innerHTML&&blocks[2].textContent !=="";
    
   
    if(capraz==true||capraz2==true){
        alert(player+" "+"kazandı")
        location.reload();
    }
    
} 
function beraber(){
    var array=[];
    blocks.forEach(block => array.push(block.textContent))
    if(!array.includes("")){
        alert("berabere");
        location.reload();
    }
}
function win(){
    row();
    col();
    capraz();    
    beraber();
}



