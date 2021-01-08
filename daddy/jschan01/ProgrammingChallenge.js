//Question 1

function question1(n){
  
}

question1(11);
question1(10);

//Question 2


//Question 3

function findFactor (num) {
    var answer = [];
    for (var k=0;k<=num;k++) {
        if (num%k==0) {
            answer.push(k);
        }
    }
    return answer
}

findFactor(7);

function findPrime (num) {
    var factors = findFactor(num);
    if (factors.length == 2) {
        return true
    } 
    else {
        return false
    }
}

findPrime(19);
findPrime(9);
