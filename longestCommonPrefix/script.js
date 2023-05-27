let longestCommonPrefix= function(strs){
    let kelime=""        
    for(let i=0; i<strs[0].length; i++){
        let boolean=true        
        for(let c=1; c<strs.length; c++){            
            if(strs[0][i]!=strs[c][i]){
                boolean=false
            }            
        }
        if(boolean==false){
            i+=strs[0].length-i
        }
        else{
            kelime+=strs[0][i]
        }
    }
    return kelime    
}