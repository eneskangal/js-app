let leftRightDifference= function(nums){
    let data=[]
    for(let i=0; i<nums.length; i++){
        if(i==0){ 
            data.push(Math.abs(0-nums.slice(0,nums.length).reduce((arr1, arr2)=>{
                return arr1+arr2
            }))-nums[i])                  
        }
        else if(i==nums.length-1){
            data.push(Math.abs(nums.slice(0, i).reduce((arr3, arr4)=>{
                return arr3+arr4
            }))-0)            
        }
        else{
            data.push(Math.abs(nums.slice(0, i).reduce((arr3, arr4)=>{
                return arr3+arr4
            })-nums.slice(i+1, nums.length).reduce((arr1, arr2)=>{
                return arr1+arr2
            })))
        }
    }
    return data
}