let isPowerOfTwo = function(n){
    for(let i=-31; i<32; i++){
        let deger=2**i
        if(deger/n==1){
            return true
        }       
    }
    return false    
}
console.log(isPowerOfTwo())