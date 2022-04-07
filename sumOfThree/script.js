let sumOfThree = function(num){
    let data=[]
    if(num%3==0){
        data.push(num/3-1)
        data.push(num/3)
        data.push(num/3+1)
    }
    return data
}