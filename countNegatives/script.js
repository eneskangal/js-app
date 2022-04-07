let countNegatives = function(grid){
    let deger=0
    for(let i=0; i<grid.length; i++){
        for(let k=0; k<grid[i].length; k++){
            if(grid[i][k]<0){
                deger++
            }
        }
    }
    return deger
}