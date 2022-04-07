let optimalDivision = function(nums){
    let kelime=""
    if(nums.length==1){
        kelime+=nums[0]
    }
    else if(nums.length==2){
        kelime+=nums[0]+"/"+nums[1]
    }
    else{
        for(let i=0; i<nums.length; i++){
            if(i==0){
                kelime+=nums[i]+"/("
            }
            else if(i!=0&&i!=nums.length-1){
                kelime+=nums[i]+"/"
            }
            else{
                kelime+=nums[i]+")"
            }
        }
    }    
    return kelime
}