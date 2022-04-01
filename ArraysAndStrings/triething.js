class AutocompleteSystem {
    constructor(sentences, times) {
     this.sentences = sentences;
     this.times = times;
     this.input = '';
     this.trie = {};
     
     
      for (let i = 0; i < sentences.length; i ++) {
         this.buildTrie(sentences[i], times[i])
     }
 }
     
 
 
  buildTrie (string, times) {
     
     // you need to add the number of times to whatever it is already
     let node = this.trie;
     
     for (let i = 0; i < string.length; i ++) {
         if (node[string[i]] === undefined) {
             node[string[i]] = {};
             node = node[string[i]]
             node.times = times
         } else {
             node = node[string[i]] 
             node.times += times
         }
         
     }
     
 }
 
 /** 
  * @param {character} c
  * @return {string[]}
  */
  input (c) {
     if (c === '#') {
         this.buildTrie(this.input, 1)
         return []
     }
     this.input += c;
     
     //iterate through the input, check the trie for the current letter, then go down that trie
     //until we hit the end of the input, 
     //then from there we go down the top 3 most visited letters
     let node = this.trie 
     
     for (let i = 0; i < this.input.length; i++) {
         if (node[this.input[i]] == undefined) return [];
         
         node = node[this.input[i]]
     }
     
     //now we have a node with the last letter, we need to go down 3 roads 
     
     let responce = [];
     const helper = function(node, string) {
         if (Object.keys(node) < 2) {
             responce.push(string)
             return;
         }
         
         let max = 0
         let letter = ''
         
         for (const key in node) {
             if (key === 'times') continue;
             if (node[key].times > max){
                  max = node[key].times
                 letter = key
             }
             
         }
         string += letter
         helper(node[letter], string)
     }
     
     
     let array = [];
     for (const key in node) {
         if (key === 'times') continue
         array.push([key, node[key]])
     }
     
     array.sort((a,b) => {
         return a[1].times - b[1].times
     })
     
     for (let i = 0; i < 3; i++) {
         helper(array[i][1], this.input + array[i][0])
     }
     
     
     return responce
   }
 }

 var obj = new AutocompleteSystem(["i love you", "island", "iroman", "i love leetcode"], [5, 3, 2, 2])
 console.log(obj.input)
  var param_1 = obj.input('i')