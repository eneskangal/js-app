function enes(){
    var bugun=new Date();
    var gelecek=new Date('January 1, 2022 00:00:00');
    var days=Math.floor(gelecek-bugun);
    days=parseInt(days/86400000);
    document.getElementById("days").innerHTML=days+" "+"days";
    document.getElementById("hours").innerHTML=24-bugun.getHours()+" hours";
    document.getElementById("minutes").innerHTML=60-bugun.getMinutes()+" minutes";
    document.getElementById("seconds").innerHTML=60-bugun.getSeconds()+" seconds";
    
}

setInterval(enes, 1000)


