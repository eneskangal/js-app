let maxProduct= function(nums){
    let num=0
    let num2=0 
    for(let i=0; i<nums.length; i++){
        if(nums[i]>=num){
            num2=num            
            num=nums[i]
        }
        else if(nums[i]>=num2){
            num2=nums[i]
        }
    }
    return (num-1)*(num2-1)   
}