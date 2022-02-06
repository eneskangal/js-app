let isPowerOfFour= function(n){
    for(let i=-31; i<31; i++){
        if(4**i==n){
            return true
        }
    }
    return false
}