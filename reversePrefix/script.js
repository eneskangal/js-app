let reversePrefix= function(word, ch){
    let kelime=""
    let index=word.indexOf(ch)
    if(index==-1){
        return word
    }
    for(let i=index; i>-1; i--){
        kelime+=word[i]
    }
    for(let k=index+1; k<word.length; k++){
        kelime+=word[k]
    }
    return kelime
}