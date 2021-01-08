
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

function gcd (a,b) {
    while (b=>1) {
        var r = a%b;
        a = b;
        b = r;
        if (b==0) {
            return a
        }
    }
}

function coprime (num) {
    var array = [];
    for (var k=1; k<=num;k++) {
        if (gcd(k,num)==1) {
            array.push(k);
        }
    }
    return array.length
}

coprime(10);

describe('coprime', () => {

    test('coprime', () => {
        expect(coprime(10)).toBe(4);
        expect(coprime(12)).toBe(4);
        expect(coprime(13)).toBe(12);
        expect(coprime(15)).toBe(8);
    });
});


describe('gcd', () => {

    test('gcd', () => {
        expect(gcd(16, 10)).toBe(2);
        expect(gcd(10, 20)).toBe(10);
        expect(gcd(12, 20)).toBe(4);
        expect (gcd(244, 420)).toBe(4);
    });
});

describe('question1', () => {

    test('coprime', () => {
        expect(findPrime(19)).toBe(true);
    });
})

describe('question2', () => {

    test('factor', () => {
        expect(findFactor(9)).toEqual(expect.arrayContaining([1,3,9]));
        expect([1,3,9]).toEqual(expect.arrayContaining(findFactor(9)));
    });
})

function slow_goldbach(num) {
    var primesarray = [];
    for (var k=1; k<=num; k++) {
        if (findPrime(k)==true) {
          primesarray.push(k);
        }
    }
    for (var x=1; x<=primesarray.length; x++) {
        if (findPrime(num-primesarray[x])==true){
            return [primesarray[x], num-primesarray[x]]
        }
    }
}
slow_goldbach(2343758);

function goldbach(num) {
    for (var k=1; k<=num; k++) {
        if (findPrime(k)==true) {
            if (findPrime(num-k)==true) {
                return [k, num-k]
            }
        }
    }
}
goldbach(2343758);
goldbach(20);

function graycode (length) {
    var oldarr = ['0', '1']
    for (var digit=2; digit<=length; digit++) {
        var newarr = [];
        for (var index=0; index<oldarr.length; index++) {
            newarr.push(oldarr[index]+'1');
            newarr.push(oldarr[index]+'0');
            // console.log(oldarr, newarr, index, oldarr[index])
        }
        oldarr = newarr
    }
    return oldarr
}

graycode(4)