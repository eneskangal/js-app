let searchMatrix = function(matrix, target){
    for(let i=0; i<matrix.length; i++){
        if(matrix[i].indexOf(target)>-1){
            return true
        }
    }
    return false
}