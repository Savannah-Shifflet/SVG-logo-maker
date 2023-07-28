const Shapes = require('./shapes');

describe('Shapes', () => {
    describe('Circle', () => {
        it('Should return html text to create a circle using the text and color the user chose', () => {
            const txt = 'SVG';
            const color = 'blue'; 
            const circle = new Shapes.Circle(color, txt);
            const solution = '<circle cx="150" cy="100" r="80" fill = "blue"/>'
            expect(circle.render()).toEqual(solution);

        });
    });

    describe('Rectangle', () => {
        it('Should return html text to create a rectangle using the text and color the user chose', () => {
            const txt = 'SVG';
            const color = 'blue'; 
            const rectangle = new Shapes.Rectangle(color, txt);
            const solution = '<rect x="25" y = "25" width="250" height="150" fill = "blue"/>'
            expect(rectangle.render()).toEqual(solution);

        });
    });

    describe('Triangle', () => {
        it('Should return html text to create a triangle using the text and color the user chose', () => {
            const txt = 'SVG';
            const color = 'blue'; 
            const triangle = new Shapes.Triangle(color, txt);
            const solution = '<polygon points="150 0, 250 200, 50 200" fill = "blue"/>'
            expect(triangle.render()).toEqual(solution);

        });
    });

    describe('Text length', () => {
        it('should throw an error when the text length is greater than 3', () => {
            const txt = 'SVGGG';
            const color = 'blue';
            const shape = () => new Shapes.Shape(color, txt);
            const err = new Error('Logo text must be 3 characters or less');
            expect(shape).toThrowError(err); 
        });
    });
});