let thousandSeparator= function(n){
    n=n+""
    let deger=4
    kelime=""
    for(let i=n.length-1; i>-1; i--){
        console.log(kelime)
        if(i==n.length-deger){
            kelime+="."+n[i]
            deger+=3
        }
        else{
            kelime+=n[i]
        }
    }
    return kelime.split("").reverse().join("") 
}