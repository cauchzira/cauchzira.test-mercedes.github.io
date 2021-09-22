const btns = document.querySelectorAll(".feature__link");
const lists = document.querySelectorAll(".feature-sub");
//
btns.forEach((btnItem, index) => {
  btnItem.addEventListener("click", () => {
    btns.forEach((btnItem, id) => {
      if (btnItem === id) {
        btnItem.classList.toggle("feature__link_active");
        lists[id].classList.toggle("hidden");
      } else {
        btnItem.classList.remove("feature__link_active");
        lists[id].classList.add("hidden");
      }
    });
  });
});
