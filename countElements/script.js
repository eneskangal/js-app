let countElements= function(nums){
    let count=0
    let max=Math.max(...nums)
    let min=Math.min(...nums)
    for(let i=0; i<nums.length; i++){
        if(nums[i]<max&&nums[i]>min){
            count++
        }
    }
    return count
}