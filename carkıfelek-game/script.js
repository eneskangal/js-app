function cevir(){
    var random=parseInt(Math.random()*360);
    var derece=random;    
    document.getElementById("yuvarlak").style.transform = "rotate("+derece+"deg)"; 
    if(derece<46){
        setTimeout(function(){alert("100 puan")}, 3000)        
    }
    else if(derece<91 &&derece>45){
        setTimeout(function(){alert("1000 puan")}, 3000)  
    }
    else if(derece<136 &&derece>90){
        setTimeout(function(){alert("10000 puan")}, 3000)  
    }
    else if(derece<181 &&derece>135){
        setTimeout(function(){alert("200 puan")}, 3000)  
    }
    else if(derece<226 &&derece>180){
        setTimeout(function(){alert("pas")}, 3000)  
    }
    else if(derece<271 &&derece>225){
        setTimeout(function(){alert("5000 puan")}, 3000)  
    }
    else if(derece<316 &&derece>270){
        setTimeout(function(){alert("500 puan")}, 3000)  
    }
    else{
        setTimeout(function(){alert("2000 puan")}, 3000)  
    }
}