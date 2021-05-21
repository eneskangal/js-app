var kısa=parseInt(prompt("kısa kenarı giriniz"));
var uzun=parseInt(prompt("uzun kenarı giriniz"));
if(kısa==0 || uzun==0){
    alert("yanlış değer girdiniz")
}
else{
var alan=kısa*uzun;
var cevre=2*(kısa+uzun);
document.write("alan:"+" "+alan+" "); document.write("cevre:"+" "+cevre);
}