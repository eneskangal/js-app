var time=document.getElementById("time");
var score=0;
var köstebekler=document.querySelectorAll(".kostebek");
var scoreText=document.getElementById("score");


function zaman(){
    var enes=30;        
    setInterval(function(){
       enes--
       time.innerHTML=enes;
      if(enes==0){   
           alert("score:"+" "+score)   
           score=0;
           scoreText.innerHTML=score;
           location.reload();
           
       }
    }, 1000)
    
}


function start(){
    zaman();
    yukarı();    
}

function rastgeleKostebek(){
    var random=parseInt(Math.random()*6);
    var random2=parseInt(Math.random()*750);
    setTimeout(function(){köstebekler[random].style.minHeight="25vh"},0)    
    setTimeout(function(){köstebekler[random].style.minHeight="0"},random2)  
}

function yukarı(){
    setInterval(rastgeleKostebek, 1000)
}

köstebekler.forEach(köstebek => köstebek.addEventListener("click", function(){
    score++;
    scoreText.innerHTML=" "+score;        
})

)