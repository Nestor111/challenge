// question 1
// Given a number y,
// make the longest sequence of Fibonacci numbers so that all numbers are equal to or smaller than or equal to y

function q1(num) {
    var x = 1;
    var y = 1;
    var fibonacciArray = [1];
    for (var k = 0; y<=num; k++) {
        fibonacciArray.push(y);
        y=y+x;
        x=y-x;
    }
    return fibonacciArray
}

q1(1000000000000000000000000000);

test('question1', () => {
    expect(q1(10)).toStrictEqual([1,1,2,3,5,8]);
    expect(q1(15)).toStrictEqual([1,1,2,3,5,8,13]);
    expect(q1(55)).toStrictEqual([1,1,2,3,5,8,13,21,34,55]);
});

// question 2
// In coordinate geometry, a point is represented as (x,y)
// Given two points on a plane, find the smallest distance between two points
// Hint: use Pythagoras theorem
// Math.sqrt()

function q2(a, b) {
    var horizontal = (b[0]-a[0])**2
    var vertical = (b[1]-a[1])**2
    var number = horizontal+vertical;
    return Math.sqrt(number)
}

test('question2', () => {
    expect(q2([0,0],[3,4])).toBeCloseTo(5.0, 2);
    expect(q2([0,0],[8,6])).toBeCloseTo(10.0, 2);
    expect(q2([2,1],[8,6])).toBeCloseTo(7.81, 2);
});