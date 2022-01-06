//URLify 
//convert a spaces in a word to %20 given the string and the true length of the string


const URLify = function (string, length) {
    // cut string up by spaces
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            console.log('lol')
            string.slice(i, 1, '%20')
        }
    }
    return string;
}
str = 'yuuup'
'yuuh'.slice(0,1)
console.log(URLify('hello d', 15))
