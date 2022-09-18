let triangularSum= function(nums){
    let data=nums    
    while(data.length!=1){
        let yeni=[]
        for(let i=0; i<data.length-1; i++){
            if(data[i]+data[i+1]>9){
                let sayı=data[i]+data[i+1]
                sayı%=10
                yeni.push(sayı)
            }
            else{
                yeni.push(data[i]+data[i+1])
            }
        }        
        data=yeni
    }
    return data[0]
}