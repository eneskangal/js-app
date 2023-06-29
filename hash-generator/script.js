var input=prompt("sayı giriniz");
var list=["a", "b", "c", "ç",	"d",	"e",	"f",	"g",	"ğ",	"h",
"ı",	"i",	"j",	"k",	"l",	"m",	"n",	"o",	"ö",	"p",	
"r",	"s",	"ş",	"t",	"u",	"ü",	"v",	"y",	"z",    "0",
"1", "2", "3", "4", "5", "6", "7", "8", "9"];
var sifreli=[]
var sifrelenmis=""
for (x=0; x<list.length;x++){
    var k=x+2
    if (k>=list.length ){
        k=k%list.length
    }
    sifreli.push(list[k])
}
for(i=0; i<input.length; i++){	
   sifrelenmis+=sifreli[list.indexOf(input[i])]    
}
document.write(sifrelenmis)