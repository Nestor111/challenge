var fs = require('fs')

// ============================================================
// Helper functions
// ============================================================

function read_data(filename) {
    var data = fs.readFileSync(filename, 'utf8')
    arr = data.split("\n")
    return arr
}

read_data('data.txt');

// count number of occurence for each item in an array
function count(arr) {
    cnt = {}
    for (w of arr) {
        if (cnt[w] == undefined) {
            cnt[w] = 1
        } 
        else {
            cnt[w]++
        }
    }
    return cnt
}

count([1, 1, 2, 3, 2, 3, 4, 6, 5, 7, 9, 8, 3, 5]);

// ============================================================
// question 1
// ============================================================
// given an object which stores the number of occurrences for each number
// 1) find the mode
// 2) find the number of unique values

describe('question1', () => {

    let data = [1,5,4,8,8,9,11,8,1];

    var object = count(data);
    object
    Object.keys(object);
    Object.values(object);

    function mode(object) {
        var mode = 1;
        var largest = 0;
        for (key in object) {
            if (object[key]>largest) {
                largest=object[key]
                mode=key
            }
            // console.log("key: " + key + " object[key]: " + object[key] + " largest: " + largest + " mode: " + mode)
        }
        return parseInt(mode, 10);
    }

    function distinct (object) {
        var key = Object.keys(object);
        return key.length
    }

    test('mode', () => {
        expect(mode(count(data))).toBe(8);
    });
    test('distinct', () => {
        expect(distinct(count(data))).toBe(6);
    });
})

// ============================================================
// question 2
// ============================================================
// sheryl and nestor are playing funny games and they record
// the winner for each game in a file (data.txt)
// write a function to count the number of times they win


describe ('question2', () => {

    data = read_data('data.txt');

    function twoPeople(data) {
        var object = {};
        var nestorCount = 0;
        var sherylCount = 0;
        var data = read_data('data.txt');
        for (var k = 0; k<data.length; k++) {
            if (data[k]=='nestor') {
                nestorCount++
            }
            if (data[k]=='sheryl') {
                sherylCount++
            }
        }
        object.nestor = nestorCount;
        object.sheryl = sherylCount;
        return object
    }

    twoPeople('data.txt');

    // {nestor: 10, sheryl: 9}
    counter = twoPeople(arr)
    // console.log(counter)

    test('winner', () => {
        expect(counter['nestor'] - counter['sheryl']).toBe(1);
    });
})