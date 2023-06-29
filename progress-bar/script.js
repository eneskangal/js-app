var progress=document.getElementById("progress");
var yuzdep=document.getElementById("yuzde");
function run(){
    var width=0;
    var yuzde=0;
    var id=setInterval(frame, 100)
    function frame(){
        yuzdep.innerHTML=yuzde+"%";
        progress.style.width=width+"%";
        yuzde++;
        width++;
        if(width==101){
            clearInterval(id)
        }
    }    
}


