let findDelayedArrivalTime= function(arrivalTime, delayedTime){
    let calculate=arrivalTime+delayedTime
    if(calculate>=24){
        return calculate-24
    }
    return calculate
}