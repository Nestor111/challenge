// question 1
// 1 pt
// given a number and a string
// substitutes the inputs to make a sentence
function replace(number, string) {
    // return("funfun turns right by " + number + " degrees from north, how can he go " + string + "?");
    return(`funfun turns right by ${number} degrees from north, how can he go ${string} ?`);
}

// replace(10, "east")

test('question1', () => {
    expect(replace(13, "south")).toBe("funfun turns right by 13 degrees from north, how can he go south?");
    expect(replace(9, "west")).toBe("funfun turns right by 9 degrees from north, how can he go west?");
    expect(replace(109, "east")).toBe("funfun turns right by 109 degrees from north, how can he go east?");
});

// question 2
// 1 pt
// given a number
// translate into east/west/north/south
// function changeNumberToCompassPoint(number) {
//     if (number===0) {
//         return "north"
//     }
//     if (number===1) {
//         return "east"
//     }
//     if (number===2) {
//         return "south"
//     }
//     if (number===3) {
//         return "west"
//     }
// }

// function changeNumberToCompassPoint(number) {
//     if (number===0) {
//         return "north"
//     } else if (number===1) {
//         return "east"
//     } else if (number===2) {
//         return "south"
//     } else (number===3) {
//         return "west"
//     }
// }

function changeNumberToCompassPoint(number) {
    switch(number) {
        case 0:
            return "north"
        case 1:
            return "east"
        case 2:
            return "south"
        case 3:
            return "west"
    }
}




test('question2', () => {
    expect(changeNumberToCompassPoint(1)).toBe("east");
    expect(changeNumberToCompassPoint(3)).toBe("west");
    expect(changeNumberToCompassPoint(0)).toBe("north");
    expect(changeNumberToCompassPoint(2)).toBe("south");
});

// question 3
// 1 pt
// given an array
// return the sum of the squares
function squareThenAdd(arr) {
    var answer = 0;
    for (idx=0;idx<arr.length;idx++) {
        var sqNumber = arr[idx]**2;
        answer += sqNumber;
    }
    return answer
}
squareThenAdd([1, 3, 8]);

test('question3', () => {
    expect(squareThenAdd([1, 3])).toBe(1**2 + 3**2);
    expect(squareThenAdd([2, 5, 6])).toBe(2**2 + 5**2 + 6**2);
});

// // question 4
// // 1 pt
// // given an array of two numbers
// // return an array with the positions swapped
function arraySwap (arr) {
    // var firstNumber = arr[0];
    // var secondNumber = arr[1];
    // var newArray = [];
    // newArray.push(secondNumber);
    // newArray.push(firstNumber);
    // return newArray
    return [arr[1], arr[0]]
}

arraySwap([4,5])

test('question4', () => {
    expect(arraySwap([1, 3])).toStrictEqual([3, 1]);
    expect(arraySwap([2, 6])).toStrictEqual([6,2]);
});

// // question 5
// // 2 pts
// // given an array of names and other array of their scores
// // return the name of the person who has the higher score
function highScore (arr, people) {
    // original
    var largest_number= 0;
    //loop
    for (k=0;k<arr.length;k++) {
        //test if previous is larger than new score or not
        if (arr[k]>largest_number) {
            //update previous and winner
            largest_number = arr[k];
            winner = people[k];
        }
        //DEBUG
        // console.log(" Previous: " + largest_number+ " arr[k]: " + arr[k] + " Winner: " + winner);
    }
    return winner
}

highScore([3, 6, 5], ["panic" , "funfun", "sleepy"]);
highScore([3], ["panic"]);
highScore([3, 5], ["panic", "funfun"]);

test('question5', () => {
    expect(highScore([1, 3], ["funfun", "sleepy"])).toBe("sleepy");
    expect(highScore([4, 5, 3], ["funfun", "panic", "sleepy"])).toBe("panic");
});

// // question 6
// // 1 pt
// // given an array of numbers and a magic number
// // count the number of times the magic number appears in the array
function magicNumber (arr, magicNumber) {
    var numberOfTimes=0;
    for (k=0; k<=arr.length-1;k++) {
        if (arr[k]==magicNumber) {
            numberOfTimes++
        }
        // TODO: print all variables here
        console.log("arr[k]: " + arr[k] + " " + "numberOfTimes: " + numberOfTimes);
    }
    return numberOfTimes
}
magicNumber([4, 1, 9, 3, 4], 4);

test('question6', () => {
    expect(magicNumber([4, 4, 10], 4)).toBe(2);
    expect(magicNumber([4, 4, 10], 9)).toBe(0);
    expect(magicNumber([10, 10, 4, 4, 10], 10)).toBe(3);
});
