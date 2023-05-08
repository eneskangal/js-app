let angleClock= function(hour, minutes){    
    if(hour>=12){
        let birinciSaat=(hour-12)*30+(minutes/2)
        let birinciDakika=minutes*6        
        if(birinciSaat-birinciDakika>=180){
            return 360-birinciSaat+birinciDakika
        }
        else if(birinciDakika-birinciSaat>=180){
            return 360-birinciDakika+birinciSaat
        }
        else{
            if(birinciSaat>=birinciDakika){
                return birinciSaat-birinciDakika
            }
            else{
                console.log(birinciDakika, birinciSaat)
                return birinciDakika-birinciSaat
            }
        }     
    }
    else{
        let ikinciSaat=hour*30+(minutes/2)
        let ikinciDakika=minutes*6
        if(ikinciSaat-ikinciDakika>=180){
            return 360-ikinciSaat+ikinciDakika
        }
        else if(ikinciDakika-ikinciSaat>=180){
            return 360-ikinciDakika+ikinciSaat
        }
        else{
            if(ikinciSaat>=ikinciDakika){
                return ikinciSaat-ikinciDakika
            }
            else{
                return ikinciDakika-ikinciSaat
            }
        }     
    }   
}