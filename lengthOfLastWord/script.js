let lengthOfLastWord = function(s){ 
    if(s.length==1){
        return 1
    }
    else{
        for(let i=s.length-1; i>-1; i--){
            if(s[i]!=" "){
                for(let k=i; k>-1; k--){
                    if(s[k]==" "){
                       return i-k
                    }
                    else if(k==0){
                        return i+1+k
                    }                   
                }
            }        
        } 
    }          
}
console.log(lengthOfLastWord(" a aaa   "))