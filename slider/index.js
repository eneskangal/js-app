var slayt=document.getElementsByClassName("slayt")
slaytsayısı=slayt.length;
var slaytNo=0;
slaytGoster(slaytNo);
function oncekiSlayt(){
     slaytNo--;
     slaytGoster(slaytNo)
    }

function sonrakiSlayt(){
    slaytNo++;
    slaytGoster(slaytNo)
}


function slaytGoster(n)  {  
        if(n<0){
        slaytNo=slaytsayısı-1;
    }
    if(n>=slaytsayısı){
        slaytNo=0;
    }


    for(i=0; i<slaytsayısı; i++){
        slayt[i].style.display="none";        
    }
    slayt[slaytNo].style.display="block"

}

