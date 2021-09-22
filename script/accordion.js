const btns = document.querySelectorAll(".feature__link");
const lists = document.querySelectorAll(".feature-sub");
//
btns.forEach((btnItem, index) => {
  btnItem.addEventListener("click", () => {
    btns.forEach((btnItem) => {
      if (btnItem.classList.contains("feature__link_active")) {
        btnItem.classList.remove("feature__link_active");
      }
    });
    btnItem.classList.add("feature__link_active");

    lists.forEach((listItem, index) => {
      listItem.classList.add("hidden");
    });

    lists[index].classList.remove("hidden");

    //Закрытие открытого блока
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", () => {
        btns[i].classList.toggle("feature__link_active");
        lists[i].classList.toggle("hidden");
      });
    }
  });
});
