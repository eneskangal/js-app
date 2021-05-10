const hour=document.getElementById("saat");
const minute=document.getElementById("dakika");
const secend=document.getElementById("saniye");


setInterval(() => {
   let saat=new Date().getHours();
   let dakika=new Date().getMinutes();
   let saniye=new Date().getSeconds();
   secend.style.transform = `rotate(${180 + (saniye * 6)}deg)`
   minute.style.transform = `rotate(${180 + (dakika * 6)}deg)`
   hour.style.transform = `rotate(${180 + (saat * 30)}deg)`
}, 1000);