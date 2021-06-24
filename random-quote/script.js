var quotes=["Dünya çok acı çekiyor, kötü insanların şiddetinden değil, iyi insanların sessizliğinden.",
"Yarin hatırası aşkın bir damlasından daha güzeldir. Aşkın ateşi yaşamaktan daha güzeldir",
"Ben artık insanları anlamaya çalışmaktan vazgeçtim… Ve dedim ki; anlamak kolaysa eğer insanlar beni anlasın.",
"Her şeyin zamanı, yaşadığınız O andır… Mutlu olmayı ertelemeyin. Çünkü canınızın istediği zaman ölmeyeceksiniz.",
"Kusursuz dost arayan dostsuz kalır. Mevlana",
"Komşunu sev ama bahçe duvarını yıkma. G. Herbert",
"Her bildiğini söyleme, her söylediğini bil. Clavdius",
"Savaşın iyisi, barışın kötüsü yoktur. Benjamin Franklin",
"Mutluluğu tatmanın tek çaresi, onu paylaşmaktır. Byron",
"Hayatta hep mutlu olursam, Hayalini kuracak neyim kalır. Dostoyevski"
]
function randomquote(){
    var random=parseInt(Math.random()*quotes.length);
    document.getElementById("quote").innerHTML=quotes[random]
}