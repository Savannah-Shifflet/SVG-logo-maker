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
            // let shapeType = data.shape; 
            if (data.shape === 'Circle'){
                userShape = new shapes.Circle(data.color, data.text);
            }
            if (data.shape === 'Triangle'){
                userShape = new shapes.Triangle(data.color, data.text);
            }
            if (data.shape === 'Rectangle'){
                userShape = new shapes.Rectangle(data.color, data.text);
            }
            const svgCreate = generateSVG(userShape);
            console.log(svgCreate); 
        })
        .then((svgCreate) => fs.writeFile('logo.svg', svgCreate))
        .then(() => console.log('Generated logo.svg!'))
        .catch((err) => console.log(err)); 
}
// after input for all prompts, a SVG file is created
// 'Generated logo.svg' is printed in the command line
// export module
CLI(); 
