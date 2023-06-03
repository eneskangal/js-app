let maximumCount= function(nums){
    let count=0
    let count2=0
    for(let i=0; i<nums.length; i++){
        if(nums[i]>0){
            count++
        }
        else if(nums[i]<0){
            count2++
        }
    }
    return count>=count2 ? count : count2    
}