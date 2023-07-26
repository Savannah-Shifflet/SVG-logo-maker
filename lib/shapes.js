//need shape parent class with general properties
class Shape {
    constructor(color){
        this.color = color;
    }
    
    render (){
        return `<fill = ${this.color}/>`
    }
}

//need class for triangle, circle, square that are children to shape
// each shape class should have a render method that returns the string for the svg file
// export module
