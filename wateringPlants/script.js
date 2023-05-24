let wateringPlants= function(plants, capacity){
    let plant=0
    let oldugunYer=0
    let donecekDeger=0
    let ilkCapacity=capacity
    for(let i=0; i<plants.length; i++){
        console.log(oldugunYer, donecekDeger, capacity)
        if(plants[i]<=capacity){
            oldugunYer--
            donecekDeger++
            capacity-=plants[i]
        }
        else{
            donecekDeger+=-1*(oldugunYer*2)+1
            oldugunYer--           
            capacity=ilkCapacity
            capacity-=plants[i]           
        }
    }
    return donecekDeger    
}