var decodeString = function(s) {
    
    //iterate through the string, if its a number then recurse that number of times
    let string = ''
    
    for (let i = 0; i < s.length; i++) {
        if (Number(s[i])) {
            
            let j = i + 2;
            let count = 1;
            let sub = ''
            while (count >= 1) {
                if (s[j] === '[') {
                    count ++
                }
                if (s[j] === ']') {
                    count --
                }
                if (count === 0) break;
                sub += s[j]
                j++
            }
            for (let k = 0; k < Number(s[i]); k++) {
                string += decodeString(sub)
            }
            
        
            i += sub.length + 2
        } else {
            console.log(s[i])
            string += s[i]
        }
    }
    
    return string
};

console.log(decodeString('100[leetcode]'))