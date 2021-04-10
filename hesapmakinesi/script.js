var butonlar=document.getElementsByTagName("button");
for(i=0; i<butonlar.length; i++){
  butonlar[i].onclick=hesapla;
}
function hesapla(){
  var deger=this.innerHTML;
  var sonuc=document.getElementById("sonuc");
  if(deger=="="){
    try {
      sonuc.value=eval(sonuc.value)
    } catch (error) {
      sonuc.value="0";
    }
    return;    
  }
  sonuc.value +=deger
}