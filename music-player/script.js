
var audio = new Audio("music.mp3");
var button= document.getElementById("button");
function enes(){   
    var kamil=setInterval(function(){    
        goster += 100/sure
        document.getElementById("points").value = goster;
    },1000)
    if(button.innerHTML=="play"){
        audio.play();
        button.innerHTML="pause"
        var x=document.getElementById("myAudio");
        var d=Math.floor(x.duration/60);
        var s=Math.floor(x.duration%60)       
        document.getElementById("endduration").innerHTML=d+" :"+s;
        var sure = d*60+s;  
        var nokta = document.getElementById("points").value
        var goster = parseInt(nokta)
        
       
    } 
    else if(button.innerHTML=="pause"){
        audio.pause();
        button.innerHTML="play";  
        clearTimeout(kamil) 
    }
}


function ses(){
    if(audio.muted==false){
        audio.muted=true;
    }
    else{
        audio.muted=false
    }
}



  



