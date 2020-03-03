let menuItems = document.querySelectorAll(".menu-item"),
  menu = document.querySelector(".menu"),
  column = document.querySelectorAll(".column"),
  adv = document.querySelector(".adv"),
  promptBlock = document.getElementById("prompt"),
  title = document.getElementById("title");

//1
const newMenuItem = document.createElement("div");
newMenuItem.innerHTML = "Пятый пункт";
newMenuItem.classList.add("menu-item");

const secondItem = document.createElement("div");
secondItem.innerHTML = "Второй пункт";
secondItem.classList.add("menu-item");

menu.replaceChild(secondItem, menuItems[1]);

const thirdItem = document.createElement("div");
thirdItem.innerHTML = "Третий пункт";
thirdItem.classList.add("menu-item");

menu.replaceChild(thirdItem, menuItems[2]);

menu.appendChild(newMenuItem);

//2
document.body.style.background = " url('../img/apple_true.jpg') ";

//3
const newTitle = document.createElement("div");
newTitle.innerHTML = "Мы продаем только подлинную технику Apple";
newTitle.classList.add("title");
column[1].replaceChild(newTitle, title);

//4
column[1].removeChild(adv);

//5
const answer = prompt("Каково ваше отношение к технике Apple?", "");
promptBlock.innerHTML = answer;



