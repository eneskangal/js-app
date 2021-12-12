let list=[1,1]
let i=0
let k=0
let toplam
function fibonacci(n){
    while(i<n){
        toplam=list[i]+list[k+1]
        list.push(toplam)        
        i++
        k++    
    }
    return list
}
console.log(fibonacci(4))