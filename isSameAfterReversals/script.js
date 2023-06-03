let isSameAfterReversals= function(num){
    let tersHali=num+"";
    tersHali=Number(tersHali.split("").reverse().join(""))+""
    tersHali=Number(tersHali.split("").reverse().join(""))
    return num===tersHali ? true : false
}