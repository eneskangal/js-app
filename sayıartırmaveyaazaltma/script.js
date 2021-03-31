var ekran=document.getElementById("sayı").value;
function artırma(){
    Number(ekran);    
    ++ekran;
    document.getElementById("sayı").value=ekran;
}
function azaltma(){
    ekran--;
    document.getElementById("sayı").value=ekran;
}