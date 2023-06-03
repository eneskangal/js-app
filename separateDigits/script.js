let separateDigits= function(nums){
    let data=[]
    for(let i=0; i<nums.length; i++){
        let splitlesmisHali=nums[i]+""
        splitlesmisHali=splitlesmisHali.split("")
        for(let c=0; c<splitlesmisHali.length; c++){
            console.log(splitlesmisHali[c])
            data.push(parseInt(splitlesmisHali[c]))
        }               
    }
    return data
}