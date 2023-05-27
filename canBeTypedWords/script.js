let canBeTypedWords= function(text, brokenLetters){
    text=text.split(" ")
    let count=0    
    for(let i=0; i<text.length; i++){
        let boolean=true
        for(let c=0; c<brokenLetters.length; c++){
            if(text[i].indexOf(brokenLetters[c],0)>-1){
                c+=brokenLetters.length-c
                boolean=false                
            }                        
        }
        if(boolean){
            count++
        }
    }
    return count    
}