let countHousePlacements= function(n){
    let data=[1,1]
    let toplam      
    for(let i=0; i<n; i++){        
        toplam=BigInt(BigInt(data[data.length-1])+BigInt(data[data.length-2]))            
        data.push(toplam)       
    }
    return toplam**BigInt(2)%BigInt(1000000007)     
}