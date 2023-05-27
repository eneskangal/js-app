let findTheDifference= function(s, t){ 
    let sninKarsiligi=0
    for(let i=0; i<s.length; i++){
        sninKarsiligi+=s.charCodeAt(i)
    }
    let tninKarsiligi=0
    for(let a=0; a<t.length; a++){
        tninKarsiligi+=t.charCodeAt(a)
    }    
    return String.fromCharCode(tninKarsiligi-sninKarsiligi)     
}