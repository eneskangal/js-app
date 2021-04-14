var sayilar = [18, 22, 15, 85, 65, 30, 10, 20, 32, 34, 28, 101, 5, 4, 32];
var sayac=0;
for (i=0; i<sayilar.length; i++){
  if(sayilar[i]%5==0){
     sayac=sayac+1;
  }  
}
alert("döngü bitti")
alert("sayaç"+" "+ sayac)
