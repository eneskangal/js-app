let intersection= function(nums1, nums2){
    let data=[]
    for(let i=0; i<nums1.length; i++){
        if(nums2.indexOf(nums1[i])>-1&&data.includes(nums1[i])==false){
            data.push(nums1[i])
        }
    }
    return data    
}