let dominantIndex= function(nums){
    let bir=-1111111; let iki=-1111111; let index;
    for(let i=0; i<nums.length; i++){
        if(bir<nums[i]){
            iki=bir
            bir=nums[i]
            index=i
        }
        else if(iki<nums[i]){
            iki=nums[i]
        }
    }    
    return bir>=iki*2 ? index : -1    
}