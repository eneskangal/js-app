var liste=[10,20,30,40,50,60];
const reducer=(acu, currentvalue) => acu+currentvalue;
 
var toplam=liste.reduce(reducer);
var adet=liste.length;
document.write(toplam/adet);