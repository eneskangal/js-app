let sumBase= function(n, k){
    let sayıyıBaseleme=n.toString(k)
    let sonuc=0
    sayıyıBaseleme=sayıyıBaseleme.split("")
    for(let i=0; i<sayıyıBaseleme.length; i++){
        sonuc+=parseInt(sayıyıBaseleme[i])
    }
    return sonuc
}