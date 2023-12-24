// Student Name: Naman Sharma
// Student ID: 8837689


"use strict";

const game = {
    player1: new Pig(),
    player2: new Pig(),
    currentPlayer: null,
    start: function (name1, name2) {
        this.player1.name = name1;
        this.player2.name = name2;
        this.currentPlayer = this.player1;
        return this;
    },
    isValid: function () {
        if (this.player1.name === "" || this.player2.name === "") {
            return false;
        } else {
            return true;
        }
    },
    reset: function () {
        // call the reset() method on each of the player Pig objects
        this.player1.reset();
        this.player2.reset();

    },
    changePlayer: function () {
        // determine whether player1 or player2 is the current player, then
        // update the currentPlayer property to hold the other player.
        if (this.currentPlayer === this.player1) {
            this.currentPlayer = this.player2;
        }
        else {
            this.currentPlayer = this.player1;
        }

    },
    hold: function (score1, score2) {
        // call the hold() method of the current player
        this.currentPlayer.hold();

        // determine whether player1 or player2 is the current player, then
        // update that player's score with the current total
        if (this.currentPlayer === this.player1) {
            score1.val(this.player1.total);
        }
        else {
            score2.val(this.player2.total);
        }

    },
    checkWinner: function () {
        // check the players' totals to see if either is at or above 100
        // points. If so, return that player's name. Otherwise, return
        // the string "none".
        if (this.player1.total >= 100) {
            return this.player1.name;
        }
        else if (this.player2.total >= 100) {
            return this.player2.name;
        }
        else {
            return "none";
        }

    }
};