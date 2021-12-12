function pol(str){
    str+=""
    str=str.split("")
    let i=str.length-1
    let k=0 
    while(i>=0){
        if(str[i]==str[k]){
            if(i==0){
                return true
            }
            else{
                i--
                k++
            }            
                       
        }
        else{
            return false
        }
    }  
}
console.log(pol(519))