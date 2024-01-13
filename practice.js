function fibonacciIteration(num){
    var fibo = [1,1];
    for(i = 2; i <num; i++){
        var nextFib = fibo[i-1] + fibo[i-2];
        fibo.push(nextFib);
    }
    return fibo;
}

var result = fibonacciIteration(6);

console.log(result);