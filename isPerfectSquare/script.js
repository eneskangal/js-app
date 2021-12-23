let nums=2**31-1
let isPerfectSquare = function(num){
    for(let i=1; i<=2**31-1; i++){
        let deger=i*i
        if(deger/num==1){
            return true
        }
        else{
            if(i==num){
                return false
            }
        }
    }         
}
console.log(isPerfectSquare(nums))