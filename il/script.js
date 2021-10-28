var il=document.getElementById("iller");
var ilceler=document.getElementById("ilceler");
fetch("il.json")
.then(response =>response.json())
.then(cevap =>fonksiyon(cevap))
function fonksiyon(cevap){
    for(i=0; i<cevap.data.length; i++){
        var div=document.createElement("div");
        div.innerHTML=cevap.data[i].il_adi;
        il.appendChild(div);
        div.setAttribute("class","div");                  
    }
    var divs=document.getElementsByClassName("div");  
    for(i=0; i<divs.length; i++){
        divs[i].onclick=function(e){
            fonksiyon2(e.target.innerHTML, cevap);
        }
    }
}
function fonksiyon2(data2,digerdata){
    let i=0
    while(i<digerdata.data.length){
        if(digerdata.data[i].il_adi==data2){
            var j=0;
            while(j<digerdata.data[i].ilceler.length){ 
                var div=document.createElement("div");
                div.innerHTML=digerdata.data[i].ilceler[j].ilce_adi;
                ilceler.appendChild(div);
                j++;                                                  
            }                      
            break;
        }        
        else{
            i++;
        }
    ilceler.innerHTML="";         
    } 
}
