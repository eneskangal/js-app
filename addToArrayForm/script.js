let addToArrayForm= function(num, k){
    let data=[]
    let deger=BigInt(BigInt(num.join(""))+BigInt(k))
    deger+=""
    deger=deger.split("").map(t=>data.push(BigInt(t)))    
    return data
}