let findSpecialInteger = function(arr){
    for(let i=0; i<arr.length; i++){
        let filter=arr.filter(t=>t==arr[i])
        let deger=arr.length*25/100
        if(filter.length>deger){
            return filter[0]
        }
    }
}