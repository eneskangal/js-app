let nextGreatestLetter= function(letters, target){
    let char=target.charCodeAt()
    for(let i=0; i<letters.length; i++){
        if(char<letters[i].charCodeAt()){
            return letters[i]
        }
    }
    return letters[0]
}