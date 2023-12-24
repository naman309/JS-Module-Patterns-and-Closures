// Student Name: Naman Sharma
// Student ID: 8837689

"use strict";

const coins = {
    constructor() {
      this.quarters = 0;
      this.dimes = 0;
      this.nickels = 0;
      this.pennies = 0;
    },
  
    makeChange(cents) {
      if (isNaN(cents) || cents < 0 || cents > 99) {
        throw "Please enter cents value from 0 to 99";
      } else {
        // calculate quarters
        let quarters = cents / 25; // number of quarters
        quarters = Math.floor(quarters);
        cents = cents % 25; // assigning the reminder to cents
  
        // calculate the number of dimes
        let dimes = cents / 10; // get number of dimes
        dimes = Math.floor(dimes);
        cents = cents % 10; // assign the remainder to the cents variable
  
        // calculate the number of nickels
        let nickels = cents / 5;
        nickels = Math.floor(nickels);
  
        // calculate the number of nickels and pennies
        let pennies = cents % 5;
  
        // display the results of the calculations
        $("#quarters").val(quarters);
        $("#dimes").val(dimes);
        $("#nickels").val(nickels);
        $("#pennies").val(pennies);
  
        // set focus on cents text box
        $("#cents").focus();
      }
    },
  };
  