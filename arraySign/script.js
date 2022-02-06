let arraySign = function(nums){
    let carp=1
    for(let i=0; i<nums.length; i++){
        carp=carp*nums[i]
    }
    if(carp>0){
        return 1
    }
    else if(carp<0){
        return -1
    }
    else{
        return 0
    }
}