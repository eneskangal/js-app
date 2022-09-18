let runningSum= function(nums){
    let data=[]
    let deger=0
    for(let i=0; i<nums.length; i++){
        data.push(deger+=nums[i])
    }
    return data
}