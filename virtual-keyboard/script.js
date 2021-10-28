var buttonlar=document.querySelectorAll("button");
buttonlar.forEach(button => button.addEventListener("click", function(){
    if(button.innerHTML=="shift"||button.innerHTML=="SHIFT"){ 
        document.getElementById("input").value="";
    }
    else if(button.innerHTML=="enter"||button.innerHTML=="ENTER"){
        document.getElementById("input").value="";
    }
    else if(button.innerHTML=="backspace"||button.innerHTML=="BACKSPACE"){
        
        //document.getElementById("input").value="";
    }
    else{
    document.getElementById("input").value+=button.innerHTML
    }
}));
function shift(){
    buttonlar.forEach(button => buyutmekucutme(button)) 
}
function buyutmekucutme(e){   
    if(e.innerHTML==e.innerHTML.toLowerCase()){
        e.innerHTML=e.innerHTML.toUpperCase()
    }
    else{
        e.innerHTML=e.innerHTML.toLowerCase()
    }
}
function backspace(){
    var metin=document.getElementById("input").value;
    document.getElementById("input").value = metin.slice(0,-1);

   
}