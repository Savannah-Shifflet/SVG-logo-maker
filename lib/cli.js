const inquirer = require('inquirer');
const fs = require('fs');

const valText = (txt) =>
    new Promise((reject) => {
        if (txt.length > 3){
            reject(new Error('Logo text must be 3 characters or less'));
        };
    });

// prompt user for text - can input up to 3 characters

// prompt user for color and shape 
// after input for all prompts, a SVG file is created
// 'Generated logo.svg' is printed in the command line
// export module

