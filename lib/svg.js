// write HTML template for svg and use shape and text input to render specific variables
// const shapes = require('./shapes');

function generateSVG(shape){
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${shape.text}</text>
    </svg>`
};

// export module
module.exports = generateSVG; 
