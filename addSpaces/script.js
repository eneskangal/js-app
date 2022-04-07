let addSpaces = function(s, spaces){
    let deger=0
    let kelime=""
    for(let i=0; i<s.length; i++){
        if(i==spaces[deger]){
            kelime+=" "
            kelime+=s[i]
            deger++
        }
        else{
            kelime+=s[i]
        }
    }
    return kelime
}