var boy=parseInt(prompt("boyunuzu giriniz (cm)"))
boy=boy/100;
var kilo=parseInt(prompt("kilonuzu giriniz"))
var vhki=kilo/(boy*boy);
if(vhki<=18){
    alert("çok zayıfsınız")
}
else if(vhki>18 && vhki<=25){
    alert("kilolu")
}
else if(vhki>25 && vhki<=30){
    alert("çok kilolu")
}
else if(vhki>30 && vhki<=40){
    alert("obez")
}
else if(vhki>=40){
    alert("ölümcül obez")    
}
else{
    alert("yanlış değer")
}

