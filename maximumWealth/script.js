let maximumWealth= function(accounts){
    let toplam=0
    let ikinciToplam=0
    for(let i=0; i<accounts.length; i++){
        console.log(toplam, ikinciToplam)
        toplam=0       
        for(let c=0; c<accounts[i].length; c++){
            toplam+=accounts[i][c]
        }
        if(toplam>=ikinciToplam){            
            toplam=toplam
            ikinciToplam=toplam
        }
        else{
            toplam=ikinciToplam            
        }
    }
    return toplam    
}