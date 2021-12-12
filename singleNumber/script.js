let list=[5,5,4,4,2]
let data=[]
let carp=1  
let singleNumber = function(nums){     
    if(nums.length==1){
        nums=nums[0]
    }
    else{
        let k=0
        let i=0
        while(i<nums.length){
            if(k==nums.length){
                k=0
                i++
            }
            if(nums[i]==nums[k]){                                           
                if(i==k){
                    k++
                }
                else{                                        
                    let sayi=nums[i]
                    let sayi2=nums[k]                    
                    let index=nums.indexOf(sayi)                                                                                                
                    nums.splice(index,1)                                                               
                    let index2=nums.indexOf(sayi2)                                                                    
                    nums.splice(index2,1)                                         
                    i=0
                    k=0                    
                }
            }
            else{                
                k++
            }            
        }                                                  
    }      
    return nums     
}
console.log(singleNumber(list))