// question 1
// 1 pt
// count number of odd numbers in the array

function q1(arr) {
    var count = 0;
    for (k=0;k<arr.length;k++) {
        if (arr[k] % 2 === 1) {
        count++
        }
        console.log("k: " + k + " count: " + count + " arr[k]: " + arr[k]);
    }
    return count
}
q1([2, 8, 6, 4, 1, 4, 3, 4]);
q1([2, 4, 6, 5, 7, 9]);
q1([1, 3, 6, 8]);

test('question1', () => {
    expect(q1([1,3,6,8])).toBe(2);
    expect(q1([2,4,6])).toBe(0);
    expect(q1([2,4,6,5,7,9])).toBe(3);
});

// question 2
// 1 pt
// sum all the even numbers in an array

function q2(arr) {
    var total = 0;
    for (k=0;k<arr.length;k++) {
        if (arr[k]%2===0){
            total = total + arr[k];
        }
        console.log("arr[k]: " + arr[k] + " total: " + total)
    }
    return total
}

q2([2, 6, 1, 4, 5, 9]);

test('question2', () => {
    expect(q2([1,4,6,8])).toBe(18);
    expect(q2([1,4,7,2])).toBe(6);
});

// question 3
// 1 pt
// is there an even number in the array? return true or false

function q3(arr) {
    var count = 0;
    for (k=0;k<arr.length;k++) {
        if (arr[k]%2==0) {
            count++
        }
    }
    if (count>0) {
        return true
    }
    else {
        return false
    }
}
q3([2, 4, 6, 1, 5]);

test('question3', () => {
    expect(q3([1,4,6,8])).toBe(true);
    expect(q3([1,7])).toBe(false);
    expect(q3([1,3,2,7])).toBe(true);
});

// question 4
// 2 pts
// remove all even numbers in the array

function q4(arr) {
    var answer = [];
    for (k=0;k<arr.length;k++) {
        if (arr[k]%2==1) {
            answer.push(arr[k]);
        }
    }
    return answer
}

test('question4', () => {
    expect(q4([1,4,6,8])).toStrictEqual([1]);
    expect(q4([1,7])).toStrictEqual([1,7]);
    expect(q4([1,3,2,7])).toStrictEqual([1,3,7]);
});

// question 5
// 2 pts
// find the range of the numbers in the array

function q5(arr) {
    var least = arr[0];
    var largest = arr[0];
    for (k=1;k<arr.length;k++) {
        if (arr[k]>largest) {
            largest = arr[k];
        }
        if (arr[k]<least) {
            least = arr[k];
        }
        console.log("least: " + least + " largest: " + largest + " arr[k]: " + arr[k]);
    }
    var answer = largest-least
    return answer
}
q5([5, 3, 2, 7]);

test('question5', () => {
    expect(q5([1,3,2,7])).toBe(7-1);
    expect(q5([5,3,2,7])).toBe(7-2);
    expect(q5([5,3,4])).toBe(5-3);
});
