let isThree = function(n){
    let data=[]
    for(let i=1; i<=n; i++){
        if(n%i==0){
            data.push(i)
        }
    }
    if(data.length==3){
        return true
    }
    else{
        return false
    }
}