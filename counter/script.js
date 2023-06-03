class counter{
    constructor(init){
        this.resetleyici=init
        this.init=init             
    }
    decrement(){
        return this.init=this.init-1
    }
    increment(){
        return this.init=this.init+1
    }
    reset(){
        return this.init=this.resetleyici
    }
}
let createCounter= function(init){
    return new counter(init)    
}