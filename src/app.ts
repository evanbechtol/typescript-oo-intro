import {Dog} from "./entities/dog/dog";

const Buddy = new Dog(0.5, "male", "Buddy", ["Labrador Retriever", "American Staffordshire Terrier", "Bloodhound"]);
console.log(Buddy.name, Buddy.gender, Buddy.age, Buddy.sound, Buddy.breeds);
