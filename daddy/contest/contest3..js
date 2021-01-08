// question 1
// find the sum of consecutive numbers within 
// the range of two given (inclusive) numbers
function q1 (a, b) {
    var answer = ((a+b)*(b-a+1))/2
    return answer
}

test('question1', () => {
    expect(q1(2, 5)).toBe(14)
    expect(q1(1, 100)).toBe(5050)
    expect(q1(1, 1)).toBe(1)
    expect(q1(2, 1)).toBe(0)
});

// question 2
// if a fraction a/b is represents as an array [a, b]
// where a is the numerator and b is the denominator
// find the multiplication product of two fractions
function q2 (a, b) {
    var answer = [];
    answer.push(a[0]*b[0]);
    answer.push(a[1]*b[1]);
    return answer
}
q2 ([2, 5], [1, 3]);

test('question2', () => {
    expect(q2([2, 5], [1, 3])).toStrictEqual([2, 15])
    expect(q2([1, 2], [3, 5])).toStrictEqual([3, 10])
    expect(q2([1, 4], [6, 7])).toStrictEqual([6, 28])
});

// question 3
// given two arrays, return true if there is any number
// appears in both arrays, otherwise return false

function q3(a, b) {
    for (var aidx=0;aidx<a.length;aidx++) {
        for (var bidx=0;bidx<b.length;bidx++) {
            if (b[bidx] == a[aidx]) {
                return true
            }
            // console.log("a: " + a + " aidx: " + aidx + " a.length: " + a.length + " b: " + b + " bidx: " + bidx + " b.length: " + b.length);
        }
    }
    return false
}

q3([2, 5], [2, 3]);

test('question3', () => {
    expect(q3([2, 5], [1, 3])).toBe(false)
    expect(q3([2, 5], [2, 3])).toBe(true)
    expect(q3([0, 1], [2, 3])).toBe(false)
    expect(q3([9], [2, 9, 1])).toBe(true)
    expect(q3([2, 9], [2])).toBe(true)
});

// question 4
// is the given year a leap year?
function q4 (year) {
    if (year%4==0&&year%100!==0||year%400==0) {
        return true
    }
    else {
        return false
    }
}

test('question4', () => {
    expect(q4(1991)).toBe(false)
    expect(q4(1992)).toBe(true)
    expect(q4(2000)).toBe(true)
    expect(q4(1900)).toBe(false)
});