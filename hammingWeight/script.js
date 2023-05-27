let hammingWeight= function(n){
    n=BigInt(n).toString(2)    
    n=n.split("")    
    return n.filter(t=>t=="1").length   
}