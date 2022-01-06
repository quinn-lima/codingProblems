//given a signed 32-bit integeter X, return X with its digits reversed
// if reversing x causes the value to go outside the 32 bit range [-2^31, 2^31 -1] then return 0
// input = 123
// output = 321
// input 120 output 21
// Input an integer, output the reversed integer, constrains 32 bit range, edge cases = if there is a 0 at the end

const reverseInteger = function (int) {
    if (int < 0) {
        return -1 * reverseInteger(-1 * int)
    }

    let string = int.toString();
    let reversedString = '';
    for (let i = 0; i < string.length; i++) {
        reversedString = string[i] + reversedString;
    }

    let number = Number(reversedString)

    if (number > (2**31-1)) {
        return 0
    }
    
    return number

}

console.log(reverseInteger(-34500))