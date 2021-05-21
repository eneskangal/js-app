var tekAdet=0;
var ciftAdet=0;
var tekToplam=0;
var ciftToplam=0;
 
var n=parseInt(prompt("Kaç Adet Sayı Girilecek : "));
for(i=0; i<n; i++){
    var sayi=parseInt(prompt("Sayı: "))
    if(sayi%2==0){
        tekAdet+=1
        tekToplam+=sayi
        }
    else{
        ciftAdet+=1
        ciftToplam+=sayi
    }
    }
if(tekAdet!=0){
    document.write("Tek Sayıların Ortalaması:"+" "+tekToplam/tekAdet+"<br>");
}
if(ciftAdet!=0){
    document.write("Çift Sayıların Ortalaması:"+" "+ciftToplam/ciftAdet);
}