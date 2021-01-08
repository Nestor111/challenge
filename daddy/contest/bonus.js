// Part One
// Math.random() returns a random number from 0 to 1
// Write a function random_uniform() to return a random number from -1 to 1 instead
function random_uniform() {
    return Math.random() * 2 + -1;
}

random_uniform(-1, 1);

// Part Two
// Watch up to 5.44 minutes of this video:
// https://www.youtube.com/watch?v=L7nsVrt41Rg
// write your own "direct_pi" code in javascript to find the average values

function direct_pi () {
    var trials = 10000000000;
    var hits = 0;
    for (var k = 0; k<=10000000000; k++) {
        var x = random_uniform();
        var y = random_uniform();
        if (x**2+y**2<1) {
            hits++
        }
    }
    return 4*hits/trials
}

direct_pi();