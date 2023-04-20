let defangIPaddr= function(address){
    let kelime=""
    for(let i=0; i<address.length; i++){
        if(address[i]=="."){
            kelime+="[.]"
        }
        else{
            kelime+=address[i]
        }
    }
    return kelime
}