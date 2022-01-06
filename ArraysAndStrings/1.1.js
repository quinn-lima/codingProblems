const isUnique = function (string) {
    //create alphabet variable which contains all letters
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    //iterate through string
    for (let i = 0; i < string.length; i++) {

        //if alphabet includes string
        if (alphabet.includes(string[i])) {
            alphabet = alphabet.slice(i -1, i)
        }
        //slice (alphabet)
        //if alphabet !include string
        if (!alphabet.includes(string[i])) {
            return false;
        }
        //  return false
    }

return true

};

console.log(isUnique('string'))