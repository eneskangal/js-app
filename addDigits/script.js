let addDigits= function(num){
    let deger3=0
    while(num>9){        
        let deger=num+""
        let deger2=0
        for(let i=0; i<deger.length; i++){
            deger2+=parseInt(deger[i])            
        }
        num=deger2
        deger3++
    }
    if(num<10){
        return num
    }
    return deger3
}