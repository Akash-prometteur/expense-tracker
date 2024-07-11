let totalIncome = 0;
let totalExpense = 0;
let totalBalance = 0;

const expenseList = JSON.parse(localStorage.getItem("expenses")) || [];

const expenseTitleHTML = `
        <div>Description</div>
        <div>Type</div>
        <div>Amount</div>
        <div>Total Income</div>
        <div>Total Expense</div>
        <div>Total Balance</div>
    `;

document.querySelector(".expense-title-grid").innerHTML = expenseTitleHTML;

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
        localStorage.setItem("expenses", JSON.stringify(expenseList));
        renderExpenseList();
      });
    });
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
  expenseAmountElement.value = "";

  localStorage.setItem("expenses", JSON.stringify(expenseList));

  renderExpenseList();
}
