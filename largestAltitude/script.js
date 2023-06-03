let largestAltitude= function(gain){
    let data=[0]
    for(let i=0; i<gain.length; i++){
        console.log(data)
        if(gain[i]<=data[data.length-1]){
            data.push(data[data.length-1]+(gain[i]))
        }
        else{
            data.push(data[data.length-1]+(gain[i]))
        }
    }       
    return Math.max(...data)    
}