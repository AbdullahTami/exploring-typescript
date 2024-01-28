enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: "Abdullah",
  age: 23,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};
// person.role.push("admin");
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.length);
}
console.log(Role.ADMIN);
if (person.role === Role.ADMIN) console.log("Nope");
