let compose= function(functions){
	return function(x){        
        for(let i=functions.length-1; i>-1; i--){
            x=functions[i](x)                     
        }
        return x    
    }
}