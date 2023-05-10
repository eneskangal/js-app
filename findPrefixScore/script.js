let findPrefixScore= function(nums){
    let data=[]
    let yeni=0
    let max  
    let maxArray
    let yeniArray
    for(let i=0; i<nums.length; i++){
        if(maxArray==undefined){
            maxArray=[nums[i]]
            max=maxArray[0]
        }
        else{
            yeniArray=[nums[i]]
            if(maxArray[0]>=yeniArray[0]){
                max=maxArray[0]
            }
            else{
                maxArray=yeniArray
                max=yeniArray[0]
            }
        }
        yeni+=nums[i]+max
        data.push(yeni)       
    }
    return data    
}