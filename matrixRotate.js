var rotate = function(matrix) {
    let n = matrix.length
    let newMatrix = [];
    for (let i = 0; i < n; i ++) {
        let row = [];
        for (let j = n - 1; j >= 0 ; j --) {
            row.push(matrix[j][i])
        
        
      }
        newMatrix.push(row)
        
   }
    for (let i = 0; i < n; i ++) {
        matrix[i] = newMatrix[i]
        
    }
    return matrix;
};

let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
console.log(rotate(matrix))