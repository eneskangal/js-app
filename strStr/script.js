let strStr= function(haystack, needle){   
    let index=0
    let yeni
    let bool=true    
    while(haystack.indexOf(needle,index)>-1){
        if(bool){
            yeni=haystack.indexOf(needle,index)
            bool=false
        }
        index+=haystack.indexOf(needle,index)+needle.length        
    }
    if(yeni==undefined){
        return -1
    }
    else{
        return yeni
    }
}