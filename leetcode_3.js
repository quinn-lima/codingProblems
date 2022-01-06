/**
 * @param {string} s
 * @return {number}
 // input: string 
 // output: longest substring that only contains unique letters
 // constrains: none
 // edge cases: empty string
 //
 */
const lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {
        return 0
    }
    let stringArray = []
    let currentString = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (currentString.includes(s[j])) {
                break;
            } else {
                currentString += s[j]
            }
        }
        stringArray.push(currentString)
        currentString = '';
    }
    longestString = ''
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].length > longestString.length) {
            longestString = stringArray[i]
        }
    }
    console.log(longestString)
    return longestString.length
    
};

console.log(lengthOfLongestSubstring('pwwkew'))