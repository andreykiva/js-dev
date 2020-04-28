window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const tab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll(".info-tabcontent");

  const hideTabContent = (a) => {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  };

  hideTabContent(1);

  const showTabContent = (b) => {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  };

  info.addEventListener("click", (e) => {
    let target = e.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target === tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  //timer

  class Timer {
    constructor(endtime, id) {
      this.endtime = endtime;
      this.id = id;
    }

    getTimeRemaining() {
      const t = Date.parse(this.endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor(t / 1000 / 60 / 60);

      return {
        total: t,
        seconds,
        minutes,
        hours,
      };
    }
    setClock() {
      const timer = document.getElementById(this.id),
        hours = timer.querySelector(".hours"),
        minutes = timer.querySelector(".minutes"),
        seconds = timer.querySelector(".seconds"),
        timeInterval = setInterval(updateClock.bind(this), 1000);

      function updateClock() {
        const t = this.getTimeRemaining();

        hours.textContent = t.hours < 10 ? "0" + t.hours : t.hours;
        minutes.textContent = t.minutes < 10 ? "0" + t.minutes : t.minutes;
        seconds.textContent = t.seconds < 10 ? "0" + t.seconds : t.seconds;

        if (t.total <= 0) {
          clearInterval(timeInterval);
          hours.textContent = "00";
          minutes.textContent = "00";
          seconds.textContent = "00";
        }
      }
    }
  }

  const deadline = "2020-04-29";
  const timer = new Timer(deadline, "timer");

  timer.setClock();

  // modal

  const descr = document.querySelectorAll(".description-btn");
  const more = document.querySelector(".more");
  const modalWindow = document.querySelector(".overlay"),
    close = document.querySelector(".popup-close");

  close.addEventListener("click", function () {
    modalWindow.style.display = "none";
    more.classList.remove("more-splash");

    for (let i = 0; i < descr.length; i++) {
      descr[i].classList.remove("more-splash");
    }

    document.body.style.overflow = "";
  });

  for (let i = 0; i < descr.length; i++) {
    descr[i].addEventListener("click", function () {
      showModal(modalWindow, this);
    });
  }

  more.addEventListener("click", function () {
    showModal(modalWindow, this);
  });

  const showModal = (modal, elem) => {
    modal.style.display = "block";
    elem.classList.add("more-splash");
    document.body.style.overflow = "hidden";
  };
});
