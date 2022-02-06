let minPartitions = function(n){
    let sayi=0
    for(let i=0; i<n.length; i++){
        if(sayi<parseInt(n[i])){
            sayi=parseInt(n[i])
        }
    }
    return sayi   
}
console.log(minPartitions("123"))