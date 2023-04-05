// 柯里化实现

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return (...partialArgs) => {
                return curried(...args.concat(partialArgs));
            }
        }
    }
}

let curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3, 4));
console.log(curriedSum(1)(2)(3, 4));
console.log(curriedSum(1)(2)(3));
