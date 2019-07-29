import {Animal} from "../animal/animal";

export class Dog extends Animal {
    private _breeds: Array<string>;

    /**
     * @description Constructs a new instance of the dog object
     * @param age {number} Age of the dog, must be greater than zero
     * @param gender {string} Gender of the dog, can be either 'male' or 'female'
     * @param name {string} Name of the dog, must be less than 20 characters
     * @param breeds {array} Breeds that the dog has
     */
    constructor(age: number, gender: string, name: string, breeds: Array<string> = []) {
        super(age, gender, name, "Woof");
        this.breeds = breeds as Array<string> ;
    }

    get breeds() {
        return this._breeds.join();
    }

    // Todo: determine if breed should be added to array
    set breeds(value) {
        this._breeds = [value];
    }
}
