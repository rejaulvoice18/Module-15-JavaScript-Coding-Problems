function fibonacciIterative(num){
    var fibo =[1,1];
    for(var i = 2; i<= num; i++){
        var nextFibo = fibo[i-1] + fibo [i - 2];
        fibo.push(nextFibo);
    }
    return fibo;
}


// function fibonacciIterative2(num){
//     var fibo = [1,1];
//     for(var i = 2; i<num; i++){
//         var nextFibo = fibo[i-1] + fibo[i-2];
//         fibo.push(nextFibo);
//     }
//     return fibo;
// }

function fibonacciIterative3(num){
    var fibo = [1,1];
    for(var i = 2; i<num; i++){
        var nextFib = fibo[i-1] + fibo[i-2];
        fibo.push(nextFib);
    }
    return fibo;
}
var resultF = fibonacciIterative3(3);
console.log(resultF);
// var result = fibonacciIterative2(5);
// console.log(result);

