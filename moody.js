const validParenthesis = function (string) {

    // string = ' (){}[]'
    // ([)]  
    // ')(([])'
    // parens = 0 
    
    let stack = [];

    let map = { '(' : ')', '[': ']', '{': '}'}


    for (let i = 0; i < string.length; i ++) {

        if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
            stack.push(string[i])
        } else {
            let paren = stack.pop()
            if (paren !== map[string[i]]) {
                return false;
            }
        }

    }

    if (stack.length) return false
    return true

}


const matrixFunc = function (matrix) {
let matrix =[[1, 0, 0],
             [1, 0, 0],
             [0, 0, 1]]

// find the indices of the 1's
// starting at those indices we recurse in directions containing 1's
// 

let forwardSum = 0
let backwardSum = 0

let n = matrix.length

for (let i = 0; i < matrix.length; i ++) {
    forwardSum += matrix[i][i];
    backwardSum += matrix[i][n - 1 - i]

}

return forwardSum + backwardSum


}


//[[]]



/*


customers 

id name

list of portfolios for each costomer id


portfolios 

id, costomer_id, portfolio_name


'INSERT into customers name ${(name)}'


SELECT costomers.name, portfolios.portfolio_name 
FROM customers INNER JOIN portfolios 
WHERE portoflios.customer_id = customers.id


list of portfolios

portfolios = [{name: __, data: ___, email: __}, {name: }]
CLASS COMPONENT

const portfolioClick = (event) => {

     this.setState({
         name: event.target.name
     })

}


render(
<renderPortfolios portfolios = {} portfolioClick = this.portfolioClick
)

interface = {
    portfolioClick : () => void
}


const renderPortfolios = function (props) {
return (
<table>
<th> portoflio name <th>
{
    portfolio.map(props.portfolios) => (
        <tr onClick = {props.portfolioClick}> {portfolio.name} </tr>
    )
}
</table>
)

}

/*