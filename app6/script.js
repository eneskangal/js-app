function kontrol(str){
    for (var i = 0; i < str.length; i++) {
        
        if(metin[i]=="ğ"){
            return true;           
        }        
      }      
}

 
var metin=prompt('Metin');
if(kontrol(metin)==true){
      alert('ğ karakteri metin içinde var');
    }
else{
      alert('ğ karakteri metin içinde yok');
    }