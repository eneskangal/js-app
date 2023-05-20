let simplifiedFractions= function(n){
    let data=[]
    let aralarındaAsalMı=function(arr1, arr2){
        let degısken=true
        for(let c=2; c<arr1+1; c++){
            if(arr1%c==0&&arr2%c==0){
                if(c!=arr1||c!=arr2){
                    if(arr1!=1){
                        degısken=false
                        break
                    }                    
                }
            }
        }
        return degısken         
    }
    for(let i=1; i<n; i++){        
        for(let c=i+1; c<n+1; c++){            
            if(aralarındaAsalMı(i,c)){
                data.push(i+"/"+c)
            }
        }
    }
    return data    
}