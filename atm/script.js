var toplampara=100;
var gunluklımıt=500;
var kullanıcıadı=prompt("kullanıcı adınız");
var sıfre=prompt("sıfreyı gırınız");
fetch('kredi.json')
.then(response => response.json())
.then(data => console.log(data));

if (kartnumarası==kullanıcıadı&&sifre==sıfre){
    document.querySelector(".container").style.display="block"
}
else{
    alert("şifre veya kart numarası yanlış");
    location.reload();
}
  function parayatırma(){     
      var yatırılacaktutar=parseInt(prompt("yatırılacak tutar"));
      if(yatırılacaktutar<gunluklımıt){
        let deger=confirm("emin misiniz?");
        if(deger==true){
            alert(yatırılacaktutar+" tl yüklendi")
            toplampara+=yatırılacaktutar;          
        }        
    }
    else{
        alert("limitiniz 500 tldir")
    }    
  }

  function bilgi(){
      alert(`toplam paranız: ${toplampara}`)
  }

  function paracekme(){     
    var cekilecektutar=parseInt(prompt("cekilecek tutar"));
    if(cekilecektutar<gunluklımıt){
      let deger2=confirm("emin misiniz?");
      if(deger2==true){
          alert(cekilecektutar+" tl alındı")
          toplampara-=cekilecektutar;          
      }        
  }
    else{
        alert("limitiniz 500 tldir")
    }    
}
  function kredikartı(){           
      var sıfredegıstırme=parseInt(prompt("şifre ne olsun?"));  
      fetch('kredi.json')
      .then(response => response.json())
      .then(data => data.kartlar[0].sifre=sıfredegıstırme);      
  }

  function para(){
      var gonderilecekhesap=prompt("gönderilecek hesabı giriniz");
      var nekadar=prompt("ne kadar yollayacaksınız")
  }

  function yatırım(){
      alert("bla bla bla")
  }