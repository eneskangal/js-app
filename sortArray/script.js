let sortArray = function(nums){    
    let newFunction= function(deger){
        let yeni=deger[0]
        for(let k=0; k<deger.length; k++){
            if(yeni>=deger[k]){
                yeni=deger[k]
            }
        }
        return yeni
    }
    let data=[]
    let i=nums.length-1
    for(i; i>-1; i--){
        let min=newFunction(nums)   
        let index=nums.indexOf(min)
        data.push(nums[index])
        nums.splice(index,1)
    }
    return data
}