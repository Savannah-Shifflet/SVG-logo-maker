const generateSVG = require('./svg');
const Shapes = require('./shapes');

describe('generateSVG', () => {
    it('should render html to create text in the logo based on the shape object', () => {
        const shape = new Shapes.Circle('blue', 'SVG', 'pink');
        const solution = '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"\> <circle cx="150" cy="100" r="80" fill = "blue"/\> <text x="150" y="125" font-size="50" text-anchor="middle" fill="pink">SVG</text\> </svg>'
        expect(generateSVG(shape)).toEqual(solution);
        });
});