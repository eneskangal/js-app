let kthFactor= function(n, k){
    let data=[]
    for(let i=1; i<n+1; i++){
        if(n%i==0){            
            data.push(i)            
        }
        if(i==n){
            if(data[k-1]==undefined){
                return -1
            }
            else{
                return data[k-1]
            }
        }
    }    
}