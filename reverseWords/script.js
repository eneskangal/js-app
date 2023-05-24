let reverseWords= function(s){
    s=s.trim()    
    s=s.split(" ").reverse()    
    let kelime=""
    for(let i=0; i<s.length; i++){           
        if(i==s.length-1){
            kelime+=s[i]
        }
        else if(s[i]!=""){
            kelime+=s[i]+" "
        }
    }
    return kelime
}