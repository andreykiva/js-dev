"use strict";

const money = prompt("Ваш бюджет на месяц?", "");

const time = prompt("Введите дату в формате YYYY-MM-DD", "");

const appData = {
  money: money,
  time: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

let expenseItem = prompt(
  "Введите обязательную статью расходов в этом месяце",
  ""
);
expenseItem = prompt("Введите обязательную статью расходов в этом месяце", "");

let cost = prompt("Во сколько обойдется?", "");
cost = prompt("Во сколько обойдется?", "");

appData.expenses[expenseItem] = cost;

alert(`Бюджет на один день: ${money / 30}`);
