function apple() {
    console.log("apple")
}

apple()

function calculate() {
   console.log("1 + 1 = 2") 
}

calculate()

console.log("Add 1 to " + number[0]);

var theArrayWithNothingInIt = []
theArrayWithNothingInIt

var number = [1, 2, 3, 4, 5]

number.pop();
number

number.push(10);
number

//is a larger or less than 10
var a = 20;

if (a > 10) { 
    console.log("a is larger than 10");
} else {
    console.log("a is less than 10");
}

//find if b is divisible by 7
var b = 324325;
if (b%7 == 0) {
    console.log(true)
} else {
    console.log(false)
}

function sayHello() {
   console.log("hello") 
}

sayHello();

function saySomething(word) {
   console.log(word) 
}

function showMessage(m, string, num) {
    console.log(m + string + num);
}

showMessage("march", "'s winner number is ", 22);

saySomething("hello")
saySomething("bye")



1 + 1

function test(score) {
    if (score < 0) {
        console.log("You failed!!!");
    }
    else {
        console.log("You passed!!!");
    }
}

function greetUser(greeting) {
    console.log(greeting);
}

function f (x) {
    var a = 2;
    return a + x;
}

f("2")

function g (num, counter){
    for(var k = 1; k < counter; k++){
        num = num * 2;
    }
    return num;
}

g(2,5)





/*Hangman Game*/

var words = [
    "acknowledgement",
    "beginning",
    "chauffeur",
    "dyslexia",
    "exaggerate",
    "fluorescent",
    "gist",
    "hyperverse",
    "intelligence",
    "jackpot",
    "kangaroo",
    "legitimate",
    "mischievious",
    "neanderthal",
    "onomatopoeia",
    "psychology",
    "quail",
    "representative",
    "somophore",
    "temperament",
    "underground",
    "vengeance",
    "wednesday",
    "yield",
    "zoologically"
]
var word = words[Math.floor(Math.random() * words.length)];

words[Math.floor(Math.random() * words.length)];
var answerArray = [];
    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;
while (remainingLetters > 0) {
    alert(answerArray.join(" "));
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
if (guess === null) {
    break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
            }
            }
            }
        }
        alert(answerArray.join(" "));
 alert("Good job! The answer was " + word);


// ------------------------------------------------------------
// test
// ------------------------------------------------------------
function multiply(a, b) {
    return a*b;
}
multiply(5, 10);

function factor(a, b) {
    var x = b%a;
    if (x == 0) {
        return true 
    }
    else {
        return false
    }
}
factor(10, 100);
factor(4, 10);
factor(2, 10);

function fraction(a, b, c) {
    return a*c/b;
}
fraction(10, 5, 3);
// return an array of consecutive number
// input: number
// output: array of numbers
function give_num_array(num) {
    var arr = []
    for (var k=1; k<=num; k++) {
        arr.push(k)
    }
    return arr
}

function print_num_array(num) {
    var arr = []
    for (var k=1; k<=num; k++) {
        arr.push(k)
    }
    console.log(arr)
}


var a = give_num_array(5)
var b = print_num_array(5)

a

function g(a) {
    console.log("I don't know the answer")
    console.log([1,2])
    return [1,a]
}
var a = g(10)
a



function f(a) {
    var x = 50
    var b = 10
    var c = 2
    return a
}
// var a = f("nestor")
var a = f([1,2])
a

function gg(a) {
    console.log("Hello Fun Fun")
    var b = 1 + 5 
    var c = 2 * 5 
    return 10
}
gg(99480329842)

var a = gg(1)
a

f(4)

function factorial(a) {
   var answer = 1
   for (var k=a; k>0; k--) {
       console.log(k, answer)
       answer = answer * k
   }
   return answer
}

factorial(5);

function combination(a, b) {
    var y = factorial(a);
    var x = factorial(b);
    var z = factorial(b-a);
    return x/y/z
}

combination(2, 5);


function and(a, b) {
    if (a === true && b === true){
        return true
    }
    else {
        return false
    }
}

and(true, true);


function xor(a, b) {
    if ( a === true && b === true || a === false && b === false) {
        return false
    }
    else {
        return true
    }
}

function xor2(a, b) {
    return !or( and(a, b), !or(a,b))
}

!true
!false
xor(true, true);
xor2(true, true);
xor2(true, false);
xor2(false, false);
xor2(false, true);


function or(a, b) {
    if(a=== false && b === false){
        return false
    }
    else {
        return true
    }
}

