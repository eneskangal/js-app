var block=document.querySelectorAll(".block");
block.forEach(enes);
var deger="O"
function enes(x){
    x.addEventListener("click", function()
        {
        
        if (deger=="O"){
            deger="X"
            //document.getElementById("info").innerHTML="O'da"
        }
        else{
            deger="O"
            //document.getElementById("info").innerHTML="x'da"
        }
       enes2(this);
        }
    )
}
function enes2(x){  
   if(x.textContent==""){
     x.textContent=deger;
    if (deger=="O"){
        document.getElementById("info").innerHTML="X'da"
    }
    else{
        document.getElementById("info").innerHTML="O'da"
    }
   }
   else{
       setTimeout(function(){
           alert("hata");
           if (deger=="O"){
            deger="X"
            //document.getElementById("info").innerHTML="O'da"
            }
            else{
            deger="O"
            //document.getElementById("info").innerHTML="x'da"
            } 



       }, 100)
   }
}