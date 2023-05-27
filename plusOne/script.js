let plusOne= function(digits){
    digits=BigInt(digits.join(""))+BigInt(1)
    digits=digits.toString().split("")
    digits.map((t,index)=>{
        t[index]=parseInt(t[index])
    })
    return digits
}