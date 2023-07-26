// write HTML template for svg and use shapes to render specific variables in html
function generateSVG(shape, text){
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>
    </svg>`
};

module.exports = generateSVG; 
// export module