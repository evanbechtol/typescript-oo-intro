import {Animal} from "../../entities/animal/animal";
import {expect} from "chai";
import "mocha";

describe("Animal Entity", () => {
    let Buddy;
    const ANIMAL_TO_CREATE = {age: 0.5, gender: "male", name: "Buddy"};

    it("Should create a valid Animal instance", () => {
        Buddy = animalFactory(ANIMAL_TO_CREATE.age, ANIMAL_TO_CREATE.gender, ANIMAL_TO_CREATE.name);
        expect(Buddy).to.be.an.instanceOf(Animal);
    });

    it(`Should have age of ${ANIMAL_TO_CREATE.age}`, () => {
        expect(Buddy).to.have.deep.property("age", ANIMAL_TO_CREATE.age);
    });

    it(`Should have gender of ${ANIMAL_TO_CREATE.gender}`, () => {
        expect(Buddy).to.have.deep.property("gender", ANIMAL_TO_CREATE.gender);
    });

    it(`Should have name of ${ANIMAL_TO_CREATE.name}`, () => {
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
