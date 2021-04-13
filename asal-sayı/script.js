var sayac=0;
var sayi=parseInt(prompt('sayı giriniz'));
for (i=2; i<sayi; i++)
      if(sayi%i==0){
            sayac=sayac+1;
            break;
        }
if(sayac!=0){
      alert("Sayı Asal Değil")
      }
else{
      alert("Sayı Asal");
    }