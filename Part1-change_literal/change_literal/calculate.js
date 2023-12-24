// Student Name: Naman Sharma
// Student ID: 8837689

"use strict";

$(document).ready( () => {
    $("#calculate").click( () => {
        // get the number of cents from the user
        let cents = Math.floor( parseInt( $("#cents").val() ) );

        if (isNaN(cents) || cents < 0 || cents > 99) {
            alert("Please enter a valid number between 0 and 99");
        } else {
           coins.makeChange(cents);
        }
    }); // end click() method
    
    // set focus on cents text box on initial load
    $("#cents").focus();
            
}); // end ready() method