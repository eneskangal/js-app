function dikdortgenAlan(genislik, yukseklik){
    var  alan = genislik * yukseklik;
    alert ("alan:"+" " +alan)
    return alan
}
 
var gen = parseInt(prompt("Genişlik"));
 
var yuk = parseInt(prompt("Yükseklik:"));
 
dikdortgenAlan(gen, yuk)