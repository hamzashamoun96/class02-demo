'use strict';
var username = prompt('HELLO Tell Us Your Name Please')
alert("HELLO " + username.toUpperCase() + " Welcome To My WebPage If You Don't Mind I Want To Ask Some (Yes Or No) Questions");
document.write('<h2 id="welcome" > Welcome ' + username.toUpperCase() + ' To My Webpage</h2>');

var car = prompt('Is BMW My Favorite Car?');
if (car.toLowerCase() === 'yes' || car.toLowerCase() === 'y') {
    alert('That Is Right')
} else if (car.toLowerCase() === 'no' || car.toLowerCase() === 'n') {
    alert('Wrong Answer')
}
//console.log(car.toLowerCase())

var aname = prompt('Is My Name Ahmed?');
if (aname.toLowerCase() === 'yes' || aname.toLowerCase() === 'y') {
    alert('Wrong Answer')
} else if (aname.toLowerCase() === 'no' || aname.toLowerCase() === 'n') {
    alert('That Is Right')
}
//console.log(aname.toLowerCase())

var age = prompt('Am I 24 Years Old?');
if (age.toLowerCase() === 'yes' || age.toLowerCase() === 'y') {
    alert('That Is Right')
} else if (age.toLowerCase() === 'no' || age.toLowerCase() === 'n') {
    alert('Wrong Answer')
}
//console.log(age.toLowerCase())

var glass = prompt('Am I Wear a Glasses?');
if (glass.toLowerCase() === 'yes' || glass.toLowerCase() === 'y') {
    alert('That Is Right')
} else if (glass.toLowerCase() === 'no' || glass.toLowerCase() === 'n') {
    alert('Wrong Answer')
}
//console.log(glass.toLowerCase())

var game = prompt('Did You Like This Game?');
if (game.toLowerCase() === 'yes' || game.toLowerCase() === 'y') {
    alert('That Is Great')
} else if (game.toLowerCase() === 'no' || game.toLowerCase() === 'n') {
    alert('Too Bad')
}
//console.log(game.toLowerCase())