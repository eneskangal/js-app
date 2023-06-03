let percentageLetter= function(s, letter){
    let yeniArray=s.split("")
    let length=yeniArray.filter(t=>t===letter)
    return Math.floor(length.length/yeniArray.length*100)  
}