var nesne=document.getElementById("nesne");
var sayac=0;
nesne.onmouseover=function(e){
    sayac++;
    var xpos=parseInt(Math.random()*1000)
    var ypos=parseInt(Math.random()*800)
    console.log(xpos)
    console.log(ypos)
    nesne.style.marginLeft=xpos+"px"
    nesne.style.marginTop=ypos+"px"
    nesne.style.width=this.clientWidth+10+"px";
    nesne.style.width=this.clientheight+10+"px";
}
nesne.onclick=function(){
    alert(sayac+"."+" "+"kez tıklandın")
}
   

  

