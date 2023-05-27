let checkIfPangram= function(sentence){
    let data=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","w","x","y","z"]
    let data2=[]
    let count=0
    for(let i=0; i<sentence.length; i++){
        if(data.includes(sentence[i])){
            if(data2.includes(sentence[i])==false){
                data2.push(sentence[i])
                count++
            }            
        }        
    }
    return count>=26 ? true : false
}