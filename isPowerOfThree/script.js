let isPowerOfThree = function(n){
    for(let i=-31; i<31; i++){
        if(3**i==n){
            return true
        }
    }
    return false
}