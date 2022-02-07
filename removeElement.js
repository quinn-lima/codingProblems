const searchInsertPosition = function (nums, target) {

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i
        }
    }
    return nums.length
}



const removeElement = function (nums, val) {
    let count = nums.length - 1;

    let j = 0
    for (let i = 0; i < nums.length; i ++) {
        
            nums[j] = nums[i];
        

        if (nums[i] === val) {
            count --
        } else {
            j++
        }
        

        
        
    }
    return nums
}


console.log(removeElement([3,2,2,3], 3))