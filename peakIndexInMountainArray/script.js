let peakIndexInMountainArray = function(arr){
    let deger=arr[0]
    for(let i=0; i<arr.length; i++){
        if(deger<=arr[i]){
            deger=arr[i]
        }
    }
    return arr.indexOf(deger)
}