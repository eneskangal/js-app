function ArtıkYıl(yıl){
    var artık=false;
    if (yıl%400==0 || (yıl%4==0 && yıl%100!=0))
    { 
        artık=true;
    }
    return artık;
}
 
function YılınGünü(Ay,Gün,Yıl){
    var günler=[31,28,31,30,31,30,31,31,30,31,30,31]
    if (ArtıkYıl(Yıl)){
        günler[1]=29;
    }
    var sıra=0
    for (a=0; a<Ay-1; a++){
        sıra+=günler[a]
    }
    sıra+=Gün
    return sıra

}
 
document.write(YılınGünü(4,13,2021));