var resım=document.getElementById("resım");
var button=document.getElementById("button");
var search2=document.getElementById("arama");
var h2=document.querySelector("h2");
var p=document.querySelector("p");
button.addEventListener("click", function(){
   fetch(`https://api.github.com/users/${search2.value}`)
   .then(response => response.json()) 
   .then(data => yakala(data))
})
function yakala(e){
    resım.src=e.avatar_url;
    h2.innerHTML=e.login;
    p.innerHTML=e.bio;
}