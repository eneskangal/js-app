function enes(){
    var adı=document.getElementById("adı").value;
    var yılı=document.getElementById("yılı").value;
    var turu=document.getElementById("turu").value;  
    if(adı ==""||yılı==""||turu==""){ 
        alert("lütfen boş bırakmayınız");
    } 
    else{
        var tr=document.createElement("tr");    
        tr.innerHTML="<td>"+adı+"</td>"+"<td>"+yılı+"</td>"+"<td>"+turu+"<td/>";   
        var append=document.getElementById("table").appendChild(tr);  
        append.addEventListener("click", function() {
            this.style.textDecoration = "line-through";
        });
        append.addEventListener("dblclick", function() {
            this.style.display = "none";
        });
    }  
}    
