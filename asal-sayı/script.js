var sayac=0;
var sayi=parseInt(prompt('sayı giriniz'));
for (i=2; i<sayi; i++)
      if(sayi%i==0){
            sayac=sayac+1;
            break;
        }
if(sayac!=0){
      document.write("Sayı Asal Değil")
      }
else{
      document.write("Sayı Asal");
    }