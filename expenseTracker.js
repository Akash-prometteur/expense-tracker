let totalIncome = 0;
let totalExpense = 0;
let totalBalance = 0;

const expenseList = [
  
];

renderExpenseList();

function renderExpenseList() {
  let expenseListHTML = "";

  expenseList.forEach(function (expenseObject) {
    const {
      expenseDescription,
      expenseType,
      amount,
      totalIncome,
      totalExpense,
      totalBalance,
    } = expenseObject;

    const html = `
        <div>${expenseDescription}</div>
        <div>${expenseType}</div>
        <div>${amount}</div>
        <div>${totalIncome}</div>
        <div>${totalExpense}</div>
        <div>${totalBalance}</div>
        <button class="delete-expense-button js-delete-expense-button">
            Delete 
        </button>
    `;

    expenseListHTML += html;
  });

  document.querySelector(".js-expense-list").innerHTML = expenseListHTML;

  document
    .querySelectorAll(".js-delete-expense-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        expenseList.splice(index, 1);
        renderExpenseList();
      });
    });

  console.log(expenseListHTML);
}

document
  .querySelector(".js-add-expense-button")
  .addEventListener("click", () => {
    addExpense();
  });

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

  expenseDescriptionElement.value = "";
  expenseAmountElement.value = ""


  renderExpenseList();

  console.log("expenseDescription: ", expenseDescription);
  console.log("expenseAmount: ", expenseAmount);
  console.log("selectedExpenseType: ", selectedExpenseType);
  console.log("totalIncome: ", totalIncome);
  console.log("totalExpense: ", totalExpense);
  console.log("totalBalance: ", totalBalance);
  console.log("expenseList: ", expenseList);
}
