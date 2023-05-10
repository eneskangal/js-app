let countDigits= function(num){
    let data=num+""
    data=data.split("")
    let count=0
    for(let i=0; i<data.length; i++){
        if(num%parseInt(data[i])==0){
            count++
        }
    } 
    return count++   
}