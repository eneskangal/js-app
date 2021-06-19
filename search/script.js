var search=document.getElementById("search");
var h3ler=document.querySelectorAll("h3");
var kutular=document.querySelectorAll(".kutu");
search.addEventListener("keyup", function(e){
   if(e.key=="Enter"){
     var searchValue=search.value;
     searchValue=searchValue.toUpperCase(searchValue);           
     for(i=0; i<kutular.length; i++){
       if(h3ler[i].innerHTML==searchValue){
         kutular[i].style.display="block";
       }
       else{
        kutular[i].style.display="none"
       }
     }
   }   
})
