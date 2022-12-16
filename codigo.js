function fibonacci(num){
    const fib = [0, 1];
    let array = [];
    for(let i = 2; i <= num ; i ++){
        fib[i] = fib[i - 1] + fib[i -2] 
        array.push(fib[i]);
    }
    return array;
}

const newArr = fibonacci(3);
console.log(newArr);