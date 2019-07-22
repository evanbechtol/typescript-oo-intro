import {Animal} from "./entities/animal/animal";

const Buddy = new Animal(0.5, "male", "Buddy");
console.log(Buddy.name, Buddy.gender, Buddy.age);
