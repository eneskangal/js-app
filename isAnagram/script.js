let kelime="enes"
let kelime2="seen"
let isAnagram = function(s, t){
    t=t.split("")
    for(let i=0; i<s.length; i++){
        let index=t.indexOf(s[i])
        if(index==-1){
            return false
        }
        else{
            t.splice(index,1)
        }        
    }
    if(t.length==0){
        return true
    }
    else{
        return false
    }       
}
console.log(isAnagram(kelime,kelime2))