// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


// Tasks:
//     1. filter() all credit transactions
const creditTransactions = transactions.filter(t=>t.type=="credit")
console.log("the obj with type credits are:",creditTransactions)

//     2. map() to extract only transaction amounts

let transactionAmount = transactions.map(e=>e.amount)
console.log("Transacted amounts:",transactionAmount)

//     3. reduce() to calculate final account balance

let accountBalance = transactions.reduce((acc, e) => {
  if (e.type === "credit") {
    return acc + e.amount; 
  } else {
    return acc - e.amount;  
  }
}, 0); // initial acc 0
console.log("Final account Balance:",accountBalance); 

//     4. find() the first debit transaction    // find will return the first occurance
let findFirstDebit = transactions.find(e=>(e.type=="debit"))
console.log("the first debited transactions is :",findFirstDebit)

//     5. findIndex() of transaction with amount 10000
let findIndex= transactions.findIndex(e=>e.amount==10000)
console.log("the amount 0000 is found at index:",findIndex)