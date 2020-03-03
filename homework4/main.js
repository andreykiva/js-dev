"use strict";
let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money === "" || money === null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}

start();

const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function() {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
      if (
        typeof a === "string" &&
        typeof a !== null &&
        typeof b === "string" &&
        typeof b !== null &&
        a !== "" &&
        b !== "" &&
        a.length < 50
      ) {
        console.log("Yes");
        appData.expenses[a] = b;
      } else {
        console.log("Что-то пошло не так!");
        i--;
      }
    }
  },
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert(`Бюджет на один день: ${appData.moneyPerDay}`);
  },
  detectLevel: function() {
    if (appData.moneyPerDay < 100) {
      console.log("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка!");
    } else if (appData.moneyPerDay > 200) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Ошибка");
    }
  },
  checkSavings: function() {
    if (appData.savings) {
      let save = +prompt("Какова сумма накоплений?", " "),
        percent = +prompt("Под какой процент?", " ");

      appData.monthIncome = (save / 100 / 12) * percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function() {
    for (let i = 1; i <= 3; i++) {
      appData[i] = prompt("Статья необязательных расходов?", " ");
    }
  },
  chooseIncome: function() {
    let items = prompt(
      "Что принесет дополнительный доход? (Перечислите через запятую)",
      " "
    );
    while (!(isNaN(items)) || items === "" || items === null) {
      items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
    };

    appData.income = items.split(", ");
    appData.income.push(prompt("Может, что-то еще?", ""));
    appData.income.sort();
    alert("Способы доп. заработка:");
    appData.income.forEach((elem, i) => {
      alert(i+1 + ". " + elem);
    })
  }
};

appData.chooseIncome();

alert("Наша программа включает в себя данные: ");

for (let key in appData) {
  alert(key);
}
console.log(appData);
