let countSeniors= function(details){
    let count=0
    for(let i=0; i<details.length; i++){        
        if(parseInt(details[i][11]+details[i][12])>60){
            console.log(details[i][11])
            count++
        }                  
    }
    return count    
}