or(false, false);

// boolean
false
true
// string
"true"
"TruE"

if (false) {
    console.log("No")
} else {
    console.log("Yes")
}

function call() {
    call();
}

call();

var month = prompt("Enter a month");
var charsInMonth = month.length;
if (charsInMonth > 3  ) {
monthAbbrev = month.slice(0, 3);
}

var str  = prompt("Enter some text");var numChars = str.length;
for (var i = 0; i < numChars; i++) {
    if (str.slice(i,  + 2) === " ") {
        alert("No double spaces!");
        break;
    }
}

var i = 0;
while (i <= 1000000) {
    console.log(i);
    i++;
}

Math.random();
Math.floor();

//=====================================================
//test
//=====================================================

//Question 1

var sentence1 = "Funfun failed the test."
var sentence2 = "Nestor rescued Sleepy from the jail"
var sentences = [sentence1, sentence2]
sentences[0] = sentences[0].replace ("Funfun", "Nestor")
sentences[1] = sentences[1].replace ("Sleepy", "Snicky")
console.log(sentences)

//Question 2
function convertMonthToInitial(fullMonthName) {
    return fullMonthName.slice(0, 3);
}

convertMonthToInitial("December")

function convertMonthArrayToInitial(full_name_array) {
    var month_initial_array = []
    var length = full_name_array.length;
    for (var k= 0; k <= length-1; k++) {
        // console.log(full_name_array[k])
        var selected_month = full_name_array[k]
        // TODO: get the selected month initial
        var initial = selected_month.slice(0,3)
        // TODO: put the initial to the returned array
        month_initial_array.push(initial);
    }
    return month_initial_array
}

convertMonthArrayToInitial(["December", "March", "April"])

//Question 3
var sentence = "Flyfun likes functions";
sentence = sentence.replace ("F", "*");
sentence = sentence.replace (/f/g, "*");
sentence = sentence.replace (/l/g, " ");


//Question 4
function convertMonthName(monthNum) {
    if (monthNum === "01") {
        return "January"
    }
    if (monthNum === "02") {
        return "February"
    }
    if (monthNum === "03") {
        return "March"
    }
    if (monthNum === "04") {
        return "April"
    }
    if (monthNum === "05") {
        return "May"
    }
    if (monthNum === "06") {
        return "June"
    }
    if (monthNum === "07") {
        return "July"
    }
    if (monthNum === "08") {
        return "August"
    }
    if (monthNum === "09") {
        return "September"
    }
    if (monthNum === "10") {
        return "October"
    }
    if (monthNum === "11") {
        return "November"
    }
    if (monthNum === "12") {
        return "December"
    }
}

convertMonthName("01");

function convertDate(date) {
    var dayNumber = date.slice(0,2)
    var monthNumber = date.slice(3, 5)
    var yearNumber = date.slice(6,10)
    return dayNumber + " "  + convertMonthName(monthNumber) + " " +  yearNumber
    // return dayNumber + " "  + monthNumber + " " +  yearNumber
}

convertDate("06/11/2007")


//=========================================
//test
//=========================================

//Question 1
//This gives a random number between a and b inclusive
function randInt(a, b) {
    return a + Math.floor(Math.random() * Math.floor(b));
}

function randomCompassPoint(a, b, c, d) {

}

//Question 2
// TODO: add one to each number in an array
function addOne(array) {
    var arr = []
    var length = array.length
    for (var k=0; k<=length-1; k++) {
        // TODO: select the item
        var selectedNumber = array[k];
        // TODO: add one to the item
        selectedNumber++;
        // TODO: push to the output
        arr.push(selectedNumber)
    }
    // console.log(arr)
    return arr
}

addOne([5,6,7])
// [6,7,8]

// array = [5,6,7]
// 1 <= array



//Question 3
//a)
// TODO: find the largest number in an array
function largest(inputNumbers) {
    
}

//b)
// TODO: add all the numbers in an array

function add(inputNumbers) {

    var len = inputNumbers.length
    // for loop:
    // do: select next number
    // add to the prevous answer
    // continue until the end is reached
    for (var k=0; k<len; k++) {
        var selected_number = inputNumbers[0];
        console.log("k ", k, "sel ", selected_number);
    }

}
add([14,15,66])

// > add([14,15,66])
// k  0 sel  14
// k  1 sel  14
// k  2 sel  14

// want
// k  0 sel  14
// k  1 sel  15
// k  2 sel  66 

