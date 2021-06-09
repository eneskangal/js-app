const url='https://api.openweathermap.org/data/2.5/'
const key='c114c9615d07f36200b7c51ca2635258'


function yakala(e){
    if(e.keyCode=="13"){
        sonuçAl(searchBar.value)
    }
}

function sonuçAl(cityname){
    let query= url+"weather?q="+cityname+"&appid="+key+"&units=metric&lang=tr";
    fetch(query)
    .then(havadurumu =>{
        return havadurumu.json()
    })
    .then(displayResult)
}
const displayResult= (result) =>{
    let city=document.querySelector("#city");
    city.innerHTML=result.name+" "+result.sys.country;

    let temp=document.querySelector("#temp");
    temp.innerHTML=parseInt(result.main.temp)

    let desc=document.querySelector("#desc");
    desc.innerHTML=result.weather[0].description

    let minmax=document.querySelector("#minmax");
    minmax.innerHTML=parseInt(result.main.temp_min)+"/"+parseInt(result.main.temp_max);
}

const searchBar=document.getElementById("searchBar")
searchBar.addEventListener("keypress", yakala)
