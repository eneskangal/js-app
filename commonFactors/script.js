let commonFactors= function(a, b){
    let count=0
    for(let i=1; i<b+1; i++){
        if(a%i==0&&b%i==0){
            count++
        }
    }
    return count    
}