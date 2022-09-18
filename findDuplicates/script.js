let findDuplicates = function(nums){
    let data=[]
    let data2=[]
    for(let i=0; i<nums.length; i++){
        if(data.length==0){
            data.push(nums[i])
        }
        else{
            if(data.includes(nums[i])==true){               
                data2.push(nums[i])
            }
            else{
                data.push(nums[i])
            }
        }        
    } 
    return data2
}