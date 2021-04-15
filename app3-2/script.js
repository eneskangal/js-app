var output=0
var s = prompt("Sayı: ")
for (var i = 0; i < s.length; i++) {
    output+=parseInt(s.charAt(i))
    
}
alert(output)