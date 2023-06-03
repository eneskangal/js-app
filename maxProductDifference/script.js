let maxProductDifference= function(nums){
    let max=Math.max(...nums)
    nums.splice(nums.indexOf(max,0),1)        
    let max2=Math.max(...nums)
    nums.splice(nums.indexOf(max2,0),1)
    let min=Math.min(...nums)
    nums.splice(nums.indexOf(min,0),1)
    let min2=Math.min(...nums)
    nums.splice(nums.indexOf(min2,0),1)
    return (max*max2)-(min*min2)
}