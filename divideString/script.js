let divideString= function(s, k, fill){
    let data=[]
    for(let i=0; i<=(s.length/k)*k-1; i+=k){
        data.push(s.slice(i,i+k))
    }
    if(data[data.length-1].length<k){
        let yeni=data[data.length-1].length        
        for(let c=0; c<k-yeni; c++){
            data[data.length-1]+=fill
        }
    }
    return data  
}