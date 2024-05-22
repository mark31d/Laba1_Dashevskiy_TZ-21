class Employee {
    constructor(firstName, lastName, baseSalary, experience) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.baseSalary = baseSalary;
      this.experience = experience;
    }
  
    get countedSalary() {
      let salary = this.baseSalary;
      if (this.experience > 5) {
        salary = this.baseSalary * 1.2 + 500;
      } else if (this.experience > 2) {
        salary += 200;
      }
      return salary;
    }
  }
  
  class Developer extends Employee {
    constructor(firstName, lastName, baseSalary, experience) {
      super(firstName, lastName, baseSalary, experience);
    }
  }
  
  class Designer extends Employee {
    constructor(firstName, lastName, baseSalary, experience, effCoeff) {
      super(firstName, lastName, baseSalary, experience);
      this.effCoeff = effCoeff;
    }
  
    get countedSalary() {
      return super.countedSalary * this.effCoeff;
    }
  }
  
  class Manager extends Employee {
    constructor(firstName, lastName, baseSalary, experience) {
      super(firstName, lastName, baseSalary, experience);
      this.team = [];
    }
  
    addTeamMember(member) {
      this.team.push(member);
    }
  
    get countedSalary() {
      let salary = super.countedSalary;
  
      if (this.team.length > 10) {
        salary += 300;
      } else if (this.team.length > 5) {
        salary += 200;
      }
  
      const developerCount = this.team.filter(member => member instanceof Developer).length;
      if (developerCount > this.team.length / 2) {
        salary *= 1.1;
      }
  
      return salary;
    }
  }
  
  class Department {
    constructor() {
      this.managers = [];
    }
  
    addManager(manager) {
      this.managers.push(manager);
    }
  
    giveSalary() {
      const allEmployees = [];
      this.managers.forEach(manager => {
        allEmployees.push(manager);
        manager.team.forEach(member => allEmployees.push(member));
      });
  
      allEmployees.forEach(employee => {
        console.log(`${employee.firstName} ${employee.lastName} отримав ${employee.countedSalary.toFixed(2)} грн`);
      });
    }
  }
  
  const dev1 = new Developer("Іван", "Іванов", 3000, 3);
  const dev2 = new Developer("Петро", "Петров", 3200, 6);
  const des1 = new Designer("Анна", "Ананова", 2800, 2, 0.9);
  const des2 = new Designer("Марія", "Марієнко", 2900, 7, 0.8);
  
  const manager1 = new Manager("Олексій", "Олексієнко", 5000, 10);
  manager1.addTeamMember(dev1);
  manager1.addTeamMember(dev2);
  manager1.addTeamMember(des1);
  manager1.addTeamMember(des2);
  
  const department = new Department();
  department.addManager(manager1);
  
  department.giveSalary();
  