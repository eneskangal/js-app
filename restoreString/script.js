let restoreString= function(s, indices){
    let data=[]
    for(let i=0; i<indices.length; i++){
        data[indices[i]]=s[i]
    }
    return data.join("")    
}