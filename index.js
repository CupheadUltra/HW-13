
let user = {
    name: "John",
    age: 30,
    hobby: "reading",
    premium: true
  };
  
  user = { ...user, mood: 'happy' };
  user = { ...user, hobby: 'skydiving', premium: false };
  
  for (const key of Object.keys(user)) {
    const value = user[key];
    console.log(`${key}: ${value}`);
  }
  
  function countProps(obj) {
    return Object.keys(obj).length;
  }

  function findBestEmployee(employees) {
    let bestEmployee = "";
    let maxTasks = 0;
  
    for (const [name, tasks] of Object.entries(employees)) {
      if (tasks > maxTasks) {
        maxTasks = tasks;
        bestEmployee = name;
      }
    }
  
    return bestEmployee;
  }

  function countTotalSalary(employees) {
    let totalSalary = 0;
  
    for (const salary of Object.values(employees)) {
      totalSalary += salary;
    }
  
    return totalSalary;
  }

  function getAllPropValues(arr, prop) {
    const values = [];
  
    for (const item of arr) {
      if (item.hasOwnProperty(prop)) {
        const { [prop]: value } = item;
        values.push(value);
      }
    }
  
    return values;
  }

  function calculateTotalPrice(allProducts, productName) {
    let total = 0;
  
    for (const { name, price, quantity } of allProducts) {
      if (name === productName) {
        total = price * quantity;
        break;
      }
    }
  
    return total;
  }

  const account = {
    balance: 0,
    transactions: [],
    
    createTransaction(amount, type) {
      return { amount, type, id: this.transactions.length + 1 };
    },
    
    deposit(amount) {
      this.balance += amount;
      const transaction = this.createTransaction(amount, "deposit");
      this.transactions.push(transaction);
    },
    
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Недостатньо коштів на рахунку.");
        return;
      }
      this.balance -= amount;
      const transaction = this.createTransaction(amount, "withdraw");
      this.transactions.push(transaction);
    },
    
    getBalance() {
      return this.balance;
    },
    
    getTransactionDetails(id) {
      return this.transactions.find(transaction => transaction.id === id) || null;
    },
    
    getTransactionTotal(type) {
      return this.transactions
        .filter(transaction => transaction.type === type)
        .reduce((total, { amount }) => total + amount, 0);
    }
  };
  