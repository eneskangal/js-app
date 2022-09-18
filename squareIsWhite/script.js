let squareIsWhite= function(coordinates){
    if(coordinates[0]=="a"||coordinates[0]=="c"||coordinates[0]=="e"||coordinates[0]=="g"){
        if(parseInt(coordinates[1])==1){
            return false
        }
        else if(parseInt(coordinates[1])%2==1){
            return false
        }
        else{
            return true
        }
    }
    if(coordinates[0]=="b"||coordinates[0]=="d"||coordinates[0]=="f"||coordinates[0]=="h"){
        if(parseInt(coordinates[1])==1){
            return true
        }
        else if(parseInt(coordinates[1])%2==0){
            return false
        }
        else if(parseInt(coordinates[1])%2==1){
            return true
        }
    }
}