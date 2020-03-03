let menuItems = document.querySelectorAll(".menu-item"),
  menu = document.querySelector(".menu"),
  column = document.querySelectorAll(".column"),
  adv = document.querySelector(".adv"),
  promptBlock = document.getElementById("prompt"),
  title = document.getElementById("title");


 
  //1


menu.insertBefore(menuItems[2], menuItems[1]);  

const newMenuItem = document.createElement("li");
newMenuItem.innerHTML = "Пятый пункт";
newMenuItem.classList.add("menu-item");
menu.appendChild(newMenuItem);

//2
document.body.style.backgroundImage = "url('img/apple_true.jpg')";  

//3
const newTitle = document.createElement("div");
newTitle.innerHTML = "Мы продаем только подлинную технику Apple";
newTitle.classList.add("title");
column[1].replaceChild(newTitle, title);

//title.textContent = "Мы продаем только подлинную технику Apple";

//4
column[1].removeChild(adv);

//5
const answer = prompt("Каково ваше отношение к технике Apple?", "");
promptBlock.innerHTML = answer;