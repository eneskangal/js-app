//variables
var dakikasecim= document.querySelector("#dakikasecım");
var saniyesecim= document.querySelector("#saniyesecım");
var dakika= document.querySelector("#dakika");
var saniye= document.querySelector("#saniye");
dakikasecim.addEventListener("change", function(){
    dakika.innerHTML=dakikasecim.value;  
    if(dakikasecim.value < 10){
        dakika.innerHTML=dakikasecim.value
    }
    else{
        dakika.innerHTML=dakikasecim.value
    }  
})
saniyesecim.addEventListener("change", function(){
   screen.innerHTML=saniyesecim.value;  
    if(saniyesecim.value <10){
        saniye.innerHTML=saniyesecim.value
    }
    else{
        saniye.innerHTML=saniyesecim.value
    }  
})
function start(){
    if(dakikasecim.value==0&&saniyesecim.value==0){
        alert("değer girmediniz");
        location.reload();
    }
    var interval=setInterval(function(){
        saniye.innerHTML--;
        if(saniye.innerHTML==0){
            if(dakika.innerHTML !=0){
            saniye.innerHTML=59;            
            dakika.innerHTML--;
            }
            else if(dakika.innerHTML==0){
                alert("bitti");
                clearInterval(interval)
                location.reload();
            }
        }        
    },1000)  
}
function restart(){
    location.reload();
}
