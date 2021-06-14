function enes(){
    var value1=document.getElementById("tl");
    var value2=document.getElementById("dolar");
    fetch ("doviz.json")
    .then(x => x.json())
    .then(y =>value2.value=value1.value*y.USD.satis);
}