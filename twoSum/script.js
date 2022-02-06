let list=[1,5,2,1]
let twoSum = function(numbers, target){
    let array=[]
    let i=0
    let k=0
    while(i<numbers.length){
        while(k<numbers.length){
            if(numbers[i]+numbers[k]==target&&i!=k){
                array.push(i+1)
                array.push(k+1)
                return array
            }                                 
            k++
        }
        k=0
        i++
    }
    return array       
}
console.log(twoSum(list,6))