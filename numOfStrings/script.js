let numOfStrings= function(patterns, word){
    let count=0
    for(let i=0; i<patterns.length; i++){
        if(word.indexOf(patterns[i],0)>-1){
            count++
        }
    }
    return count  
}