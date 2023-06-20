let btn = document.querySelector(".main__form-btn");
let startItems = document.querySelector(".header__start-items");
let formStartItems = document.querySelector(".main__start-items");
let tabsPanel = document.querySelector(".header__tabs-panel");

let prevBtn = document.querySelector(".main__previous-btn");
let nextBtn = document.querySelector(".main__next-btn");
let secondItems = document.querySelector(".main__second-items");

let prevBtn2 = document.querySelector(".main__previous-btn-2");
let nextBtn2 = document.querySelector(".main__next-btn-2");
let thirdItems = document.querySelector(".main__third-items");

let prevBtn3 = document.querySelector(".main__previous-btn-3");
let submit = document.querySelector(".main__submit");
let fourthItems = document.querySelector(".main__fourth-items");

let panelLeft = document.querySelector(".header__panel-left");
let panelRight = document.querySelector(".header__panel-right");

let tab2 = document.querySelector(".header__tab-2");
let tab2Inner = document.querySelector(".header__tab-2-inner");
let tabCheck1 = document.querySelector(".header__tab-check-1");
let tab3 = document.querySelector(".header__tab-3");
let tab3Inner = document.querySelector(".header__tab-3-inner");
let tabCheck2 = document.querySelector(".header__tab-check-2");
let mainAdd = document.querySelector(".main__add");

btn.addEventListener("click", function() {
    startItems.style.visibility = "hidden";
    formStartItems.style.display = "none";
    secondItems.style.display = "flex";
    tabsPanel.style.display = "block";
});

prevBtn.addEventListener("click", function() {
    formStartItems.style.display = "block";
    secondItems.style.display = "none";
    startItems.style.visibility = "visible";
    tabsPanel.style.display = "none";
})
nextBtn.addEventListener("click", function() {
    secondItems.style.display = "none";
    thirdItems.style.display = "block";
    panelLeft.style.display = "block";
    tab2.style.backgroundColor = "#5558FA";
    tab2Inner.style.backgroundColor = "white";
    tabCheck1.style.display = "block";
});

prevBtn2.addEventListener("click", function() {
    secondItems.style.display = "block";
    thirdItems.style.display = "none";
    panelLeft.style.display = "none";
    tabCheck1.style.display = "none";
    tab2.style.backgroundColor = "gray";
    tab2Inner.style.backgroundColor = "gray";
})
nextBtn2.addEventListener("click", function() {
    thirdItems.style.display = "none";
    fourthItems.style.display = "block";
    panelRight.style.display = "block";
    tabCheck2.style.display = "block";
    tab2.style.backgroundColor = "#5558FA";
    tab2Inner.style.backgroundColor = "#5558FA";
    tab3.style.backgroundColor = "#5558FA";
    tab3Inner.style.backgroundColor = "white";
});

prevBtn3.addEventListener("click", function() {
    thirdItems.style.display = "block";
    fourthItems.style.display = "none";
    panelRight.style.display = "none";
    tabCheck2.style.display = "none";
    tab3Inner.style.backgroundColor = "gray";
    tab3.style.backgroundColor = "gray";
});


var phone = document.querySelector('.main__number');
var opt = {
    mask: '+{7}(000)000-00-00'
} 
var mask = new IMask(phone, opt);