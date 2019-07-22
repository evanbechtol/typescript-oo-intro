import {Animal} from "../../entities/animal/animal";
import {expect} from "chai";
import "mocha";

let Buddy;
const ANIMAL_TO_CREATE = {age: 0.5, gender: "male", name: "Buddy"};

before(() => {
    Buddy = animalFactory(ANIMAL_TO_CREATE.age, ANIMAL_TO_CREATE.gender, ANIMAL_TO_CREATE.name);
});

describe("Animal Entity", () => {
    it("Should create a valid Animal instance", () => {
        expect(Buddy).to.be.an.instanceOf(Animal);
    });

    it("Should have a valid age", () => {
        expect(Buddy).to.have.deep.property("age", ANIMAL_TO_CREATE.age);
    });

    it("Should have a valid gender", () => {
        expect(Buddy).to.have.deep.property("gender", ANIMAL_TO_CREATE.gender);
    });

    it("Should have a valid name", () => {
        expect(Buddy).to.have.deep.property("name", ANIMAL_TO_CREATE.name);
    });
});

/**
 * @description Creates new instance of Animal entity
 * @param age {number} Age of animal
 * @param gender {string} Gender of animal
 * @param name {string} Name of animal
 */
function animalFactory(age: number, gender: string, name: string) {
    return new Animal(age, gender, name);
}
