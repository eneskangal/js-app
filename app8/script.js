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
    alert("Tek Sayıların Ortalaması:"+" "+tekToplam/tekAdet);
}
if(ciftAdet!=0){
    alert("Çift Sayıların Ortalaması:"+" "+ciftToplam/ciftAdet);
}