let frequencySort= function(s){
    let data=[]
    let data2=[]
    let data3=[]
    let kelime=""    
    for(let i=0; i<s.length; i++){
        if(data.includes(s[i])){
            data2[data.indexOf(s[i],0)]+=1
        }
        else{
            data.push(s[i])
            data2.push(1)
        }
    }
    data3=data3.concat(data)
    while(data2.length>0){
        let c=0       
        let max=Math.max(...data2)               
        let index=data2.indexOf(max,0)        
        for(c; c<data2[index]; c++){                       
            kelime+=data[index]
        }
        data2.splice(index,1)
        data.splice(index,1)               
    }
    return kelime 
}