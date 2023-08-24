//step1: de dang rut ngan code
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//step2: tao tabs, panes de goi toi 2 class tren
const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

//step6: create tabActive de xem left, width cua tab-item
const tabActive = $(".tab-item.active");

//step7: create line de thuc hien noi line
const line = $(".line");

//step8: style left, width de khop voi title
line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

//step3: tao vong lap de click
tabs.forEach((tab, index) => {
  const pane = panes[index];
  tab.onclick = function () {
    //step5: remove active khi bam sang tab-item khac
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    //step9: bo vao day de hien line
    line.style.left = tab.offsetLeft + "px";
    line.style.width = tab.offsetWidth + "px";

    //step4: add active cho class tab-item
    tab.classList.add("active");
    pane.classList.add("active");
  };
});
