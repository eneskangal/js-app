function topla(){
    var sayı1=parseInt(document.getElementById("sayı1").value);    
    var sayı2=parseInt(document.getElementById("sayı2").value);
    document.getElementById("sonuc").innerHTML=sayı1+sayı2;
}
function cıkarma(){
    var sayı1=parseInt(document.getElementById("sayı1").value);    
    var sayı2=parseInt(document.getElementById("sayı2").value);
    document.getElementById("sonuc").innerHTML=sayı1-sayı2;
}
function carpma(){
    var sayı1=parseInt(document.getElementById("sayı1").value);    
    var sayı2=parseInt(document.getElementById("sayı2").value);
    document.getElementById("sonuc").innerHTML=sayı1*sayı2;
}
function bolme(){
    var sayı1=parseInt(document.getElementById("sayı1").value);    
    var sayı2=parseInt(document.getElementById("sayı2").value);
    document.getElementById("sonuc").innerHTML=sayı1/sayı2;
}