var twoSum = function(nums, target) {
  for(let i = 0, len = nums.length; i<len-1 ; i++){
    for(let j=i+1; j< len; j++){
        if(nums[i]+nums[j]==target){
          console.log([i,j])
        };
        
    }                  

  }    
  
};
twoSum([2,7,11,15],9);
twoSum([3,2,4],6);
