// question 1
// find all factors in ascending order

function q1 (num) {
    var answer = [];
    for (var k=0;k<=num;k++) {
        if (num%k==0) {
            answer.push(k);
        }
        // console.log("num: " + num + " answer: " + answer + " k: " + k);
    }
    return answer
}

q1(8);

test('question1', () => {
    expect(q1(9)).toStrictEqual([1,3,9])
    expect(q1(12)).toStrictEqual([1,2,3,4,6,12])
    expect(q1(7)).toStrictEqual([1,7])
});

// question 2
// find the middle number in an array
// if there are two middles, give me the foremost one
// hint: math.floor() to round numbers
function q2 (arr) {
    if (arr.length%2==0) {
        return arr[arr.length/2-1]
    }
    if (arr.length%2==1) {
        return arr[(arr.length-1)/2]
    }
} 

q2 ([2, 7, 3, 9, 1, 5, 0]);
q2 ([3, 6, 1, 7, 2, 5]);

test('question2', () => {
    expect(q2([1,7,9])).toBe(7)
    expect(q2([7])).toBe(7)
    expect(q2([1,2,7,8])).toBe(2)

})

// question 3
// test if the given number is a prime (the smallest prime is 2)

function q3_1 (num) {
    var factors = q1(num)
    if (factors.length == 2) {
        return true
    } else {
        return false
    }
}

q3_1(17)
q3_1(27)

test('question3', () => {
    expect(q3_1(7)).toBe(true)
    expect(q3_1(27)).toBe(false)
    expect(q3_1(12)).toBe(false)
    expect(q3_1(1)).toBe(false)
    expect(q3_1(2)).toBe(true)
})

// question 4
// filter an array to keep prime numbers only

function q4 (arr) {
    var answer = [];
    for (var k=0;k<arr.length;k++) {
        var num = arr[k];
        // console.log("k", k)
        var factor = q1(num);
        // console.log("k", k)
        if (factor.length == 2) {
            answer.push(num);
        }
        // console.log("Num: " + num + " Answer: " + answer + " Factor: " + factor);
        // console.log("k", k)
    }
    return answer
}

q4([7, 6, 9, 13, 17, 20, 2]);
// q1(17)
q1(17)

test('question4', () => {
    expect(q4([4,6,7])).toStrictEqual([7])
    expect(q4([4,6,7,12,17])).toStrictEqual([7, 17])
    expect(q4([12,18])).toStrictEqual([])
})