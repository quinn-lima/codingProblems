const equivilantFoldedSums = function (nums) {
    const n = nums.length
    if (n < 3) {
        return 0
    }

    let max = Math.max(...nums)
    
    const half = Math.floor((n)/2)

    const getOperation = function (target) {
        // if target is odd and middle digit is less than sum, return positive infinity
        let total = 0;
        
        if (n%2 === 1) {
            if (target > max) {
                total = Infinity
                return total;
            } else {
                target += 1;
            }
        }
        
        for (let i = 0; i < half; i++) {
            let sum = nums[i] + nums[n - 1 - i]
            
            if (sum === target) {
                continue;
            } 
            if (sum < target) {
                let larger = Math.max(nums[i], nums[n - 1 - i]) 
                if (larger + max < target) {
                    total += 2
                    console.log('ldkajf')
                } else {
                    total += 1
                    console.log('dodo', target)
                }
            }
            if (sum > target) {
                let smaller = Math.min(nums[i], nums[n - 1 - i])
                if (smaller + 1 > target) {
                    total += 2
                    console.log('yurgo')
                } else {
                    total += 1
                    console.log('johanesburge', target)
                }
            }
        }
        return total
    }
    let solution = [];

    for (let i = 0; i < half; i++) {
        let targ = nums[i] + nums[n - 1 - i];
        solution.push(getOperation(targ))
    }
    if (n % 2 === 1) {
        solution.push(getOperation(nums[half]))
    }
return Math.min(...solution)

}

//console.log(equivilantFoldedSums([1, 4, 6, 3, 5]))
let instruments = ['bamboo', 'tuba', 'xylophone', 'fuck you']

instruments.splice(1, 1, 'Saxophone')

console.log(instruments)
