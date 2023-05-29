let numIdenticalPairs= function(nums){
    let count=0
    let data=[]
    let index=0
    for(let i=0; i<nums.length; i++){
        let deger=i+1
        let filter=nums.filter((t, deger)=>t==nums[i])        
        if(filter.length>1){            
            count+=filter.length-1
        }
    }
    return count/2   
}