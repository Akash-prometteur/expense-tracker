let totalIncome = 0;
let totalExpense = 0;
let totalBalance = 0;

const expenseList = [
  {
    expenseDescription: "Test",
    expenseType: "income",
    amount: 0,
    totalIncome,
    totalExpense,
    totalBalance,
  },
  {
    expenseDescription: "Test",
    expenseType: "expense",
    amount: 50,
    totalIncome,
    totalExpense,
    totalBalance,
  },
];

// renderExpenseList()

function renderExpenseList() {
  let expenseListHTML = "";

  expenseList.forEach();
}

function addExpense() {
  const expenseDescriptionElement = document.querySelector(".js-expense-input");
  const expenseAmountElement = document.querySelector(
    ".js-expense-amount-input"
  );
  const selectElement = document.querySelector("#select1");

  const expenseDescription = expenseDescriptionElement.value;
  const expenseAmount = expenseAmountElement.value;
  const selectedExpenseType = selectElement.value;

  if (selectedExpenseType === "income") {
    totalIncome += Number(expenseAmount);
    totalBalance += totalIncome;
    expenseList.push({
      expenseDescription: expenseDescription,
      expenseType: selectedExpenseType,
      amount: expenseAmount,
      totalIncome: totalIncome,
      totalExpense: totalExpense,
      totalBalance: totalBalance,
    });
  } else if (selectedExpenseType === "expense") {
    totalExpense += Number(expenseAmount);
    totalBalance -= totalExpense;
    expenseList.push({
        expenseDescription: expenseDescription,
        expenseType: selectedExpenseType,
        amount: expenseAmount,
        totalIncome: totalIncome,
        totalExpense: totalExpense,
        totalBalance: totalBalance,
      });
  }

  console.log("expenseDescription: ", expenseDescription);
  console.log("expenseAmount: ", expenseAmount);
  console.log("selectedExpenseType: ", selectedExpenseType);
  console.log("totalIncome: ", totalIncome);
  console.log("totalExpense: ", totalExpense);
  console.log("totalBalance: ", totalBalance);
  console.log("expenseList: ", expenseList);
}

document
  .querySelector(".js-add-expense-button")
  .addEventListener("click", () => {
    addExpense();
  });
