function ciftMi(x){
    return x % 2 == 0
}
 
var toplam=0;
var sayac=0;
var baslangic =parseInt(prompt("Başlangıç Sayısı:"));
var bitis = parseInt(prompt("bitis Sayısı:"));
for(sayi=baslangic; sayi<bitis+1; sayi++){
    if(ciftMi(sayi)){
        toplam=toplam+sayi;
        sayac=sayac+1;
    }
}
document.write("ortalama:"+" "+toplam/sayac)