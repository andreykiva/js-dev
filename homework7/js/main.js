const startButton = document.getElementById("start"),
  budgetValue = document.querySelector(".budget-value"),
  dayBudgetValue = document.querySelector(".daybudget-value"),
  levelValue = document.querySelector(".level-value"),
  expensesValue = document.querySelector(".expenses-value"),
  optionalExpensesValue = document.querySelector(".optionalexpenses-value"),
  incomeValue = document.querySelector(".income-value"),
  monthSavingsValue = document.querySelector(".monthsavings-value"),
  yearSavingsValue = document.querySelector(".yearsavings-value"),
  expensesItems = document.querySelectorAll(".expenses-item"),
  buttons = document.getElementsByTagName("button"),
  expensesItemBtn = buttons[0],
  optionalExpensesBtn = buttons[1],
  countBudgetBtn = buttons[2],
  optionalExpensesItems = document.querySelectorAll(".optionalexpenses-item"),
  chooseIncome = document.querySelector("#income"),
  savings = document.querySelector("#savings"),
  chooseSum = document.querySelector("#sum"),
  choosePercent = document.querySelector("#percent"),
  yearValue = document.querySelector(".year-value"),
  monthValue = document.querySelector(".month-value"),
  dayValue = document.querySelector(".day-value");

let money, time;

startButton.addEventListener("click", () => {
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  money = +prompt("Ваш бюджет на месяц?", "");

  expensesItemBtn.disabled = false;
  optionalExpensesBtn.disabled = false;
  countBudgetBtn.disabled = false;

  while (isNaN(money) || money === "" || money === null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesItemBtn.addEventListener("click", () => {
  if (money) {
    let sum = 0;
    for (let i = 0; i < expensesItems.length; i++) {
      let a = expensesItems[i].value,
        b = expensesItems[++i].value;
      console.log(expensesItems);
      if (
        typeof a === "string" &&
        typeof a !== null &&
        typeof b === "string" &&
        typeof b !== null &&
        a !== "" &&
        b !== "" &&
        a.length < 50
      ) {
        appData.expenses[a] = b;
        sum += +b;
      } else {
        console.log("Что-то пошло не так!");
        i--;
      }
    }
    appData.expensesSum = sum;
    expensesValue.textContent = sum;
  } else {
    expensesItemBtn.disabled = true;
  }
});

optionalExpensesBtn.addEventListener("click", () => {
  if (money) {
    for (let i = 0; i <= optionalExpensesItems.length; i++) {
      let opt = optionalExpensesItems[i].value;
      appData.optionalExpenses[i] = opt;
      optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
    }
  } else {
    optionalExpensesBtn.disabled = true;
  }
});

countBudgetBtn.addEventListener("click", () => {
  if (money) {
    if (appData.budget) {
      appData.moneyPerDay = appData.expensesSum
        ? ((appData.budget - appData.expensesSum) / 30).toFixed()
        : (appData.budget / 30).toFixed();
      dayBudgetValue.textContent = appData.moneyPerDay;
      if (appData.moneyPerDay < 100) {
        levelValue.textContent = "Это минимальный уровень достатка!";
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent = "Средний уровень достатка!";
      } else if (appData.moneyPerDay > 2000) {
        levelValue.textContent = "Высокий уровень достатка";
      } else {
        levelValue.textContent = "Ошибка";
      }
    } else {
      dayBudgetValue.textContent = "Ошибка";
    }
  } else {
    countBudgetBtn.disabled = true;
  }
});

chooseIncome.addEventListener("input", () => {
  let items = chooseIncome.value;
  appData.income = items.split(", ");
  incomeValue.textContent = appData.income;
});

savings.addEventListener("click", () => {
  if (appData.savings) {
    appData.savings = false;
  } else {
    appData.savings = true;
    console.log("e");
  }
});

const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

chooseSum.addEventListener("input", () => {
  if (appData.savings) {
    let sum = +chooseSum.value,
      percent = +choosePercent.value;
    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

choosePercent.addEventListener("input", () => {
  if (appData.savings) {
    let sum = +chooseSum.value;
    let percent = +choosePercent.value;
    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

console.log(appData);
