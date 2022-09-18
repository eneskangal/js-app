let numberOfSteps= function(num){
    let adım=0
    while(num>0){
        if(num%2==0){
            num=num/2
            adım++
        }
        else{
            num-=1
            adım++
        }
    }
    return adım
}