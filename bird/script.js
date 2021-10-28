var myGamePiece;
var birborurandom=parseInt(Math.random()*200);
var birborurandom2=parseInt(Math.random()*200);

if(birborurandom>100&&birborurandom2>100){
  function startGame() {
    myGamePiece = new component(30, 30, "yellow", 0, 200);
    birboruon=new component(30,birborurandom,"green",50,0);
    birboruarka=new component(30,birborurandom2,"green",50,300);
    ikiboruon=new component(30,birborurandom2,"green",250,0);
    ikiboruarka=new component(30,birborurandom,"green",250,300);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 400;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);        
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}


document.addEventListener("keydown",enes);
function enes(e) {
  if(e.key=="w"){
    var random3=parseInt(Math.random()*200);
    var random4=parseInt(Math.random()*200);  
    myGamePiece.y-=10;
    myGameArea.clear();
    myGamePiece.update();
    birboruon.x-=10;   
    birboruon.update();
    birboruarka.x-=10;    
    birboruarka.update();
    ikiboruon.x-=10;    
    ikiboruon.update();
    ikiboruarka.x-=10;    
    ikiboruarka.update();
    
    if((myGamePiece.y<birboruon.height&&birboruon.x<30)
    ||(myGamePiece.y<ikiboruon.height&&ikiboruon.x<30)
    ||(myGamePiece.y>(400-birboruarka.height)&&birboruarka.x<30)
    ||(myGamePiece.y>(400-ikiboruarka.height)&&ikiboruarka.x<30)){
      alert("KAYBETTİNİZ!")
      location.reload() ;
    }

    if(birboruon.x==0){          
      birboruon.x=400;
      birboruarka.x=400;
      if(random3>200&&random4>200){
        birboruon.y=random3;
        birboruarka.y=random4;
      }      
    }  
    else if(ikiboruon.x==0){
      ikiboruon.x=400;
      ikiboruarka.x=400;
      if(random3>200&&random4>200){
        ikiboruon.y=random3;
        ikiboruarka.y=random4;
      }      
    }  
    if(myGamePiece.y==0){
      location.reload();
    }


  }
  else if(e.key=="s"){
    var random=parseInt(Math.random()*200);
    var random2=parseInt(Math.random()*200);  
    myGamePiece.y+=10;
    myGameArea.clear();
    myGamePiece.update();
    birboruon.x-=10;   
    birboruon.update();
    birboruarka.x-=10;    
    birboruarka.update();
    ikiboruon.x-=10;    
    ikiboruon.update();
    ikiboruarka.x-=10;    
    ikiboruarka.update();
    if((myGamePiece.y<birboruon.height&&birboruon.x<30)
    ||(myGamePiece.y<ikiboruon.height&&ikiboruon.x<30)
    ||(myGamePiece.y>(400-birboruarka.height)&&birboruarka.x<30)
    ||(myGamePiece.y>(400-ikiboruarka.height)&&ikiboruarka.x<30)){
      alert("KAYBETTİNİZ!")
      location.reload() ;
    }
    if(birboruon.x==0){          
      birboruon.x=400;
      birboruarka.x=400;
      if(random>200&&random2>200){
        birboruon.y=random;
        birboruarka.y=random2;
      }      
    }  
    else if(ikiboruon.x==0){
      ikiboruon.x=400;
      ikiboruarka.x=400;
      if(random>200&&random2>200){
        ikiboruon.y=random;
        ikiboruarka.y=random2;
      }      
    } 
    if(myGamePiece.y==400){
      location.reload();
    }  
    
  }    
}  
}
else{
  location.reload();
}