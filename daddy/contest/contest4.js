// question 1
// given an array of numbers containing 1,2,3 or 4
// return the mode of the numbers
function q1 (arr) {
    var count1 = 0;
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] == 1) {
        count1++
        }
    }
    var count2 = 0;
    for (var k = 0; k < arr.length; k++) {
        if(arr[k] == 2) {
        count2++
        }
    }
    var count3 = 0;
    for (var k = 0; k < arr.length; k++) {
        if(arr[k] == 3) {
        count3++
        }
    } 
    var count4 = 0;
    for (var k =0; k < arr.length; k++) {
        if (arr[k] == 4) {
            count4++
        }
    }
    if (count1>count2&&count1>count3&&count1>count4) {
        return 1
    }
    if (count2>count1&&count2>count3&&count2>count4) {
        return 2
    }
    if (count3>count2&&count3>count1&&count3>count4) {
        return 3
    }
    if (count4>count2&&count4>count3&&count4>count2) {
        return 4
    }
}
 
xtest('question1', () => {
    expect(q1([1, 1, 2, 3, 3, 3, 4], 1)).toBe(3);
    expect(q1([1, 1, 1, 3, 3, 4, 4], 1)).toBe(1);
    expect(q1([1, 1, 2, 3, 4, 4, 4], 1)).toBe(4);
});

// the following 3 questions are related
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1- min)) + min;
}

// question 2
// use the above function to make a new function which behaves like rolling a dice
function q2 () {
    return getRandomInt(1, 6);
}

// question 3
// write a function to return an array of 10 numbers
// where each number is the sum of rolling two die
function q3 () {
    var answer = [];
    for (var k = 0; k < 10; k++) {
        var diceOne = q2();
        var diceTwo = q2();
        answer.push(diceOne + diceTwo);
    }
    return answer
}
q3();

// question 4
// if I use the camel cup dice (return 1,2 or 3) to roll 3 times and add the numbers together
// what is the result that appears the most?
// Prove the result by generating 10000 sums and find the number which appears the most

//Get Random Integer

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1- min)) + min;
}

//Find how many of particular number in array

function countInArray(arr, number) {
    var count = 0;
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] === number) {
            count++;
        }
    }
    return count;
}

function indexOfMax(arr) {
    var max = arr[0];
    var maxIndex = 0;
    for (var k = 1; k < arr.length; k++) {
        if (arr[k] > max) {
            maxIndex = k;
            max = arr[k];
        }
    }
    return maxIndex
}

function mode (arr) {
    var answer = []
    for (var x = 3; x<=9; x++) {
        answer.push(countInArray(arr, x));
    }
    console.log(answer);
    var index = indexOfMax(answer);
    return answer[index];
}

function q4 () {
    var answer = [];
    for (var k = 0; k < 1000; k++) {
        var diceOne = getRandomInt(1, 3);
        var diceTwo = getRandomInt(1, 3);
        var diceThree = getRandomInt(1, 3);
        answer.push(diceOne + diceTwo + diceThree)
    }
    console.log(answer);
    console.log(mode(answer));
}

countInArray([1, 1, 1, 1, 1, 2, 3, 2, 3, 4], 1);
indexOfMax([3, 4, 2, 3, 4, 5, 6, 7, 8, 9]);
mode([3, 4, 2, 3, 3, 4, 5, 6, 7, 8, 9]);
q4();