let capitalizeTitle= function(title){
    title=title.split(" ")
    let data=[]
    for(let i=0; i<title.length; i++){
        if(title[i].length<3){
            title[i]=title[i].toLowerCase()             
        }
        else{
            let capital=title[i].toLowerCase()        
            title[i]=capital.slice(0,1).toUpperCase()+capital.slice(1,capital.length) 
        }                            
    }
    return title.join(" ")    
}