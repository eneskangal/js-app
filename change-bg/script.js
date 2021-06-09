var renkArray=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
var renkSecim="#";
var secilenBg;
function changeBg(){
    for(i=0; i<6; i++){  
        var random= parseInt(Math.random()*15);    
        renkSecim+=renkArray[random]
    }  
    document.body.style.backgroundColor=renkSecim;
    renkSecim="#";
}
