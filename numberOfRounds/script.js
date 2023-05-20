let numberOfRounds= function(loginTime, logoutTime){     
    let ilkZaman=new Date(Date.UTC(2023, 04, 19, loginTime[0]+loginTime[1], loginTime[3]+loginTime[4], 0, 0, +3))
    let ikinciZaman=new Date(Date.UTC(2023, 04, 19, logoutTime[0]+logoutTime[1], logoutTime[3]+logoutTime[4], 0, 0, +3))
    if(ikinciZaman-ilkZaman<0){
        let degisken4=ikinciZaman.getDate()
        ikinciZaman.setDate(degisken4+1)       
    }       
    if(ilkZaman.getMinutes()%15==0){
        let degisken3=ikinciZaman.getMinutes()-ikinciZaman.getMinutes()%15
        if(ikinciZaman.getMinutes()%15!=0){
           ikinciZaman.setMinutes(degisken3)                                  
        }
    }
    else{        
        let degisken=15-ilkZaman.getMinutes()%15       
        let degisken2=ikinciZaman.getMinutes()-ikinciZaman.getMinutes()%15       
        ilkZaman.setMinutes(ilkZaman.getMinutes()+degisken)
        console.log(ilkZaman)            
        if(ikinciZaman.getMinutes()%15!=0){                                            
            ikinciZaman.setMinutes(degisken2)                                                                                           
        }        
    }
    if((ikinciZaman-ilkZaman)/900000<0){
        ilkZaman=new Date(Date.UTC(2023, 04, 19, loginTime[0]+loginTime[1], loginTime[3]+loginTime[4], 0, 0, +3))
        ikinciZaman=new Date(Date.UTC(2023, 04, 19, logoutTime[0]+logoutTime[1], logoutTime[3]+logoutTime[4], 0, 0, +3))
        if(ikinciZaman-ilkZaman<900000){
            return 0
        }                       
    }    
    return (ikinciZaman-ilkZaman)/900000  
}