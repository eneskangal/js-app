let corpFlightBookings= function(bookings, n){
    let data=[]
    for(let i=0; i<n; i++){
        data.push(0)
    }
    for(let c=0; c<bookings.length; c++){
        for(let f=0; f<1; f++){
            for(let k=bookings[c][f]; k<bookings[c][f+1]+1; k++){
                data[k-1]+=bookings[c][f+2]
            }
        }
    }
    return data
}