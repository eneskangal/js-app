function kontrol(str){
    for (var i = 0; i < str.length; i++) {
        
        if(metin[i]=="ğ"){
            return true;           
        }        
      }      
}

 
var metin=prompt('Metin');
if(kontrol(metin)==true){
  document.write('ğ karakteri metin içinde var');
    }
else{
  document.write('ğ karakteri metin içinde yok');
    }