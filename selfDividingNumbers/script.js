let selfDividingNumbers = function(left, right){
    let data=[]
    for(let i=left; i<right+1; i++){
        let deger=i+""
        let bool=true
        for(let k=0; k<deger.length; k++){
            let deger2=parseInt(deger[k])
            if(i%deger2!=0){
                bool=false
            }
        }
        if(bool==true){
            data.push(i)
        }
    }
    return data
}