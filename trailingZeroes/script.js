let trailingZeroes= function(n){
    let deger=0    
    if(n<5){
        return 0
    }
    else{
        while(n>0){            
            if(n<25){                
                return deger+=Math.trunc(n/5)
            }
            else{                
                deger+=Math.trunc(n/5)
                n=Math.trunc(n/5)
            }
        }
    }
}