let findNumbers= function(nums){  
    let count=0  
    for(let i=0; i<nums.length; i++){
        let deger=nums[i]+""
        if(deger.length%2==0){
            count++
        }
    }
    return count
}