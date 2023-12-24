// Student Name: Naman Sharma
// Student ID: 8837689

"use strict";

$(document).ready( () => {
    $("#calculate").click( () => {
        // get the number of cents from the user
        let cents = Math.floor( parseInt( $("#cents").val() ) );

        const money = new Coins();
        money.makeChange(cents);
           
    }); // end click() method
    
    // set focus on cents text box on initial load
    $("#cents").focus();
            
}); // end ready() method