let canvas=document.getElementById("game")
let ctx=canvas.getContext("2d")
let score=0
let silah=[]
let mermi=[]
let engel=[]
let posX=200
let posY=380
let mposX=200
let mposY=400
let vx=0
let mvy=0
let mvx=0
let engelposY=0
let engelposX=0
let engelWidth=400
let evy=0 
let evx=0
function loop(){    
    draw()
    update()
    evy+=1
    window.addEventListener("keyup",key.bind(this))
}
function draw(){   
    ctx.fillStyle="black"
    ctx.fillRect(0,0,400,400)
    silah.map(t =>{
        ctx.fillStyle="red"
        ctx.fillRect(t.posX,t.posY,20,20)
    })
    mermi.map(a=>{
        ctx.fillStyle="green"
        ctx.fillRect(a.posX,a.posY,a.width,a.height)        
    })
    engel.map(b=>{
        ctx.fillStyle=b.color
        ctx.fillRect(b.posX,b.posY,b.width,b.height)        
    })
    ctx.fillStyle="white"
    ctx.font="20px Arial"
    ctx.fillText(score,200,200)           
}
function update(){
    posX+=vx
    mposY+=mvy
    engelposY+=evy   
    silah.push({
        posX:posX,
        posY:posY
    })
    if(silah.length>1){
        silah.shift()
    }
    mermi.push({
        color:"red",
        posX:mposX,
        posY:mposY,
        mvx:mvx,
        mvy:mvy,
        width:10,
        height:20,
        stop:"false"
    })
    if(mermi.length>3){
        mermi.shift()        
    }
    engel.push({
        color:"red",
        posX:engelposX,
        posY:engelposY,
        evx:evx,        
        width:engelWidth,
        height:20,        
    })
    if(engel.length>1){
        engel.shift()        
    }     
    control()      
}
function restart(){
    location.reload()    
}
function control(){
    if(mposY<0){        
        if(!mermi.stop){ 
            mposY=400
            mvy=0
            document.addEventListener("keyup",function(e){
                if(e.key=="Enter"){
                    mvy-=2
                }
            })
        }             
    } 
    if(engel[0].posY>420){        
        clearInterval(interval)
        restart()      
    }
    mermi.map(t =>{
        engel.map(u =>{
            let deger=t.posY-u.posY
            if(deger>=-10&&deger<10){
                score++
                engelWidth-=20
                engelposX+=10
                engelposY=0
                if(!mermi.stop){ 
                    mposY=400
                    mvy=0
                    document.addEventListener("keyup",function(e){
                        if(e.key=="Enter"){
                            mvy-=2
                        }
                    })
                }             
            }
        })
    })          
}
function key(e){
    if(e.key=="a"){
        vx-=2                        
    }
    if(e.key=="d"){
        vx+=2                      
    }
    if(e.key=="Enter"){        
        mvy-=2               
    }
}
let interval=setInterval(loop,1000/25)