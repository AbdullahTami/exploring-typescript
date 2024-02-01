// const names: Array<string> = [];
// names[0].split(" ");

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => data.split(" "));

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

// console.log(merge({ name: "Abdullah" }, { age: 30 }));

const mergedObj = merge({ name: "Abdullah" }, { age: 23 });
mergedObj.age;
mergedObj.name;

const mergedObj3 = merge<object, object>({ name: "Abdullah" }, { age: 23 });

interface Lengthy {
  length: number;
}
//! Just to avoid any confusion, JS converts strings into objects on the fly which make a length property on stings accessible, hence, the interface.
// console.log(mergedObj3);
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Welcome to Argentina"));
console.log(countAndDescribe(["Sports", "Cooking"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

const obj = extractAndConvert({ name: "Abdullah" }, "name");
console.log(obj);

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;

    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Abdullah");
textStorage.addItem("Tami");
textStorage.removeItem("Abdullah");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: "Abdullah" });
// objStorage.addItem({ name: "Tami" });
// // ...
// objStorage.removeItem({ name: "Tami" });
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
  // return { title: title, description: description, completeUntil: data };
}

const names: Readonly<string[]> = ["Abdullah", "Nawal"];
