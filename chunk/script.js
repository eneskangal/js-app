let chunk= function(arr, size){
    let data=[]
    for(let i=0; i<arr.length; i+=size){
        let yeni=[]
        yeni.push(arr.slice(i,i+size))
        data.push(yeni[0])       
    }
    return data  
}