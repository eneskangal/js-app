let areOccurrencesEqual= function(s){
    let data=[]
    let data2=[]
    for(let i=0; i<s.length; i++){
        if(data.includes(s[i])){
            data2[data.indexOf(s[i],0)]+=1
        }
        else{
            data.push(s[i])
            data2.push(1)
        }
    }
    let sıfırIndeks=data2[0]
    let boolean=true
    for(let c=1; c<data2.length; c++){
        console.log(data2[c], sıfırIndeks)
        if(data2[c]!=sıfırIndeks){
            boolean=false
            break
        }
    }    
    return boolean     
}