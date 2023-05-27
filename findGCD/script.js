let findGCD= function(nums){
    let min=Math.min(...nums)
    let max=Math.max(...nums)
    let deger=0
    for(let i=1; i<max+1; i++){
        if(max%i==0&&min%i==0){
            deger=i            
        }
    }
    return deger  
}