let maximizeSum= function(nums, k){
    let deger=0
    let toplama=0
    let max=Math.max(...nums)
    for(let i=0; i<k; i++){
        toplama+=max+deger
        deger++
    }
    return toplama    
}