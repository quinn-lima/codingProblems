var addTwoNumbers = function(l1, l2) {
    let l1string = '';
    let l2string = '';
    
    while (l1 !== null) {
      l1string = l1.val + l1string
      l1 = l1.next;
        
    }
    
    while (l2 !== null) {
      l2string = l2.val + l2string
      l2 = l2.next;
    }
    
    
console.log(l1string, l2string)
    let sum = Number(l1string) + Number(l2string);
    let sumString = sum.toString();

    console.log(sum)
    
    let list = {val: Number(sumString[sumString.length - 1]), next: null}
    this.list = list;
    
    if (sumString.length > 1) {
    //let next = list.next
   // ListNode(Number(sumString[sumString.length-1]))
    let i = sumString.length - 2;
    while (i >= 0) {
        list.next = {val: Number(sumString[i]), next: null}
        list = list.next
        i -= 1;
    }
        
    }
    console.log('list', list)
    return this.list

    
};


console.log(addTwoNumbers({val: 1, next: {val: 0, next: {val: 1, next: null}}}, {val: 4, next: null}))