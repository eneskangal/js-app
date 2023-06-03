let sumOfMultiples= function(n){
    let deger=0
    for(let i=3; i<n+1; i++){
        if(i%3==0||i%5==0||i%7==0){
            deger+=i
        }
    }
    return deger    
}