let coloredCells= function(n){
    let count=0
    for(let i=0; i<n; i++){
        if(i==0){
            count+=4**i
        }
        count+=4*i
    }
    return count       
}