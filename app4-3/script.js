var toplam=0;
while (true){
  sayi = parseFloat(prompt("Bir sayı girin: "));
  if (sayi ==0){
    break;
    }
    toplam+=sayi;
}

document.write(toplam)