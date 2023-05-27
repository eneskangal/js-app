let evenOddBit= function(n){
    let count=0
    let count2=0
    n=n.toString(2).split("").reverse()
    let data=[]   
    for(let i=0; i<n.length; i++){
        if(i%2==0){
            if(n[i]=="1"){
                count++
            }            
        }
        else{
            if(n[i]=="1"){
                count2++
            }
        }
    }    
    data.push(count)
    data.push(count2) 
    return data  
}