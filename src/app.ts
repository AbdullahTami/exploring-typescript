type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  //   return a + b;
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
// const result = add(1, 5);
const result = add("Abdullah", " Tami");
const [firstName, secondName] = result.split(" ");
console.log(secondName);

const fetchedUserData = {
  id: "u1",
  name: "Abdullah",
  job: { title: "Web developer", description: "E-commerce store" },
};

console.log(fetchedUserData?.job?.title);

const userInput = undefined;

const storedData = userInput ?? "DEFAULT";

console.log(storedData);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date " + emp.startDate);
  }
}

// printEmployeeInformation(e1);
printEmployeeInformation({ name: "Nasser", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo... " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
  //   if ("loadCargo" in vehicle) {
  //     vehicle.loadCargo(1000);
  //   }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 3000 });

// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInputElement.value = "Enter text field";

interface ErrorContainer {
  // { email: "Not a valid email", username: 'Must start with a character}
  id: string;
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  id: "abc123",
  email: "Not a valid email!",
  username: "Must start with a character",
};

// function printErrorBag(errorBag: { [prop: string]: string }) {
//   for (const prop in errorBag) {
//     console.log(errorBag[prop]);
//   }
// }

// printErrorBag(errorBag);
