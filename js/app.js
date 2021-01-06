'use strict';

var grade = 0;
var username = prompt('HELLO Tell Us Your Name Please')
alert("HELLO " + username.toUpperCase() + " Welcome To My WebPage If You Don't Mind I Want To Ask Some (Yes Or No) Questions");
document.write('<h2 id="welcome" > Welcome ' + username.toUpperCase() + ' To My Webpage</h2>');

var car = prompt('Is BMW My Favorite Car?');
if (car.toLowerCase() === 'yes' || car.toLowerCase() === 'y') {
    alert('That Is Right')
    grade = grade + 1;
} else if (car.toLowerCase() === 'no' || car.toLowerCase() === 'n') {
    alert('Wrong Answer')
}
//console.log(car.toLowerCase())

var aname = prompt('Is My Name Ahmed?');
if (aname.toLowerCase() === 'yes' || aname.toLowerCase() === 'y') {
    alert('Wrong Answer')
} else if (aname.toLowerCase() === 'no' || aname.toLowerCase() === 'n') {
    alert('That Is Right')
    grade = grade + 1;
}
//console.log(aname.toLowerCase())

var age = prompt('Am I 24 Years Old?');
if (age.toLowerCase() === 'yes' || age.toLowerCase() === 'y') {
    alert('That Is Right')
    grade = grade + 1;
} else if (age.toLowerCase() === 'no' || age.toLowerCase() === 'n') {
    alert('Wrong Answer')
}
//console.log(age.toLowerCase())

var glass = prompt('Am I Wear a Glasses?');
if (glass.toLowerCase() === 'yes' || glass.toLowerCase() === 'y') {
    alert('That Is Right')
    grade = grade + 1;
} else if (glass.toLowerCase() === 'no' || glass.toLowerCase() === 'n') {
    alert('Wrong Answer')
}
//console.log(glass.toLowerCase())

var game = prompt('Did You Like This Game?');
if (game.toLowerCase() === 'yes' || game.toLowerCase() === 'y') {
    alert('That Is Great')
    grade = grade + 1;
} else if (game.toLowerCase() === 'no' || game.toLowerCase() === 'n') {
    alert('Too Bad')
}
//console.log(game.toLowerCase())

var exact = 13;
var guess = prompt('Guess The Number Between 1 and 50 , You will Have 4 Attempts');
var i = 4;
while (i > 0) {
    if (parseInt(guess) === 13) {
        alert('That Was Correct');
        i = i - 4;
        grade = grade + 1;
    } else if (parseInt(guess) < 13) {
        guess = prompt('Try Again It Too Small You Got ' + i + ' Attempts Left')
    } else if (13 < parseInt(guess)) {
        guess = prompt('Try Again Too High You Got ' + i + ' Attempts Left')
    }

    i--
}
alert('The Correct Anwser Was 13')


var test = prompt('What Is My Favorite Car? Hint : There Are 5 Correct Answers And You Have 6 Attempts')
var Car = ['BMW ', 'KIA ', 'MERCEDES ', 'FORD ', 'HUNDA '];
var x = Car.length;
while (x > 0) {
    if (test.toUpperCase() + ' ' === Car[0] || test.toUpperCase() + ' ' === Car[1] || test.toUpperCase + ' ' === Car[2] || test.toUpperCase + ' ' === Car[3] || test.toUpperCase + ' ' === Car[4]) {
        alert('That Was Correct');
        x = x - 5
        grade = grade + 1;
    } else if (test !== Car) {
        test = prompt('That Was Wrong You Got ' + x + ' Attempt Left');
    }
    x--
}
alert('Check The Answers Down')
document.write('The Correct Answers Are : ' + Car + '  You Have Answered ' + grade + ' Questions Out Of 7 ')