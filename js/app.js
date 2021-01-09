'use strict';

var grade = 0;
var username = prompt('HELLO Tell Us Your Name Please')
alert("HELLO " + username.toUpperCase() + " Welcome To My WebPage If You Don't Mind I Want To Ask Some (Yes Or No) Questions");
document.write('<h2 id="welcome" > Welcome ' + username.toUpperCase() + ' To My Webpage</h2>');

guess('Is BMW My Favorite Car?', 'That Is Right', 'Wrong Answer')
guess('Is My Name Ahmed?','Wrong Answer', 'That Is Right')
guess('Am I 24 Years Old?', 'That Is Right', 'Wrong Answer')
guess('Am I Wear a Glasses?', 'That Is Right', 'Wrong Answer')
guess('Did You Like This Game?', 'That Is Great', 'Too Bad')
GuessingGame('Guess The Number Between 1 and 50 , You will Have 4 Attempts')
GameArray('What Is My Favorite Car? Hint : There Are 5 Correct Answers And You Have 6 Attempts')


function getuserinput(Message) {
    return prompt(Message);

}

function notify(getMessage) {

    return alert(getMessage);
}



function guess(Qustion, Message, Message2) {
    var car = getuserinput(Qustion);
    if (car.toLowerCase() === 'yes' || car.toLowerCase() === 'y') {
        notify(Message);
        grade++;
    }
    else if (car.toLowerCase() === 'no' || car.toLowerCase() === 'n') {
        notify(Message2);
    }
}

function GuessingGame(Message) {
    var exact = 13;
var guess = getuserinput(Message);
var i = 4;
while (i > 0) {
    if (parseInt(guess) === exact) {
        notify('That Was Correct');
        grade = grade + 1;
        break;
        
    
    } 
    else if (parseInt(guess) < exact) {
        guess = getuserinput('Try Again It Too Small You Got ' + i + ' Attempts Left')
    } else if (exact < parseInt(guess)) {
        guess = getuserinput('Try Again Too High You Got ' + i + ' Attempts Left')
    }

    i--
}

if (parseInt(guess) !== exact) {
    
notify("The Correct Anwser Was" + exact);

} }


function GameArray(Message) {

var test = getuserinput(Message)
var Car = ['BMW ', 'KIA ', 'MERCEDES ', 'FORD ', 'HUNDA '];
var x = Car.length;
while (x > 0) {
    if (test.toUpperCase() + ' ' === Car[0] || test.toUpperCase() + ' ' === Car[1] || test.toUpperCase + ' ' === Car[2] || test.toUpperCase + ' ' === Car[3] || test.toUpperCase + ' ' === Car[4]) {
        notify('That Was Correct');
        grade = grade + 1;
        break;
       
    } else if (test !== Car) {
        test = getuserinput('That Was Wrong You Got ' + x + ' Attempt Left');
    }
    x--
}

return notify('The Correct Answers Are : ' + Car + '  You Have Answered ' + grade + ' Questions Out Of 7 ');
}


