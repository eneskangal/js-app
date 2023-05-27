let majorityElement= function(nums){
    let data=[]
    let data2=[]
    for(let i=0; i<nums.length; i++){
        if(data.includes(nums[i])){
            data2[data.indexOf(nums[i],0)]+=1
        }
        else{
            data.push(nums[i])
            data2.push(1)
        }
    }
    return data[data2.indexOf(Math.max(...data2),0)]   
}