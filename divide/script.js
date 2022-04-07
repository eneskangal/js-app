let divide = function(dividend, divisor){
    if(2**31<=dividend/divisor){
        return (2**31-1)
    }
    else{
        return parseInt(dividend/divisor) 
    }   
}