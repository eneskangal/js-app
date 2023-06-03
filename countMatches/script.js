let countMatches= function(items, ruleKey, ruleValue){
    let count=0
    for(let i=0; i<items.length; i++){
        if(ruleKey=="type"){            
            if(items[i][0]==ruleValue){
                count++
            }
        }
        if(ruleKey=="color"){
            if(items[i][1]==ruleValue){
                count++
            }
        }
        else if(ruleKey=="name"){
            if(items[i][2]==ruleValue){
                count++
            }
        }
    }
    return count   
}