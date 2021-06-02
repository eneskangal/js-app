function taş(){
    var array=["taş", "kağıt", "makas"];
    var random=parseInt(Math.random()*3);
    var değer=array[random];
    if(değer=="taş"){
        alert("adamın seçtiği: "+değer)
        alert("berabere")
    }
    else if(değer=="kağıt"){
        alert("adamın seçtiği: "+değer)
        alert("sen kazandın");
    }
    else{
        alert("adamın seçtiği: "+değer)
        alert("sen kazandın")
    }
}

function makas(){
    var array=["taş", "kağıt", "makas"];
    var random=parseInt(Math.random()*3);
    var değer=array[random];
    if(değer=="taş"){
        alert("adamın seçtiği: "+değer)
        alert("kaybettin")
    }
    else if(değer=="kağıt"){
        alert("adamın seçtiği: "+değer)
        alert("sen kazandın");
    }
    else{
        alert("adamın seçtiği: "+değer)
        alert("berabere")
    }
}

function kağıt(){
    var array=["taş", "kağıt", "makas"];
    var random=parseInt(Math.random()*3);
    var değer=array[random];
    if(değer=="taş"){
        alert("adamın seçtiği: "+değer)
        alert("kaybettin")
    }
    else if(değer=="kağıt"){
        alert("adamın seçtiği: "+değer)
        alert("berabere");
    }
    else{
        alert("adamın seçtiği: "+değer)
        alert("kaybettin")
    }
}