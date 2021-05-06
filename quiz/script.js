var puan=0;

function yanlıs(){
    puan+=0;
}
function doğru(){
    puan=puan+20;
}
function enes(){   
    if(puan>50){
        document.getElementById("sonuc").innerHTML="sınavı geçtiniz"+":"+" "+puan;
    }
   else{
    document.getElementById("sonuc").innerHTML="sınavı geçemedeniz"+":"+" "+puan;
   }
}