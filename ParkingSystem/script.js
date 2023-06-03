class ParkingSystem{
    constructor(big, medium, small){        
        this.big=big
        this.medium=medium
        this.small=small
    }         
}  
ParkingSystem.prototype.addCar= function(carType){        
    if(carType==1){
        if(this.big>0){
            this.big=this.big-1
            return true            
        }
        else{
            return false
        }
    }
    if(carType==2){
        if(this.medium>0){
            this.medium=this.medium-1               
            return true          
        }
        else{
            return false
        }
    }
    if(carType==3){        
        if(this.small>0){
            this.small=this.small-1           
            return true            
        }
        else{
            return false           
        }
    }  
}