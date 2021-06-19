var wordcounter=document.getElementById("wordcounter");
wordcounter.addEventListener("keyup", function(e){
    if(e.key=="Enter"){
        yakala(wordcounter.value);
    }
})

function yakala(değer){
    var değer=değer.split(" ");  
    document.getElementById("p").innerHTML=değer.length+" kelime";
}