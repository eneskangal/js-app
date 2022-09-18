let containsDuplicate= function(nums){
    let data=[]
    for(let i=0; i<nums.length; i++){
        let parse=parseInt(nums[i])        
        if(data[parse]==undefined){
            data[parse]=nums[i]
        }
        else{
            return true
        }
    }
    return false
}