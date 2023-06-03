let mergeAlternately= function(word1, word2){
    let donecekKelime=""
    if(word1.length==word2.length){
     for(let i=0; i<word1.length; i++){
         donecekKelime+=word1[i]+word2[i]
     }
    }
    if(word1.length>word2.length){
     for(let z=0; z<word1.length; z++){        
         if(word2[z]!=undefined){
             donecekKelime+=word1[z]+word2[z]
         }
         else{
             donecekKelime+=word1[z]
         }
     }
    }
    if(word1.length<word2.length){
     for(let c=0; c<word2.length; c++){
         if(word1[c]!=undefined){
             donecekKelime+=word1[c]+word2[c]
         }
         else{
             donecekKelime+=word2[c]
         }        
     }
    }
    return donecekKelime
 }