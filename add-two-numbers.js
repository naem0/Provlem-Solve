
//2. Add Two Numbers

//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

//You may assume the two numbers do not contain any leading zero, except the number 0 itself.

var addTwoNumbers = function(l1, l2) {
    let reversed1 = [];
    for(let i = l1.length - 1; i >= 0; i--){
        reversed1.push(l1[i]);
    }
    let reversed2=[];
    for(let i = l2.length - 1; i >= 0; i--){
        reversed2.push(l2[i]);
    }
    let revarsnum1=''
    reversed1.map((num)=>{
        revarsnum1 = revarsnum1 + num.toString();
    });
    
    let revarsnum2=''
    reversed2.map((num)=>{
        revarsnum2 = revarsnum2 + num.toString();
    });
    const sum = parseInt(revarsnum1) + parseInt(revarsnum2);
    let myFunc = num => Number(num);
    let intArr = Array.from(String(sum), myFunc);
    let result=[];
    for(let i = intArr.length - 1; i >= 0; i--){
        result.push(intArr[i]);
    }

    return result;
};
console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]))
