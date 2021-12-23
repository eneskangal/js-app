let maxPower = function(s){
    let buyuk=1
    let toplam=1
    for(let i=0; i<s.length; i++){
        if(s[i]==s[i+1]){                     
            toplam++            
        }
        else{            
            if(buyuk<=toplam){                
                buyuk=toplam
                toplam=1
            }
            else{
                toplam=1
            }            
        }                             
    }
    return buyuk       
}
console.log(maxPower("bbccdddhjkkkmmnpqqssttuuuwwxxxyyy"))