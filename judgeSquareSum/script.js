let judgeSquareSum= function(c){
    let i=0    
    while(i*i<=c){
        let kalan=c
        kalan=c-(i*i)
        kalan=Math.sqrt(kalan)
        kalan+=""        
        if(kalan.indexOf(".")==-1){
            return true
        }                      
        i++
    }
    return false 
}