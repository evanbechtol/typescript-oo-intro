import errorMessages from "./errorMessages";

export class Animal {
    private _age: number;
    private _gender: string;
    private _name: string;

    /**
     * @description Constructs a new instance of the animal object
     * @param age {number} Age of the animal, must be greater than zero
     * @param gender {string} Gender of the animal, can be either 'male' or 'female'
     * @param name {string} Name of the animal, must be less than 20 characters
     */
    constructor (age: number, gender: string, name: string) {
        this.age = age;
        this.gender = gender;
        this.name = name;
    }

    get age(): number {
        return this._age;
    }

    set age(value) {
        if (Animal.ageIsValid(value)) {
            this._age = value;
        } else {
            throw new Error(errorMessages.ageInvalid);
        }
    }

    get gender(): string {
        return this._gender;
    }

    set gender(value) {
        if (Animal.genderIsValid(value)) {
            this._gender = value;
        } else {
            throw new Error(errorMessages.genderInvalid);
        }
    }

    get name(): string {
        return this._name;
    }

    set name(value) {
        if (Animal.nameIsValid(value)) {
            this._name = value;
        } else {
            throw new Error(errorMessages.nameInvalid);
        }
    }

    /**
     * @description Checks that value passed is valid, used before setting value on instance
     * @param age {number} Age of animal, must be greater than zero
     * @returns Will return true if value is valid, false otherwise
     */
    static ageIsValid(age: number): boolean {
        return age > 0;
    }

    /**
     * @description Checks that value passed is valid, used before setting value on instance
     * @param gender {string} Gender of animal, can be male or female
     * @returns Will return true if value is valid, false otherwise
     */
    static genderIsValid(gender: string): boolean {
        const GENDERS = ["male", "female"];
        return GENDERS.includes(gender.toLocaleLowerCase());
    }

    /**
     * @description Checks that value passed is valid, used before setting value on instance
     * @param name {string} Name of animal
     * @returns Will return true if value is valid, false otherwise
     */
    static nameIsValid(name: string): boolean {
        const IS_VALID_LENGTH = name.length > 0 && name.length < 20;
        return name && IS_VALID_LENGTH;
    }
}