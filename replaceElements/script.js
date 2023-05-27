let replaceElements= function(arr){   
    for(let i=0; i<arr.length; i++){
        let array=arr.slice(i+1, arr.length)
        let max=Math.max(...array)
        if(i==arr.length-1){
            arr[i]=-1
        }
        else{
            arr[i]=max
        }        
    }
    return arr 
}