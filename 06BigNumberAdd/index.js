
function bigNumberAdd(num1, num2) {
    num1 = String(num1);
    num2 = String(num2);
    let length = Math.max(num1.length, num2.length);
    num1 = num1.padStart(length, '0');
    num2 = num2.padStart(length, '0');
    let result = '';
    let carry = 0;
    for (let i = length - 1; i >= 0; i--) {
        let count = parseInt(num1[i]) + parseInt(num2[i]) + carry;
        result = count % 10 + result;
        carry = count > 9 ? 1 : 0
    }

    if(carry){
        result = 1 + result;
    }
    return result;
}

console.log(bigNumberAdd(1,9));
console.log(bigNumberAdd(2,3));
console.log(bigNumberAdd(1,99));
console.log(bigNumberAdd(1,'999999999999999999999999999999999999999999999999999999999999999999999999999999999'));