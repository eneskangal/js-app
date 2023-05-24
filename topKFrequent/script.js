let topKFrequent= function(nums, k){
    let data=[]
    let data2=[]
    let data3=[]
    let data4=[]
    for(let i=0; i<nums.length; i++){
        if(data.indexOf(nums[i])>-1){
            let index=data.indexOf(nums[i])
            data2[index]+=1
        }
        else{
            data.push(nums[i])
            data2.push(1)
        }
    }
    let max=Math.max(...data2)
    let index=data2.indexOf(max,0)
    data4.push(data[index])
    data2.splice(index,1)
    data.splice(index,1)
    let c=0
    console.log(max==Math.max(...data2))  
    while(c<k-1){
        max=Math.max(...data2)
        index=data2.indexOf(max,0)
        data4.push(data[index])
        data2.splice(index,1)
        data.splice(index,1)
        c++ 
    }    
    return data4
}