//need shape parent class with general properties
class Shape {
    constructor(color){
        this.color = color;
    }
    
    render(){
        return `<fill = ${this.color}/>`
    };
};

//need class for triangle, circle, square that are children to shape
class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    render(){
        return `<polygon points="150 0, 250 200, 50 200" fill = "${this.color}"/>`
    };
};

class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    render(){
        return `<circle cx="150" cy="100" r="80" fill = "${this.color}"/>`
    };
};
// each shape class should have a render method that returns the string for the svg file
// export module
