let smallestNumber= function(num){
    num+=""
    let kelime=""
    let ilk=true
    function yeni(s, search){        
        let array=[]
        if(parseInt(s)>0){
            for(let i=0; i<s.length; i++){            
                if(s.indexOf(search)>-1){
                    array.push(parseInt(s[i]))
                }
            }
            return array
        }
         if(parseInt(s)<0){
            for(let c=1; c<s.length; c++){            
                if(s.indexOf(search)>-1){
                    array.push(parseInt(s[c]))
                }
            }
            return array
        }
    }
    if(num==0){
        return 0
    }
    else if(num>0){
        let deger=yeni(num, "")
        let bir=1
        let sıfır=0
        while(deger.length>0){            
            if(ilk){                
                if(deger.indexOf(bir)>-1){
                    let index=deger.indexOf(bir)
                    deger.splice(index,1)
                    ilk=false
                    kelime+=bir
                }
                else{
                    bir++
                }               
            }
            else{                
                if(deger.indexOf(sıfır)>-1){
                    let index2=deger.indexOf(sıfır)
                    deger.splice(index2,1)
                    kelime+=sıfır
                }
                else{
                    sıfır++
                }                
            }            
        }
    }
    else if(num<0){
        let deger2=yeni(num, "")
        let bir2=9
        let sıfır2=9
        while(deger2.length>0){            
            if(ilk){                
                if(deger2.indexOf(bir2)>-1&&bir2!=0){
                    let index2=deger2.indexOf(bir2)
                    deger2.splice(index2,1)
                    ilk=false
                    kelime+="-"
                    kelime+=bir2
                }
                else{
                    bir2--
                }               
            }
            else{                
                if(deger2.indexOf(sıfır2)>-1){
                    let index3=deger2.indexOf(sıfır2)
                    deger2.splice(index3,1)
                    kelime+=sıfır2
                }
                else{
                    sıfır2--
                }                
            }            
        }
    }    
    return kelime
}