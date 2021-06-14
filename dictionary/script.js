var english=[];
var turkish=[];
var table=document.getElementById("table");
var table2=document.getElementById("table2");
var sozlukinput=document.getElementById("sozlukinput");
function submit(){
    var input=prompt("en veya tr yazınız");
    if(input=="en"){    
        var enkontrol=parseInt(prompt("kaç tane gireceksiniz?"));
        for(i=0; i<enkontrol; i++){
            var enen=prompt("ingilizce metin yazınız");
            var entr=prompt("türkçe karşılığınız yazınız");
            table.innerHTML+=           
                "<tr>"+
                    "<td>-"+
                    "</td>"+ 
                    "<td>"+enen+
                    "</td>"+  
                    "<td>"+entr+
                    "</td>"+                
                "</tr>"                                                   
       }
    }
    else if(input=="tr"){
        var trkontrol=parseInt(prompt("kaç tane gireceksiniz?"));
        for(i=0; i<trkontrol; i++){
            var trtr=prompt("türkçe metin yazınız");
            var tren=prompt("ingilizce karşılığınız yazınız");
            table2.innerHTML+=           
                "<tr>"+
                    "<td>-"+
                    "</td>"+ 
                    "<td>"+trtr+
                    "</td>"+  
                    "<td>"+tren+
                    "</td>"+                
                "</tr>"    
        }
    }
    else{
        alert("lütfen doğru yazınız")
    }
}
