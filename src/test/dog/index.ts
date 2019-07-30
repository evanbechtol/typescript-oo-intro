import {expect} from "chai";
import "mocha";
import {Dog} from "../../entities/dog/dog";

let Buddy;
const DOG_TO_CREATE = {
    age: 0.5,
    breeds: ["Labrador Retriever", "American Staffordshire Terrier", "Bloodhound"],
    gender: "male",
    name: "Buddy",
};

before(() => {
    Buddy = dogFactory(DOG_TO_CREATE.age, DOG_TO_CREATE.gender, DOG_TO_CREATE.name, DOG_TO_CREATE.breeds);
});

describe("Dog Entity", () => {

    describe("Should have methods", () => {
        it("Should have method isBreedPresent", () => {
            expect(Buddy).itself.to.respondTo("isBreedPresent");
        });
    });

    describe("Should not throw error", () => {
        it("Should create a valid Dog instance", () => {
            expect(Buddy).to.be.an.instanceOf(Dog);
        });

        it("Should have breeds", () => {
            expect(Buddy).to.have.deep.property("breeds", DOG_TO_CREATE.breeds);
        });

        it("Should make a sound woof", () => {
            const expectedSound = "Woof";
            expect(Buddy.makeSound(1)).to.equal(expectedSound);
        });

        it ("Should push breed as string to array", () => {
            const breedToPush = "Chihuahua";
            const expectedBreeds = [...DOG_TO_CREATE.breeds, breedToPush];

            Buddy.breeds = breedToPush;
            expect(Buddy.breeds).to.deep.equal(expectedBreeds);
        });

        it ("Should not push a duplicate breed to array", () => {
            const breedToPush = "Chihuahua";
            const expectedBreeds = Buddy.breeds;

            Buddy.breeds = breedToPush;
            expect(Buddy.breeds).to.deep.equal(expectedBreeds);
        });
    });
});

/**
 * @description Creates new instance of Dog entity
 * @param age {number} Age of dog
 * @param gender {string} Gender of dog
 * @param name {string} Name of dog
 * @param breeds {array} Optional: Breeds that dog has
 */
function dogFactory(age: number, gender: string, name: string, breeds: string[] = []) {
    return new Dog(age, gender, name, breeds);
}
