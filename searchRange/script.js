let searchRange= function(nums, target){
    let data=[]
    let ilk=nums.indexOf(target)
    let son=nums.lastIndexOf(target)
    if(ilk<0){
        data.push(-1)
        data.push(-1)
    }
    else{
        data.push(ilk)   
        if(son<0){            
            data.push(ilk)
        }
        else{            
            data.push(son)
        }
    }
    return data
}