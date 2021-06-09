var sayı=parseInt(Math.random()*6);
var kutular=document.getElementsByClassName("kutu")


if(sayı==1){
    kutular[4].innerHTML="X";
}
else if(sayı==2){
    kutular[0].innerHTML="X";
    kutular[2].innerHTML="X";
}
else if(sayı==3){
    kutular[0].innerHTML="X";
    kutular[2].innerHTML="X";
    kutular[4].innerHTML="X";
}
else if(sayı==4){
    kutular[0].innerHTML="X";
    kutular[2].innerHTML="X";
    kutular[6].innerHTML="X";
    kutular[8].innerHTML="X";
}
else if(sayı==5){
    kutular[0].innerHTML="X";
    kutular[2].innerHTML="X";
    kutular[4].innerHTML="X";
    kutular[6].innerHTML="X";
    kutular[8].innerHTML="X";
}
else{
    kutular[0].innerHTML="X";
    kutular[3].innerHTML="X";
    kutular[6].innerHTML="X";
    kutular[2].innerHTML="X";
    kutular[5].innerHTML="X";
    kutular[8].innerHTML="X";
}
