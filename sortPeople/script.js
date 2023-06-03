let sortPeople= function(names, heights){
    let data=[]
    let yedek=[]
    yedek=yedek.concat(heights)
    heights=heights.sort((a,b)=>{return b-a})    
    for(let i=0; i<heights.length; i++){               
        data.push(names[yedek.indexOf(heights[i],0)])
    }    
    return data    
}