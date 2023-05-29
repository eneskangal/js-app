let shuffle= function(nums, n){
    let data=[]
    for(let i=0; i<nums.length-n; i++){
        data.push(nums[i])
        data.push(nums[i+n])
    }
    return data   
}