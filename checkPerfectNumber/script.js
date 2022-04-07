let checkPerfectNumber = function(num){
    let data=[]
    for(let i=1; i<num+1; i++){
        if(num%i==0){
            data.push(i)
        }
    }
    let sonuc=0
    for(let k=0; k<data.length; k++){
        sonuc+=data[k]
    }    
    if(sonuc==num*2){
        return true
    }
    else{
        return false
    }
}