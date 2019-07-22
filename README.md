# typescript-oo-intro
Introduction to [TypeScript](https://www.typescriptlang.org/)! This example is intended to be a very simple 
introduction to both TypeScript, and to OObject-Oriented Design Principles. The problem being solved in this example 
is to implement a design that allows animals to be created. The abstract class, animal, is used in the concrete 
subclasses; cat & dog.

### Pre-requisites
  - [Node.js](https://nodejs.org/en/)
  - [TypeScript](https://www.typescriptlang.org/)

### Setup
  1) In a command prompt/bash shell, run the following command: `npm i`. This will install all required dependencies for
   the
   project
  
### Project Structure
  ```|
  | src
     | app.ts
     | entities
     |    | animal
     |        | animal.ts
     |        | errorMessages.ts
     |    | cat
     |    | dog
     | test
        | animal
             | index.js
  ```
   
### Running Application
  1) In the project directory, and inside of a command prompt/bash shell, run the following command: `npm start`. 
    This will run the application.
  2) If you wish to run all the tests, run the following command: `npm test`.
  
