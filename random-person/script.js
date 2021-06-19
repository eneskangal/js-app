function Personel(ad, soyadı, il, telefon, email, resim){
    this.ad=ad;
    this.soyadı=soyadı;
    this.il=il;
    this.telefon=telefon;
    this.email=email;
    this.resim=resim;
    
}
var person=new Personel("name", "lastname", "location", "000 000 00 00", "email@email.com","1.jpg");
var person2=new Personel("name2", "lastname2", "location2", "111 111 11 11", "email2@email.com", "2.jpg");
var person3=new Personel("name3", "lastname3", "location3", "222 222 22 22", "email3@email.com", "3.jpg");
var person4=new Personel("name4", "lastname4", "location4", "333 333 33 33", "email4@email.com", "4.jpg");
var person5=new Personel("name5", "lastname5", "location5", "444 444 44 44", "email5@email.com", "5.jpg");
var person6=new Personel("name6", "lastname6", "location6", "555 555 55 55", "email6@email.com", "6.jpg");
var person7=new Personel("name7", "lastname7", "location7", "666 666 66 66", "email7@email.com", "7.jpg");
var person8=new Personel("name8", "lastname8", "location8", "777 777 77 77", "email8@email.com", "8.jpg");

var personeller=[person, person2, person3, person4, person5, person6, person7, person8];
function generatePerson(){
    var random=parseInt(Math.random()*personeller.length);
    var personel=personeller[random];
    document.getElementById("photo").src=personel.resim;
    document.getElementById("name").innerHTML=personel.ad;
    document.getElementById("lastname").innerHTML=personel.soyadı;
    document.getElementById("location").innerHTML=personel.il;
    document.getElementById("phone").innerHTML=personel.telefon;
    document.getElementById("email").innerHTML=personel.email;
}