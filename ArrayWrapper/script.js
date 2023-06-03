class ArrayWrapper{
    constructor(array){
        this.array=array
    }    
}
ArrayWrapper.prototype.valueOf= function(){
    let deger=0
    for(let i=0; i<this.array.length; i++){
        deger+=this.array[i]
    }
    return deger    
}
ArrayWrapper.prototype.toString= function(){
    return "["+this.array.toString()+"]"    
}