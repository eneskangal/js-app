let numSub= function(s){
    let count=0
    let sayı=0
    for(let i=0; i<s.length; i++){                   
        if(s[i]!="0"){                    
            sayı++
        }       
        else{          
            count+=(sayı/2+0.5)*(sayı)              
            sayı=0                          
        }
    }   
    count+=(sayı/2+0.5)*(sayı)  
    if(10000000<=count){
        let modul=10**9+7
        return count%modul    
    }
    return count
 }