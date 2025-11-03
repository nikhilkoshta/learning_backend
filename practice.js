//Reverse array
let arr = [2, 3, 5, 8];
let newArr = [];

function reverseArray(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    console.log(newArr);
}


reverseArray(arr);


//Using Chaining in JavaScript :

const quizResults = [
  { student: 'Alice', score: 95, penalty: 5 },
  { student: 'Bob', score: 60, penalty: 0 },
  { student: 'Charlie', score: 85, penalty: 10 },
  { student: 'David', score: 70, penalty: 5 },
  { student: 'Eve', score: 55, penalty: 0 },
];


const finalScore = quizResults
    .filter(attempt => attempt.score >= 70)
    .map(attempt => attempt.score - attempt.penalty)
    .reduce((total, points) => total + points, 0);

console.log(finalScore);


//practice :
const transactions = [
  { id: 101, type: 'credit', amount: 50 },
  { id: 102, type: 'debit', amount: 20 },
  { id: 103, type: 'credit', amount: 150 },
  { id: 104, type: 'debit', amount: 10 },
  { id: 105, type: 'credit', amount: 80 }
];

const finalAmount = transactions
   .filter(creditAmount => creditAmount.type === 'credit')
   .map(creditAmount => creditAmount.amount - 5)
   .reduce((total, creditAmount) => total + creditAmount, 0);

console.log(finalAmount);



