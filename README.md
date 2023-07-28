# SVG-logo-maker



![MIT License badge](https://img.shields.io/github/license/savannah-shifflet/SVG-logo-maker)
## Description

This is a Node.js command-line application that asks the user a series of questions and utilizes the user's response to generate a unique svg logo file. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)

## Installation
To use this code, you will need to clone it to your local machine using: 

    git clone git@github.com:Savannah-Shifflet/SVG-logo-maker.git

Additionally, this code uses the Inquirer package and Jest package for tests which can be installed by running the following command:
    
    npm install 

## Usage
Open the directory where you cloned the code and installed the necessary dependencies. 

Then utilize Node.js to run the application: 

    node index.js

The application will walk you through a serious of questions to generate the README. The logo file will be generated in the example folder in the directory. 

A video tutorial can be found [here.](https://drive.google.com/file/d/1nLzhvZ8zQD1VpcMBtMhYq1K61_YzjkdS/view)

The video tutorial is below as well and the sample logo made in the video: 

[Untitled_ Jul 28, 2023 2_54 PM.webm](https://github.com/Savannah-Shifflet/SVG-logo-maker/assets/106942356/3c15e351-f926-47d7-b036-571cf16edd66)

![sample logo](/examples/SCSlogo.svg)

## Credits
Utilized the Inquirer package which can be found [here.](https://www.npmjs.com/package/inquirer/v/8.2.4)

Utilized Jest package for the tests which can be found [here.](https://www.npmjs.com/package/jest)

## License

This project is covered under the MIT License.

## Tests

5 tests have been included in the directory and can be run using the command: 

      npm run test