function add(inputNumbers) {

    //----------------------------------------
    // add 3
    var previous_answer = inputNumbers[0] + inputNumbers[1]
    // to add one more: 
    // select the extra one 
    var selected_number = inputNumbers[2]
    // then add to the previous answer
    var answer = previous_answer + selected_number

    //----------------------------------------
    // add 4
    answer = answer + inputNumbers[3];

    //----------------------------------------
    // add 4
    answer = answer + inputNumbers[4];

    return answer
}

add([1, 2, 3]);

//addcertainnumberonly

function add2Only(array) {
    // answer2only = array[0] + array[1];
    answer1only = array[0]
    answer2only = answer1only + array[1]
    answer3only = answer2only + array[2]
    answer4only = answer3only + array[3]
    answer5only = answer4only + array[4]
    return answer
}

add2Only([1, 2, 3]);

add([1, 2]);
add([1, 2, 3, 4, 5]);
add([11, 12, 3, 4, 5]);
// 3
// [3]
//----------------------------
//array questions months
//----------------------------

function numbersToMonths(num) {
    if (num === 1) {
        return "January"
    }
    if (num === 2) {
        return "February"
    }
    if (num === 3) {
        return "March"
    }
    if (num === 4) {
        return "April"
    }
    if (num === 5) {
        return "May"
    }
    if (num === 6) {
        return "June"
    }
    if (num === 7) {
        return "July"
    }
    if (num === 8) {
        return "August"
    }
    if (num === 9) {
        return "September"
    }
    if (num === 10) {
        return "October"
    }
    if (num === 11) {
        return "November"
    }
    if (num === 12) {
        return "December"
    }
}

numbersToMonths(08);

//==================================
//test
//==================================

//Question 1

function under10(array) {
    var length = array.length;
    for (k=0; k<=length-1; k++){
        var selectedNumber = array[k];
        console.log(`k: ${k} selectedNumber: ${selectedNumber}`)
        if (selectedNumber<10) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}

under10([1, 4, 9, 3, 6, 12, 13])
under10([1, 3, 7, 2, 4, 9, 5])

//Question 4

function middle(a, b, c) {
    
}
middle(3, 4, 7);
middle(2, 4, 5);

//Question 3
function longestString(a, b) {
    var x = a.length;
    var y = b.length;
    if (x<y) {
        return b
    }
    if (x>y) {
        return a
    }
    if (x==y) {
        return a
    }
}

longestString("daddy", "nestor")
longestString("d", "d")
longestString("and", "vet");

//Question 2
function linear(a, b, c) {
    if (a + b == c) {
        return true
    }
    if (b + c == a) {
        return true
    }
    if (a + c == b) {
        return true
    }
    return false
}
linear(3, 8, 5);
linear(5, 8, 3);
linear(5, 3, 8);
linear(1, 5, 2);
linear(1, 5, 2);

// ================================================

var d = {a:1, b:2, c:3, d:4};

Object.values(d);
d.d

time = {
    day: 3,
    month: 8,
    year: 2020
};

currency = {
    unit: "AUD",
    amount: 100
};

//=================================================

//replace 4 with 5 in array
var number = [1, 2, 3, 4];
number.pop();
number.push(5);
number

//Add 5 between 2 and 3 in array
var number = [1, 2, 3, 4];
number.splice(2, 0, 5);
number

//delete last number in array
var number = [1, 2, 3, 4];
number.pop();
number

//=================================================

//replace place with person in object
var object = {
    place: "Sydney",
    time: 2020
};
object.place = "Aus";
object

//add person in object
var object = {
    place: "Sydney",
    time: 2020
};
object.person = "Nestor";
object

//delete place in object
var object = {
    place: "Sydney",
    time: 2020
};
delete object.place;
object


//========
var a;
console.log(a);
console.log(hi);
1+a
a = "5"
a==5
a===5
b=[1, 2, 3, 4];
typeof(b);
b
b instanceof String
b instanceof Array
1==="1"

//============================
var arr = [11, 12, 13, 14];
for (k in arr) {
    // console.log(k)
    console.log(k, arr[k]);
}
for (item of arr) {
    console.log(item)
}
//
c = {'a': 1, 'b':2, 'c': 4, 'hi':10}

for (k in c) {
    console.log(k, c[k])
}
//
c = {'a': 5, 'b': 3, 'c': 6};
keys = ['a', 'b', 'c']
for (hi of keys) {
    console.log(hi)
    console.log(c[hi])
}

c.a
c.b
c.c

c.key
c['key']