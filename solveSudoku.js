var solveSudoku = function(board) {
    //backtracking
    
    let set = new Set();
    
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j< 9; j++) {
            if (board[i][j] !== '.') {
                set.add(`${i},${j}`)
            }
        }
    }
    
    const checkPosition = function (i, j, num) {
        if (board[i].includes(num.toString())) return false
        for (let k = 0; k < 9; k++) {
            if (board[k][j] == num) return false
        }
        
        if (i < 3 && j < 3) {
            var iIndex = [0, 3]
            var jIndex = [0, 3]
        }
        if (i < 3 && j < 6 && j >= 3) {
            var iIndex = [0, 3]
            var jIndex = [3, 6]
        }
        if (i < 3 && j >= 6) {
            var iIndex = [0, 3]
            var jIndex = [6, 9]
        }
        if (i >= 3 && i < 6 && j < 3 ) {
            var iIndex = [3, 6]
            var jIndex = [0, 3]
        }
         if (i >= 6  && j < 3 ) {
            var iIndex = [6, 9]
            var jIndex = [0, 3]
        }
         if (i >= 3 && i < 6 && j >= 3 && j < 6 ) {
            var iIndex = [3, 6]
            var jIndex = [3, 6]
        }
        if (i >= 3 && i < 6 && j >= 6 ) {
            var iIndex = [3, 6]
            var jIndex = [6, 9]
        }
        if (j >= 3 && j < 6 && i >= 6 ) {
            var jIndex = [3, 6]
            var iIndex = [6, 9]
        }
        if (i >= 6 && j >= 6) {
            var iIndex = [6, 9]
            var jIndex = [6, 9]
        }
        
        for (let k = iIndex[0]; k < iIndex[1]; k++) {
            for (let l = jIndex[0]; l<jIndex[1]; l++) {
                if (board[k][l] == num) return false
            }
        }
       return true   
        
    }
    
    
    const placeDigit = function (matrix, i, j) {
        if (set.has(`${i},${j}`)) {
            if (i === 8 && j === 8) return true
                if (j === 8) {
                    return placeDigit(matrix, i+1, 0)
                } else {
                    return placeDigit(matrix, i, j+1)
                }
        }
       
        let solution = false;
        
        
        for (let num = 0; num < 9; num++) {
            if (checkPosition(i, j, num)) {
                matrix[i][j] = num;
                if (i === 8 && j === 8) return true
                if (j === 8) {
                   solution = placeDigit(matrix, i+1, 0)
                } else {
                  solution = placeDigit(matrix, i, j+1)
                }
                if (solution) return true;
                
                matrix[i][j] = '.'
                
            }
            
        }
        
        return false
        
    }
    
    placeDigit(board, 0, 0)
    return board
};

let input=  [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]


var intToRoman = function(num) {
  
    const roman = {
        
        1 : 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
        
    }
    
    let string = num.toString()

    
    let solution = ''
   
  
   while (string.length) {
    let place = string.length - 1;
    let spot = 10 ** place
      
       let ten = Number(string[0]) * spot
       
       if (roman[ten]) {
           solution += roman[ten]
           string = string.slice(1, string.length)
           continue;
       }
     
       solution += roman[spot].repeat(Number(string[0]))
       string = string.slice(1, string.length)
       
   }
    
    
    
    return solution
      
  };

  console.log(intToRoman(58))

