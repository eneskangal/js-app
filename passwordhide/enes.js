var enes= document.getElementById("text");

function fonksiyon(){
   if(enes.type=="text"){
       enes.type="password";
   }
   else if(enes.type=="password"){
       enes.type="text";
   }
}