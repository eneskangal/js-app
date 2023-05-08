let searchMatrix= function(matrix, target){
    let boolean=false
    for(let i=0; i<matrix.length; i++){
        for(let c=0; c<matrix[i].length; c++){
            if(matrix[i][c]==target){                               
                boolean=true
                break
            }
        }
    }
    return boolean   
}