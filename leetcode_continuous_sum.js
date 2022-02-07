var checkSubarraySum = function (nums, k) {
    console.log(5%6)
        let sum = 0
        
        let presum = 0;
        
        const hash = new Set();
        
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i]
    
            if (k != 0) sum %= k
    
            if(hash.has(sum)) return true
            console.log('sum', sum, 'prefix', presum, 'set', hash)
            hash.add(presum);
            presum = sum
        }
        return false
    };

    console.log(checkSubarraySum([5,8,6,13], 6))