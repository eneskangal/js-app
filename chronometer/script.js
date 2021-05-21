var seconds=0;
var miliseconds=0;
var appendseconds=document.getElementById("saniye");
var appendmiliseconds=document.getElementById("milisaniye");


function enes(){
    miliseconds++;
    appendmiliseconds.innerHTML=miliseconds;
    if(miliseconds<10){
        appendmiliseconds.innerHTML="0"+miliseconds;
    }
    if(miliseconds>59){
        miliseconds=0;
        seconds++;        
    }
    if(seconds<10){
        appendseconds.innerHTML="0"+seconds+":";
    }    
}
function timerstart(){
    myVar = setInterval(enes, 1000);
   
}
function timerstop(){
    clearInterval(myVar);
}   
function timerreset(){
    appendseconds.innerHTML="00:"    
    appendmiliseconds.innerHTML="00"  
    clearInterval(myVar);    
    seconds=0; 
    miliseconds=0;
} 

