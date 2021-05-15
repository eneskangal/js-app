var menubar=document.getElementById("menu");
var sepetbar=document.getElementById("sepet");
var resim=document.getElementById("resim").innerHTML;
var adı=document.getElementById("adı").innerHTML;
var fiyatı=document.getElementById("fıyatı").innerHTML;
var sepetresim=document.getElementById("sepetresim");
var sepetadı=document.getElementById("sepetadı");
var sepettoplam=document.getElementById("sepettoplam");
var carp=1;




function menu(){    
    if(menubar.style.display=="none"){
        menubar.style.display="block";
    }
    else{
        menubar.style.display="none"   
    }
}

function sepet(){  
    if(sepetbar.style.display=="none"){
        sepetbar.style.display="block"
    }  
    else{
        sepetbar.style.display="none"   
    }
}

function enes(){
    sepetresim.innerHTML=resim;
    sepetadı.innerHTML=adı;
    sepettoplam.innerHTML=carp*fiyatı;    
    carp++;
}
function exit(){
    sepetbar.style.display="none";
}