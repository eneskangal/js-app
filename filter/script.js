let filter= function(arr, fn){
    let data=[]
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i],i)){
            data.push(arr[i])
        }
    } 
    return data   
}