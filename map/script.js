let map= function(arr, fn){
    let data=[]  
    for(let i=0; i<arr.length; i++){       
        data.push(fn(arr[i],i))
    }  
    return data  
}