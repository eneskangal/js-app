let replaceDigits= function(s){
    let kelime=""
    let data=["0","1","2","3","4","5","6","7","8","9"]
    for(let i=0; i<s.length; i++){
        if(data.includes(s[i])){                        
            kelime+=String.fromCharCode(s[i-1].charCodeAt()+parseInt(s[i]))            
        }
        else{
            kelime+=s[i]
        }        
    }
    return kelime    
}