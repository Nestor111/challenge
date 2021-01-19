// Sum of the even fibonnaci numbers under 4 million

function fibo(num) {
    var x = 1;
    var y = 1;
    var total = 0;
    var fibonacciArray = [1];
    for (var k = 0; y<=num; k++) {
        fibonacciArray.push(y);
        y=y+x;
        x=y-x;
    }
    for (i=0;i<fibonacciArray.length;i++) {
        if (fibonacciArray[i]%2===0){
            total = total + fibonacciArray[i];
        }
    }
    return total
}