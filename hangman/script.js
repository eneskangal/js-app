var array=["dede", "baba", "enes","makbule","bekir", "murat", "eee"];
var random=parseInt(Math.random()*array.length);
var split=array[random].split("");
var splitLength=split.length;
var sayaç=0;
for(i=0; i<splitLength; i++){
    var li=document.createElement("div");
    li.style.border="2px solid black";
    li.style.width="25px"
    li.style.height="30px"
    li.style.display="flex"
    li.style.alignItems="center"
    li.style.justifyContent="center"    
    var text=document.createTextNode(split[i]);    
    var deneme = li.innerHTML.split[i]      
    document.getElementById("enes").appendChild(li);    
}
function enes2(x){
    document.getElementById("enes").children[x].innerHTML=split[x];
    for(i=0; i<splitLength-1; i++){
        if(document.getElementById("enes").children[i].innerHTML !=""){}
    }   
    if(document.getElementById("enes").lastChild.innerHTML!=""){
    alert("kazandın");
    location.reload(); 
}   
} 

function enes(x){    
    x=x.innerHTML;
    if(split.includes(x)){
    enes2(split.indexOf(x))
    enes2(split.lastIndexOf(x))
    }
    else{
        sayaç++;
        alert(sayaç+"hata");   
        if(sayaç==6){
            alert("cevap"+": "+array[random]);
            location.reload();
        }
    }
}



