let interpret= function(command){
    return command.replaceAll("()","o").replaceAll(")","").replaceAll("(","")      
}