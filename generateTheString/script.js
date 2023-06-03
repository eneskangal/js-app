let generateTheString= function(n){
    let kelime=""
    if(n%2==1){        
        for(let i=1; i<=n; i++){
            kelime+="a"
        }
    }
    else{
        kelime+="a"
        for(let i=1; i<n; i++){
            kelime+="b"
        }
    }
    return kelime    
}