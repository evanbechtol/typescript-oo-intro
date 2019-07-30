import {Animal} from "../animal/animal";

export class Dog extends Animal {
    private _breeds: string[];

    /**
     * @description Constructs a new instance of the dog object
     * @param age {number} Age of the dog, must be greater than zero
     * @param gender {string} Gender of the dog, can be either 'male' or 'female'
     * @param name {string} Name of the dog, must be less than 20 characters
     * @param breeds {array} Breeds that the dog has
     */
    constructor(age: number, gender: string, name: string, breeds: string[] = []) {
        super(age, gender, name, "Woof");
        this.breeds = breeds;
    }

    get breeds() {
        return this._breeds;
    }

    set breeds(value: string[] | string) {
        if (typeof value === "string" && !this.isBreedPresent(value)) {
            this._breeds.push(value);
        } else if (typeof value === "object") {
            this._breeds = value;
        }
    }

    /**
     * @description Determines if the breed passed is present in the breeds array
     * @param breed {string} Breed to check for
     * @returns {boolean} Returns true if the breed is present, false otherwise
     */
    private isBreedPresent(breed: string) {
        return this._breeds.indexOf(breed) !== -1;
    }
}
