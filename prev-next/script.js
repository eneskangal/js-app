var counter=1;
document.getElementById("prev").disabled=true;
function next(){
    document.getElementById("progress").style.width=counter*100+"px"
    ++counter;
    if(counter==2){       
        document.getElementById("iki").style.borderColor="blue";
        document.getElementById("prev").disabled=false;
        document.getElementById("prev").style.cursor="pointer";
    }
    else if(counter==4){
        document.getElementById("next").style.cursor="not-allowed"
        document.getElementById("next").disabled=true;
        document.getElementById("dort").style.borderColor="blue";
    }    
    else if(counter==3){
        document.getElementById("uc").style.borderColor="blue";
    }    
}
function prev(){    
    --counter 
    document.getElementById("progress").style.width=counter*100+"px"
    if(counter==3){
        document.getElementById("dort").style.borderColor="gray";
        document.getElementById("next").style.cursor="pointer"
        document.getElementById("next").disabled=false;
    }
    else if(counter==2){
        document.getElementById("uc").style.borderColor="gray";
        document.getElementById("next").disabled=false;
    }
    else if(counter==1){
        document.getElementById("iki").style.borderColor="gray";
        document.getElementById("next").disabled=false;       
    }
    else{
        document.getElementById("prev").style.cursor="not-allowed"
        document.getElementById("prev").disabled=true;
    }
}
