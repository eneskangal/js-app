function enes(){
   document.getElementById("button").addEventListener("mouseover", function(){
       this.style.position="relative";
       this.style.left+="30px";
   })
}
 
setInterval(enes() 
    
, 3000);