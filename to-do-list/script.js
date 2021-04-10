function enes(){
    var text=document.getElementById("text").value;
    var li=document.createElement("li");
    li.innerHTML=text;
    var appen=document.body.appendChild(li)
    appen.addEventListener("click", function(){
        this.style.textDecoration="line-through";
    })
    appen.addEventListener("dblclick", function(){
        this.style.display="none";
    })
}
