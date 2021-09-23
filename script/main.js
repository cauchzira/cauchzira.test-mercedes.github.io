//Accordion

const lists = document.querySelectorAll(".feature-sub");
const btns = document.querySelectorAll(".feature__link");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((btnItem, idx) => {
      if (btnItem === btn) {
        btnItem.classList.toggle("feature__link_active");
        lists[idx].classList.toggle("hidden");
      } else {
        btnItem.classList.remove("feature__link_active");
        lists[idx].classList.add("hidden");
      }
    });
  });
});

//Smooth Sccroll

const linksHead = document.querySelectorAll(".menu-list__link");
const mainScroll = document.querySelector(".main__scroll");
const newArray = [...linksHead, mainScroll];

newArray.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const ID = event.target.getAttribute("href").substr(1);

    document.getElementById(ID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

//Tabs

const tabsHandlerElems = document.querySelectorAll("[data-tabs-handler]");
const tabsContentElems = document.querySelectorAll("[data-tabs-field]");
const titleDesign = document.querySelectorAll(".design__title");

for (let btn of tabsHandlerElems) {
  btn.addEventListener("click", () => {
    tabsHandlerElems.forEach((item) =>
      item.classList.remove("design-list__item_active")
    );
    btn.classList.add("design-list__item_active");

    for (let title of titleDesign) {
      if (title.classList.contains("hidden")) {
        title.classList.remove("hidden");
      } else {
        title.classList.add("hidden");
      }
    }

    tabsContentElems.forEach((content) => {
      if (content.dataset.tabsField === btn.dataset.tabsHandler) {
        content.classList.remove("hidden");
      } else {
        content.classList.add("hidden");
      }
    });
  });
}
