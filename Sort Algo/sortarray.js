/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    //-----sort method - direct--------////
    
    //nums.sort((a,b)=>{return a-b});
    
    // ---------pushing min to the left end after each iteration -----//////
    
    // for(let i=0;i<nums.length-1;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if(nums[i]>nums[j]){
    //             nums[i]=nums[i]+nums[j];
    //             nums[j]=nums[i]-nums[j];
    //              nums[i]=nums[i]-nums[j];
    //         }
    //     }
    // }
    
    
     // ---------Bubble Sort -----//////
    // for(let i=0;i<nums.length-1;i++){
    //     for(let j=0;j<nums.length-i-1;j++){
    //         if(nums[j]>nums[j+1]){
    //             nums[j]=nums[j]+nums[j+1];
    //             nums[j+1]=nums[j]-nums[j+1];
    //              nums[j]=nums[j]-nums[j+1];
    //         }
    //     }
    // }
    
     // ---------Selection Sort -----//////
    for(let i=0;i<nums.length;i++){
        let min_idx=i;
        for(let j=i+1;j<nums.length;j++){
            if(nums[min_idx]>nums[j]){
                min_idx=j;
            }
        }
        let t=nums[min_idx];
        nums[min_idx]=nums[i];
        nums[i]=t;
    }
    return nums
    
    
     //--------QUICK SORT----------------/
   if (nums.length <= 1) return nums

		let left = [];
		let right = [];
		let newArray = [];
		let pivot = nums.pop();
		let l = nums.length;

		for (let i = 0; i < l; i++) {
			if (nums[i] <= pivot) {
				left.push(nums[i]);
			} else {
				right.push(nums[i]);
			}
		}

		return newArray.concat(sortArray(left), pivot, sortArray(right));
};
