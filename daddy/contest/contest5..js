// question 1
// create a arithmetic progression seq with the given
// first number (a), constant difference (d) and length of sequence (n)
function q1 (a, d, n) {
    var answer = [];
    answer.push(a);
    answer.push(a+d);
    for (var k = 0; k < n-2; k++) {
        a = a + d;
        answer.push(a + d);     
    }
    return answer
}

q1(4, 3, 6);

test('question1', () => {
    expect(q1(4,3,5)).toStrictEqual([4,7,10,13,16]);
    expect(q1(1,2,5)).toStrictEqual([1,3,5,7,9]);
    expect(q1(-1,6,3)).toStrictEqual([-1,5,11]);
});

// question 2
// find if the given sequence is an arithmetic progression sequence
function q2(arr) {
    var count = 0;
    for (var k = 0; k < arr.length; k++) {
        if (arr[k+1]-arr[k]==arr[k+2]-arr[k+1]) {
            count++
        }
    }
    if(count==arr.length-2) {
        return true
    }
    else {
        return false
    }
}

test('question2', () => {dude perfect
    expect(q2([2,4,6,8,10])).toBe(true);
    expect(q2([4,5,6,10,11])).toBe(false);
    expect(q2([9,7,5,3,1])).toBe(true);
    expect(q2([4,5,7,6,8])).toBe(false);
    expect(q2([9,7,0,3,1])).toBe(false);
    expect(q2([0,7,5,3,1])).toBe(false);
});

// question 3
// find the number of prime numbers between two numbers (inclusive)
function findFactor (num) {
    var answer = [];
    for (var k=0;k<=num;k++) {
        if (num%k==0) {
            answer.push(k);
        }
    }
    return answer
}
function findPrime (num) {
    var factors = findFactor(num);
    if (factors.length == 2) {
        return true
    } 
    else {
        return false
    }
}
function q3 (a, b) {
    var count = 0;
    for (var k = a; k <= b; k++) {
        if (findPrime(k)==true) {
            count++
            // console.log("a: " + a + " b: " + b + " k: " + k + " findPrime(k): " + findPrime(k) + " count: " + count)
        }
    }
    return count
}

q3(1001, 2000);

test('question3', () => {
    expect(q3(1, 10)).toBe(4);
    expect(q3(1, 50)).toBe(15);
    expect(q3(1, 100)).toBe(25);
    expect(q3(1, 1000)).toBe(168);
    expect(q3(1, 500)).toBe(95);
    expect(q3(1001, 2000)).toBe(135);
    expect(q3(1, 10000)).toBe(1229);
});

// question 4
// find the nth prime number - the 1st prime is 2
function findIfNIsPrimeOrNot(n) {
    var answer = true; 
    for (var x=2 ; x<n ; x++) { 
        if (n%x == 0)  {
           answer = false ; 
        }
    }
    return answer
}
function q4(n) {
    var count = 0;
    for (var k=2 ; k<938507438513167365415074803165377314321658434084631028395734834738496537314321638374385634831653805735837548757343743417514348165783064137419856437480174331583610432; k++)  { 
        if (findIfNIsPrimeOrNot(k) == true) {
            count++ 
        }
        if (count == n) {
            return k
        } 
    }
}
q4(10);
findIfNIsPrimeOrNot(190);

test('question4', () => {
    expect(q4(1)).toBe(2);
    expect(q4(2)).toBe(3);
    expect(q4(10)).toBe(29);
    expect(q4(100)).toBe(541);
})
