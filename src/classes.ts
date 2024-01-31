abstract class Department {
  static fiscalYear = 2024;

  protected employees: string[] = [];
  constructor(private name: string, public readonly id: string) {
    // this.name = name;
    // this.id = id;
  }

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  // admins
  constructor(id: string, public admins: string[]) {
    super("IT", id);
  }
  describe() {
    console.log("Not Void ha ?!");
  }
}
class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super("Department", id);
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d1", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }
  addEmployee(name: string) {
    if (name === "Abdullah") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Abdullah");
console.log(employee1);
console.log(Department.fiscalYear);

const it = new ITDepartment("D5", ["abdullah"]);
it.addEmployee("Abdullah");
it.addEmployee("Ahmad");

// it.employees[2] = "DANAH";
it.describe();
it.printEmployeeInformation();
console.log(it);

// const accounting = new AccountingDepartment("D2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
// accounting.mostRecentReport = "dddd";
accounting.addReport("Something went wrong...");
// accounting.printReports();
accounting.addEmployee("Ali");
// accounting.printEmployeeInformation();
console.log(accounting.mostRecentReport);

accounting.describe();
// accounting.lastReport

// const accountingCopy = {
//   employees: ["dd"],
//   name: "boo",
//   describe: accounting.describe,
//   addEmployee: accounting.addEmployee("s"),
// };

// accountingCopy.describe();
