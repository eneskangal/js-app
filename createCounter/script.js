let createCounter= function(n){
    let deger=-1    
    return function(){
        deger++
        return n+deger              
    }
}