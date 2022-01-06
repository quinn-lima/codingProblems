//A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

//Given a string s, return true if it is a palindrome, or false otherwise.


var isPalindrome = function(s) {
    //convert to lowercase
    //remove all non-alphanumeric characters
    //
    let S = s.toLowerCase()

    for (let i = 0; i <= s.length/2; i++) {
        if (s[i] !== s[s.length - i - 1]) {
            return false
        }
    }

    return true;
};


console.log(isPalindrome('haaadah'))