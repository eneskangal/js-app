var sayi = parseInt(prompt('Sayıyı Girin:'));
var tekToplam=0
var ciftToplam=0
for (i=1; i<=sayi; i++){
      if(i%2==0){
            ciftToplam+=i
      }
      else{
            tekToplam+=i
      }
    }
document.write("Tek Sayıların Toplamı:"+" "+ tekToplam+" ");
document.write("Çift Sayıların Toplamı:"+" "+ciftToplam);