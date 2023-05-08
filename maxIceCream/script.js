let maxIceCream= function(costs, coins){
    let count=0
    costs=costs.sort(function(a, b){return b - a})
    costs=costs.reverse()
    for(let i=0; i<costs.length; i++){
        if(costs[i]<=coins){
            coins-=costs[i]
            count++
        }
        else{
            break            
        }
    }
    return count
}