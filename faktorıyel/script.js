var fak=1;
var sayı=parseInt(prompt("sayı giriniz"));
if(sayı<0){
    document.write("lütfen negatif veya harf girmeyiniz")
}
else{
    for(i=1; i<sayı; i++){
        fak+=fak*i;
    }
    document.write(fak);
}
