let finalValueAfterOperations= function(operations){
    let count=0   
    for(let i=0; i<operations.length; i++){
        if(operations[i].indexOf("+")>-1){
            if(operations[i].indexOf("-")==-1){
                count++
            }
        }
        else if(operations[i].indexOf("-")>-1){
            if(operations[i].indexOf("+")==-1){
                count--
            }
        }
    }
    return count   
}