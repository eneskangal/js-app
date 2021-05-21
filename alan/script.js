function dikdortgenAlan(genislik, yukseklik){
    var  alan = genislik * yukseklik;
    document.write("alan:"+" " +alan)
    return alan
}
 
var gen = parseInt(prompt("Genişlik"));
 
var yuk = parseInt(prompt("Yükseklik:"));
 
dikdortgenAlan(gen, yuk)