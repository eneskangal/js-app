let hesap=100;
function baslangic(){
    document.getElementsByClassName("container")[0].style.display="block";
    for(i=0; i<6; i++){
        if(i==1||i==4||i==2){
            document.getElementsByClassName("kutu")[i].style.display="flex";
            if(i==1){
                let input=document.createElement("input");
                input.type="text";
                input.placeholder="kredi kartı no giriniz"
                if(i==1){
                    document.getElementsByClassName("kutu")[i].innerHTML="";
                    document.getElementsByClassName("kutu")[i].appendChild(input);                                      
                }
                
            }
            else if(i==4){
                let input2=document.createElement("input");
                input2.type="text";
                input2.placeholder="sifreyi giriniz"
                if(i==4){
                    document.getElementsByClassName("kutu")[i].innerHTML="";
                    document.getElementsByClassName("kutu")[i].appendChild(input2);                                     
                }
            }
            else if(i==2){
                document.getElementsByClassName("kutu")[i].innerHTML="onay";
                document.getElementsByClassName("kutu")[i].setAttribute("onclick", "onay()"); 
            }
        }
        else{
            document.getElementsByClassName("kutu")[i].style.display="none";
        }
    }
}
baslangic();
function onay(){
    let textler=document.querySelectorAll("input[type=text]");
    let no=textler[0].value;
    let sifre=textler[1].value;
    if(sifre==1234&&no==1234){
        for(i=0; i<6; i++){
            document.getElementsByClassName("kutu")[i].style.display="flex";
            if(i==1){
                document.getElementsByClassName("kutu")[i].innerHTML="para çekme";
            }
            else if(i==2){
                document.getElementsByClassName("kutu")[i].innerHTML="bilgi öğrenme";
            }
            else if(i==4){
                document.getElementsByClassName("kutu")[i].innerHTML="para transferleri";
            }
            else if(i==6){
                document.getElementsByClassName("kutu")[i].innerHTML="cikis";
            }
        }        
        document.getElementsByClassName("kutu")[0].setAttribute("onclick", "yatirma()")
        document.getElementsByClassName("kutu")[1].setAttribute("onclick", "cekme()")
        document.getElementsByClassName("kutu")[2].setAttribute("onclick", "bilgi()")
        document.getElementsByClassName("kutu")[3].setAttribute("onclick", "islem()")
        document.getElementsByClassName("kutu")[4].setAttribute("onclick", "transfer()")
        document.getElementsByClassName("kutu")[5].setAttribute("onclick", "cikis()")
    }
    else{
        alert("sifre veya kart numarası yanlış")
    }
}    
function yatirma(){
        for(i=0; i<6; i++){
            if(i==0){
                document.getElementsByClassName("kutu")[0].innerHTML=10;                
            }
            else if(i==1){
                document.getElementsByClassName("kutu")[1].innerHTML=25; 
                
            }
            else if(i==2){
                document.getElementsByClassName("kutu")[2].innerHTML=50; 
               
            }
            else if(i==3){
                document.getElementsByClassName("kutu")[3].innerHTML=100; 
                
            }
            else if(i==4){
                document.getElementsByClassName("kutu")[4].innerHTML=250; 
                
            }
            else if(i==5){
                document.getElementsByClassName("kutu")[5].innerHTML="cikis";
                document.getElementsByClassName("kutu")[5].setAttribute("onclick", "cikis()");                 
            }
        }
        for(i=0; i<6; i++){
            document.getElementsByClassName("kutu")[i].setAttribute("onclick", "tıkla(this)")            
            if(i==5){
                document.getElementsByClassName("kutu")[i].setAttribute("onclick", "menudencikis()");
            }            
        }    
}
function menudencikis(){   
        document.getElementsByClassName("kutu")[0].innerHTML="para yatırma";
        document.getElementsByClassName("kutu")[0].setAttribute("onclick", "yatirma()");
        document.getElementsByClassName("kutu")[1].innerHTML="para çekme";
        document.getElementsByClassName("kutu")[1].setAttribute("onclick", "cekme()");
        document.getElementsByClassName("kutu")[2].innerHTML="bilgi öğrenme";
        document.getElementsByClassName("kutu")[2].setAttribute("onclick", "bilgi()");
        document.getElementsByClassName("kutu")[3].innerHTML="kredi karti işlemleri";
        document.getElementsByClassName("kutu")[3].setAttribute("onclick", "islem()");
        document.getElementsByClassName("kutu")[4].innerHTML="para transferleri";
        document.getElementsByClassName("kutu")[4].setAttribute("onclick", "transfer()");            
        document.getElementsByClassName("kutu")[5].innerHTML="cikis";
        document.getElementsByClassName("kutu")[5].setAttribute("onclick", "cikis()"); 
}
function bilgi(){
    alert(hesap);
}
function tıkla(e){
    e=parseInt(e.innerHTML)
    hesap+=e;
}
function cekme(){
    for(i=0; i<6; i++){
        if(i==0){
            document.getElementsByClassName("kutu")[0].innerHTML=10;                
        }
        else if(i==1){
            document.getElementsByClassName("kutu")[1].innerHTML=25; 
            
        }
        else if(i==2){
            document.getElementsByClassName("kutu")[2].innerHTML=50; 
           
        }
        else if(i==3){
            document.getElementsByClassName("kutu")[3].innerHTML=100; 
            
        }
        else if(i==4){
            document.getElementsByClassName("kutu")[4].innerHTML=250; 
            
        }
        else if(i==5){
            document.getElementsByClassName("kutu")[5].innerHTML="çıkış";
            document.getElementsByClassName("kutu")[5].setAttribute("onclick", "menudencikis()");                 
        }
    }
    for(i=0; i<6; i++){
        document.getElementsByClassName("kutu")[i].setAttribute("onclick", "tıkla2(this)")            
        if(i==5){
            document.getElementsByClassName("kutu")[i].setAttribute("onclick", "menudencikis()");
        }            
    }    
}
function tıkla2(e){
    e=parseInt(e.innerHTML)
    hesap-=e;    
}
function islem(){
    for(i=0; i<6; i++){
        if(i==1||i==4||i==2){
            document.getElementsByClassName("kutu")[i].style.display="flex";
            document.getElementsByClassName("kutu")[1].innerHTML="sifre değiştirme"    
            document.getElementsByClassName("kutu")[1].removeAttribute("onclick");                  
            document.getElementsByClassName("kutu")[4].innerHTML="cikis";
            document.getElementsByClassName("kutu")[4].setAttribute("onclick","cikis2()");
            document.getElementsByClassName("kutu")[2].innerHTML="onay";
            document.getElementsByClassName("kutu")[2].setAttribute("onclick","onay2()");
        }
        else{
            document.getElementsByClassName("kutu")[i].style.display="none";           
        }
    } 
    sifre();   
}
function sifre(){
    let input=document.createElement("input");
    input.id="enes";
    input.setAttribute("id", "enes");
    input.placeholder="yeni kredi kartı şifresi"
    document.querySelector("body > div > div > div.bir > div:nth-child(2)").innerHTML="";  
    document.getElementsByClassName("kutu")[1].appendChild(input); 
}
function cikis2(){   
    for(i=0; i<6; i++){
        document.getElementsByClassName("kutu")[i].style.display="flex";
    }
    document.getElementsByClassName("kutu")[0].innerHTML="para yatırma";
    document.getElementsByClassName("kutu")[0].setAttribute("onclick", "yatirma()");
    document.getElementsByClassName("kutu")[1].innerHTML="para çekme";
    document.getElementsByClassName("kutu")[1].setAttribute("onclick", "cekme()");
    document.getElementsByClassName("kutu")[2].innerHTML="bilgi öğrenme";
    document.getElementsByClassName("kutu")[2].setAttribute("onclick", "bilgi()");
    document.getElementsByClassName("kutu")[3].innerHTML="kredi karti işlemleri";
    document.getElementsByClassName("kutu")[3].setAttribute("onclick", "islem()");
    document.getElementsByClassName("kutu")[4].innerHTML="para transferleri";    
    document.getElementsByClassName("kutu")[4].setAttribute("onclick", "transfer()");
    document.getElementsByClassName("kutu")[5].innerHTML="cikis";
}
function cikis(){
    location.reload();    
}
function transfer(){
    for(i=0; i<6; i++){
        if(i==1||i==2||i==4){
            document.getElementsByClassName("kutu")[i].style.display="flex"
            if(i==1){
                document.getElementsByClassName("kutu")[i].innerHTML="gönderilecek hesap"
                document.getElementsByClassName("kutu")[i].removeAttribute("onclick");
            }
            else if(i==2){
                document.getElementsByClassName("kutu")[i].innerHTML="onay"
                document.getElementsByClassName("kutu")[i].setAttribute("onclick", "kontrol()");
            }
            else{
                document.getElementsByClassName("kutu")[i].innerHTML="cikis"
                document.getElementsByClassName("kutu")[i].setAttribute("onclick", "cikis2()");
            }
        }  
        else{
            document.getElementsByClassName("kutu")[i].style.display="none"
        }            
    }
    hesap2();
}
function onay2(){
    let input=document.querySelector("input");   
    if(input.value==""){
        alert("boş bırakmayınız")
    }
    else{
        alert("sifre değiştirildi.")
    }
}
function kontrol(){
    let input2=document.querySelector("input");   
    if(input2.value==""){
        alert("boş bırakmayınız")
    }
    else{
        alert("hesap gönderildi.")
    }
}
function hesap2(){
    let hesap2=document.createElement("input");
    hesap2.placeholder="hesap no giriniz";
    hesap2.type="text";
    document.getElementsByClassName("kutu")[1].innerHTML="";
    document.getElementsByClassName("kutu")[1].appendChild(hesap2);    
}