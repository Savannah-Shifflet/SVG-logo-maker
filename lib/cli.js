const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./shapes'); 
const generateSVG = require('./svg'); 

// const valText = (txt) =>
//     new Promise((reject) => {
//         if (txt.length > 3){
//             reject(new Error('Logo text must be 3 characters or less'));
//         };
//     });


const questions = [
// prompt user for text - can input up to 3 characters
    {
        type: 'input',
        message: 'Please input up to 3 characters for your logo text.',
        name: 'text'
    },
// prompt user for color and shape 
    {
        type: 'input',
        message: 'Please input the color for your logo - either a color keyword or a hex code starting with a #.',
        name: 'color'
    },
    {
        type: 'list',
        message: 'Please choose what shape you would like for your logo.',
        name: 'shape',
        choices: ['Circle', 'Rectangle', 'Triangle']
    }
];

const CLI = () => {
    inquirer
        .prompt(questions)
        .then((data) => {
            // Set to the appropriate class based on user's choice; 
            if (data.shape === 'Circle'){
                userShape = new shapes.Circle(data.color, data.text);
            }
            if (data.shape === 'Triangle'){
                userShape = new shapes.Triangle(data.color, data.text);
            }
            if (data.shape === 'Rectangle'){
                userShape = new shapes.Rectangle(data.color, data.text);
            }

            // generate SVG content based on user's shape
            const svgCreate = generateSVG(userShape);
            
            // after input for all prompts, a SVG file is created and 'Generated logo file!' is printed in the command line if successful
            fs.writeFile('./examples/${userShape}logo.svg', svgCreate, (err) => err ? console.log(err) : console.log('Generated logo file!'));
        })
        .catch((err) => console.log(err)); 
}

// export module
module.exports = CLI; 
