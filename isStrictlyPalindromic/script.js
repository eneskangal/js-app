let isStrictlyPalindromic= function(n){
    let cevirme=function(arr1){
        let kelime=""
        for(let i=2; i<n-1; i++){
            while(arr1/i>i){
                arr1=Math.floor(arr1/i)
                kelime+=arr1%i                
            }
            kelime+=arr1%i
            kelime+=Math.floor(arr1/i)            
            let reversedHali=kelime.split("").reverse().join("")
            console.log(kelime, reversedHali)
            if(parseInt(kelime)!=parseInt(reversedHali)){
                return false
            }
        }
        return true     
    }    
    return cevirme(n)    
}