var sonuc= document.getElementById("sonuc");
var button= document.getElementsByTagName("button");
for(i=0; i<button.length; i++){
  button[i].onclick=enes;
}
function enes(){
  var değer=this.innerHTML;
  if(değer=="="){
    sonuc.value=eval(sonuc.value);
  }
  else{
    sonuc.value+=değer;
  }
}