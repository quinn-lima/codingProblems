var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    
    let numberString = x.toString();
    
    for (let i = 0; i < numberString.length; i++) {
        if (numberString[i] !== numberString[numberString.length - 1 - i]) {
            return false;
        }
       
}
    return true;
    
    
};

console.log(isPalindrome(221))