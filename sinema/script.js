var siti=parseInt(prompt("sinema için 1'e, tiyatro için 2'e"));
var no=prompt("öğrenci mi?(e/h)")
if(siti==1){
    var ücret=15;
}
else{
    ücret=10;
}
if(no=="e"){
    ücret=ücret/2;    
}
else{
    ücret=ücret;    
}
document.write("ödeceğiniz ücret:"+" "+ ücret);
