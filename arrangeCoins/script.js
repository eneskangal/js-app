let arrangeCoins= function(n){
    let makam=0
    let yeni=n
    if(n==1){
        return 1
    }
    for(let i=1; i<yeni+1; i++){        
        if(n>=i){
            n-=i
            makam++
        }
        else{
            return makam
        }
    }
}