let dailyTemperatures = function(temperatures) {
    let data=[]
    for(let i=0; i<temperatures.length; i++){
        let k=i+1
        let length=data.length
        while(k<temperatures.length){            
            if(temperatures[i]<temperatures[k]){ 
                let deger=temperatures.length-k
                data.push(k-i)
                k+=deger
            }            
            k++
        }
        if(length==data.length){
            data.push(0)
        }
    }
    return data
}