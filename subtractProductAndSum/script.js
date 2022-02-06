let subtractProductAndSum = function(n){
    let toplam1=1
    let toplam2=0
    n+=""
    for(let i=0; i<n.length; i++){
        toplam1=toplam1*eval(n[i])
    }
     for(let k=0; k<n.length; k++){
        toplam2+=eval(n[k])
    }
    return toplam1-toplam2
}