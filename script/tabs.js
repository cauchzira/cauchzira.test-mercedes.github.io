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
