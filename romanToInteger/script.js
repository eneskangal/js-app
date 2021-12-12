let romanToInt = function(s){
    let toplam=0
    const roman = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
    for(let i=0; i<s.length; i++){       
        let sol=roman[s[i]]
        let sag=roman[s[i+1]]
        sol<sag ? toplam-=sol : toplam+=sol       
    }

    return toplam   
}
console.log(romanToInt("CCC"))