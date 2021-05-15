function enes(){
   var kontrol=document.getElementById("kontrol").value;
   var kontrol2=document.getElementById("kontrol2").value;
   var kontrol3=document.getElementById("kontrol3").value;
   var kontrol4=document.getElementById("kontrol4").value;
   if(kontrol==""){
       document.getElementById("info").innerHTML="boş bırakmayanız"
   }
   if(kontrol2==""){
    document.getElementById("info2").innerHTML="boş bırakmayanız"
   }
   if(kontrol3==""){
       document.getElementById("info3").innerHTML="boş bırakmayanız"
   }
   if(kontrol4==""){
    document.getElementById("info4").innerHTML="boş bırakmayanız"
   }
   else{
   Email.send({
    Host : "smtp.yourisp.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
    }).then(
    message => alert(message)
    );
    }
}