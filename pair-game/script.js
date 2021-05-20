var blocks=document.querySelectorAll(".block");
blocks[0].textContent="kırmızı";
blocks[1].textContent="mavi";
blocks[2].textContent="mavi";
blocks[3].textContent="kırmızı";
blocks[4].textContent="siyah";
blocks[5].textContent="siyah";
blocks[6].textContent="pembe";
blocks[7].textContent="pembe";
var array=[];
var sayac=0
for(i=0; i<8; i++){
    blocks[i].style.fontSize="0";
}

function enes(x){  
 
    x.style.fontSize="15px";
    array.push(x.textContent);
    
    if(array[0]==array[1]){  
        if(array[0].fontSize==array[1].fontSize){
            sayac=sayac+1;
            if(sayac==4){
                setTimeout(function(){
                    alert("ha ha kazandınız");
                }, 500)
               
            }

        }   
        array=[];
        
        for(i=0; i<8; i++){
            if(blocks[i].style.fontSize=="15px"){
                blocks[i].style.fontSize="35px";   
            }                   
        }
       
        
        console.log(array);         
    }
    
    else if(array[1]!=array[2]){ 
        array=[];
        setTimeout(function(){
            for(i=0; i<8; i++){
                if(blocks[i].style.fontSize=="15px"){
                    blocks[i].style.fontSize="0";   
                }
            }             
        }, 200)
    }      
    
}
