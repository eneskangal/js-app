var soru=document.getElementById("soru");
var cevaplar=document.querySelectorAll(".cevap");
var cevaplar2=document.querySelectorAll(".cevap2");
var nextBtn=document.getElementById("next");
var pagination=document.getElementById("pagination");
var score=0;
function SoruUretici(soru, cevaplar, cevap){
    this.soru=soru;
    this.cevaplar=cevaplar;
    this.cevap=cevap;
    this.soruKontrol=function(answer){
        if(this.cevap==answer){
            score++;
        }        
    }
}
var soru1=new SoruUretici("enes kaç yaşında?",[23, 24, 25, 26], 26);
var soru2=new SoruUretici("murat kaç yaşında?",[30, 29, 28, 27], 29);
var soru3=new SoruUretici("makbule kaç yaşında?",[51, 50, 49, 48], 51);

var sorular=[soru1, soru2,soru3];

function Quiz(sorular){
    this.score=0;    
    this.sorular=sorular;
    this.ındex=0; 
    this.getQuestion=function(kaçıncıSoru){ 
        pagination.innerHTML=kaçıncıSoru+1+"/3";       
        soru.innerHTML=quiz.sorular[kaçıncıSoru].soru;
        for(i=0; i<4; i++){
            cevaplar[i].innerHTML=quiz.sorular[kaçıncıSoru].cevaplar[i]            
        }       
    }       
}
var quiz=new Quiz(sorular);
quiz.getQuestion(quiz.ındex)
function enes(){
    quiz.ındex++
    if(quiz.ındex==3){
        alert("score: "+score);
        location.reload();       
    }
    quiz.getQuestion(quiz.ındex)
}

cevaplar2.forEach(cevap2 =>cevap2.addEventListener("click", function(){
   soru1.soruKontrol(cevap2.nextSibling.innerHTML);
   soru2.soruKontrol(cevap2.nextSibling.innerHTML);
   soru3.soruKontrol(cevap2.nextSibling.innerHTML);
}))


    












