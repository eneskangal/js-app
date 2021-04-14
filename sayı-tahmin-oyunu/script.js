var randomsayı=Math.floor(Math.random() * 100) + 1;
var sayac=0;
while (true){
    sayac+=1
    sayi=parseInt(prompt("1 ile 100 arasında değer girin (0 çıkış):"));
    if(sayi==0){
        alert("Oyunu İptal Ettiniz")
        break
    }
    else if (sayi < randomsayı){
        alert("Daha Yüksek Bir Sayı Girin.")
        continue
    }
    else if (sayi > randomsayı){
        alert("Daha Düşük Bir Sayı Girin.")
        continue
    }
    else{
        alert("sayı:"+" "+sayi);
        alert("sayac:"+" "+sayac);
    }
}
        
    