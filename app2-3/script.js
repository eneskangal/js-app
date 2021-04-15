var sayilar=[10,11,12,13,14,15,16,17,18,19,20];
var sayilar2=[21,22,23,24,25];
var birlestir = sayilar.concat(sayilar2);
birlestir.forEach(myFunction);

function myFunction(x){
    if(x%4==0){
        alert(x);
    }
}



 
