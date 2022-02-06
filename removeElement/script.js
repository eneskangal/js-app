let removeElement = function(nums, val){
    let filter=nums.filter(t=>t==val)
    for(let i=0; i<filter.length; i++){
        let index=nums.indexOf(filter[0])
        nums.splice(index,1)
    }
    return nums.length
};