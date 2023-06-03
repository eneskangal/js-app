let heightChecker= function(heights){
    let count=0
    let yeniHeight=[]
    yeniHeight=yeniHeight.concat(heights)
    let sortlanmısHeights=yeniHeight.sort((a,b)=>{
        return a-b
    })    
    for(let i=0; i<heights.length; i++){               
        if(sortlanmısHeights[i]!=heights[i]){
            count++
        }
    }
    return count       
}