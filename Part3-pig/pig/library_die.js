// Student Name: Naman Sharma
// Student ID: 8837689

"use strict";

var Die = function () { };

Die.prototype.rollDie = function () {
    var random = Math.random();
    random = Math.floor(random * 6);
    return random + 1;
};
