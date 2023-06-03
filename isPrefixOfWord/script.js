let isPrefixOfWord= function(sentence, searchWord){
    sentence=sentence.split(" ")
    let index=-1
    for(let i=0; i<sentence.length; i++){
        if(sentence[i].slice(0,searchWord.length)===searchWord){
            index=i+1
            break
        }
    }
    return index    
}