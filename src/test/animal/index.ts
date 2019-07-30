import {expect} from "chai";
import "mocha";
import {Animal} from "../../entities/animal/animal";
import errorMessages from "../../entities/animal/errorMessages";

let Buddy;
const ANIMAL_TO_CREATE = {age: 0.5, gender: "male", name: "Buddy", sound: "woof"};

before(() => {
    Buddy = animalFactory(ANIMAL_TO_CREATE.age, ANIMAL_TO_CREATE.gender, ANIMAL_TO_CREATE.name, ANIMAL_TO_CREATE.sound);
});

describe("Animal Entity", () => {

    describe("Should have methods", () => {
        it("Should have method ageIsValid", () => {
            expect(Animal).itself.to.respondTo("ageIsValid");
        });

        it("Should have method genderIsValid", () => {
            expect(Animal).itself.to.respondTo("genderIsValid");
        });

        it("Should have method nameIsValid", () => {
            expect(Animal).itself.to.respondTo("nameIsValid");
        });

        it("Should have method soundIsValid", () => {
            expect(Animal).itself.to.respondTo("soundIsValid");
        });

        it("Should have method makeSound", () => {
            expect(Buddy).itself.to.respondTo("makeSound");
        });
    });

    describe("Should not throw error", () => {
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

        it("Should have a sound", () => {
            expect(Buddy).to.have.deep.property("sound", ANIMAL_TO_CREATE.sound);
        });

        it("Should make a sound", () => {
            const expectedSound = "woofwoof";
            expect(Buddy.makeSound(2)).to.equal(expectedSound);
        });
    });

    describe("Should throw error", () => {
        it("Should throw error when invalid age is passed", () => {
            try {
                Buddy.age = -1;
            } catch (e) {
                expect(e.message).to.equal(errorMessages.ageInvalid);
            }
        });

        it("Should throw error when invalid gender is passed", () => {
            try {
                Buddy.gender = "SomethingIncorrect";
            } catch (e) {
                expect(e.message).to.equal(errorMessages.genderInvalid);
            }
        });

        it("Should throw error when invalid name is less than 1 character", () => {
            try {
                Buddy.name = "";
            } catch (e) {
                expect(e.message).to.equal(errorMessages.nameInvalid);
            }
        });

        it("Should throw error when invalid name is greater than 20 characters", () => {
            try {
                Buddy.name = "HereIsAReallyLongNameThatShouldNotBeSetToObject";
            } catch (e) {
                expect(e.message).to.equal(errorMessages.nameInvalid);
            }
        });
    });
});

/**
 * @description Creates new instance of Animal entity
 * @param age {number} Age of animal
 * @param gender {string} Gender of animal
 * @param name {string} Name of animal
 * @param sound {string} Optional: Sound animal can make
 */
function animalFactory(age: number, gender: string, name: string, sound?: string) {
    return new Animal(age, gender, name, sound);
}
