let user = {
    name: "John",
    age: 30,
    hobby: "reading",
    premium: true
  };
  
  user = { ...user, mood: 'happy', hobby: 'skydiving', premium: false };
  
  for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
  }
  
  const countProps = (obj) => Object.keys(obj).length;
  console.log(countProps(user));
  
  const findBestEmployee = (employees) => {
    let bestEmployee = "";
    let maxTasks = 0;
  
    for (const [name, tasks] of Object.entries(employees)) {
      if (tasks > maxTasks) {
        maxTasks = tasks;
        bestEmployee = name;
      }
    }
  
    return bestEmployee;
  };
  
  const employees = {
    John: 50,
    Sarah: 80,
    Mary: 35
  };
  console.log(findBestEmployee(employees));
  
  const countTotalSalary = (employees) => {
    let totalSalary = 0;
  
    for (const salary of Object.values(employees)) {
      totalSalary += salary;
    }
  
    return totalSalary;
  };
  
  const salaries = {
    John: 3000,
    Sarah: 4000,
    Mary: 2500
  };
  console.log(countTotalSalary(salaries));
  
  const getAllPropValues = (arr, prop) => {
    const values = [];
  
    for (const { [prop]: value } of arr) {
      if (value !== undefined) {
        values.push(value);
      }
    }
  
    return values;
  };
  
  const products = [
    { name: "Apple", price: 30 },
    { name: "Banana", price: 20 },
    { name: "Orange", price: 25 }
  ];
  console.log(getAllPropValues(products, "name"));
  
  const calculateTotalPrice = (allProducts, productName) => {
    let total = 0;
  
    for (const { name, price, quantity } of allProducts) {
      if (name === productName) {
        total = price * quantity;
        break;
      }
    }
  
    return total;
  };
  
  const store = [
    { name: "Laptop", price: 1000, quantity: 3 },
    { name: "Phone", price: 500, quantity: 5 },
    { name: "Tablet", price: 200, quantity: 10 }
  ];
  console.log(calculateTotalPrice(store, "Phone"));
  
  const account = {
    balance: 0,
    transactions: [],
  
    deposit(amount) {
      this.balance += amount;
      this.transactions.push({ type: "deposit", amount });
    },
  
    withdraw(amount) {
      this.balance -= amount;
      this.transactions.push({ type: "withdraw", amount });
    },
  
    getBalance() {
      return this.balance;
    },
  
    getTransactionHistory() {
      return this.transactions;
    }
  };
  
  account.deposit(1000);
  account.withdraw(500);
  console.log("Balance:", account.getBalance());
  console.log("Transaction History:", account.getTransactionHistory());
  