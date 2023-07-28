//need shape parent class with general properties
class Shape {
    constructor(color, text, txtColor){
        
        if (text.length > 3) {
            throw new Error('Logo text must be 3 characters or less');
        }
        
        this.color = color;
        this.text = text;
        this.txtColor = txtColor;
    }
    
    render(){
        return `<fill = ${this.color}/>`
    };
};

//class for triangle, circle, square that are children to shape
// each shape class has render method that returns the string for the svg file
class Triangle extends Shape {
    constructor(color, text, txtColor) {
        super(color, text, txtColor);
    }

    render(){
        return `<polygon points="150 0, 250 200, 50 200" fill = "${this.color}"/>`
    };
};

class Circle extends Shape {
    constructor(color, text, txtColor) {
        super(color, text, txtColor);
    }

    render(){
        return `<circle cx="150" cy="100" r="80" fill = "${this.color}"/>`
    };
};

class Rectangle extends Shape {
    constructor(color, text, txtColor) {
        super(color, text, txtColor);
    }

    render(){
        return `<rect x="25" y = "25" width="250" height="150" fill = "${this.color}"/>`
    };
};

// export module
module.exports = { Shape, Triangle, Circle, Rectangle };
