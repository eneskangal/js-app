function enes(){
    var saat=new Date().getHours();
    var dakika=new Date().getMinutes();
    var saniye=new Date().getSeconds();
    if(dakika <10){
        dakika="0"+dakika;
    }   
    if(saniye <10){
        saniye="0"+saniye;
    }
    document.getElementById("saat").innerHTML=saat+":"+dakika+ ":"+ saniye;
   }
setInterval(enes, 1000);