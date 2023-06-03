let numJewelsInStones= function(jewels, stones){
    let count=0
    jewels=jewels.split("")
    stones=stones.split("")
    for(let i=0; i<jewels.length; i++){
        let filter=stones.filter(t=>t==jewels[i])
        count+=filter.length
    }
    return count    
}