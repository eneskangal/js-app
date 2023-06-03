let decompressRLElist= function(nums){
    let data=[]
    for(let i=0; i<nums.length-1; i+=2){
        for(let c=0; c<nums[i]; c++){            
            data.push(nums[i+1])
        }
    }
    return data    
}