var sayı=parseInt(Math.random()*100);
var correctDıv=document.getElementById("correct");
var previous=document.getElementById("previous");
previous.style.fontSize="20px";
var quess=document.getElementById("quess");
function doğrula(){
   if(quess.value==sayı){       
       correctDıv.style.backgroundColor="green";
       correctDıv.innerHTML="bildin";
   }
   else if(quess.value <sayı){  
    correctDıv.style.backgroundColor="red";
    correctDıv.innerHTML="büyüt sayıyı";
    previous.innerHTML+=quess.value+"/";
   }
   else if(quess.value >sayı){   
    correctDıv.style.backgroundColor="red";
    correctDıv.innerHTML="sayıyı küçült";
    previous.innerHTML+=quess.value+"/";
   }
   else{
       alert("karakter girmeyiniz")
   }
}