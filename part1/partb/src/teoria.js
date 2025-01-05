//the map method
const t = [1, 2, 3];
const m = t.map((x) => x * 2);
console.log(m);

//array distruction
const t1 = [1, 2, 3, 4, 5];
const [first, second, ...rest] = t1;
console.log(first, second);
console.log(rest);

//object
const person = {
  name: {
    firstName: "Yuliia",
    lastName: "Datsenko",
  },
  grades: [1, 2, 3],
};
console.log(person.name);
person.address = "Address";

//arrow function
const sum = (x1, y1) => {
  return x1 + y1;
};
console.log(sum(1, 2));
