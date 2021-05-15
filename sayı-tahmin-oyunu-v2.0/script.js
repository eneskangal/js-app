var sayaç=1;
var random=parseInt(Math.random()*100);
function basla(){    
    document.getElementById("bilgi").innerHTML="bilgisayarın tahmini:"+" "+random;
}
function tebrikler(){
    document.getElementById("bilgi").innerHTML="Bilgisayar"+" "+ sayaç+" " +"Tahminde Bildi!";
}
function asagı(){
    random-=parseInt(Math.random()*25); 
    if(random<0){
        random=0;
    }  
    sayaç++;
    document.getElementById("bilgi").innerHTML="bilgisayarın tahmini:"+" "+random;
}
function yukarı(){
    random=random+parseInt(Math.random()*25);   
    if(random>100){
        random=100;
    } 
    sayaç++;
    document.getElementById("bilgi").innerHTML="bilgisayarın tahmini:"+" "+random;
}