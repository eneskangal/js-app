let reverse = function(x){            
    if(x<0){
        x+=""
        x=x.split("")    
        x=x.reverse()                
        let i
        let toplam=""
        for(i=0; i<x.length-1; i++){       
            toplam=toplam+x[i]
        }
        toplam=toplam*-1
        if(toplam>=2**31||toplam<=-1*(2**31)){
            return 0
        }
        return parseInt(toplam)
    }
    else if(x>=0){
        x+=""
        x=x.split("")    
        x=x.reverse()
        let i
        let toplam=""
        for(i=0; i<x.length; i++){        
            toplam=toplam+x[i]
        }
        if(toplam>=2**31||toplam<=-1*(2**31)){
            return 0
        }
        return parseInt(toplam)        
    }   
}
console.log(reverse(
    1534236469))