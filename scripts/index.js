const start = document.getElementById("start");
const end = document.getElementById("end");
const modalOverlay = document.querySelector(".modal-overlay");
const modalForm = document.querySelector(".modal-form");
const modalShowBtn = document.querySelector(".user-navigation-popup-btn");
const modalCloseBtn = document.querySelector(".modal-close");
const error = document.querySelector(".error");
const successInfo = document.querySelector(".end-info-success");
const nav = document.querySelector(".page-header-wrapper");
const logo = document.querySelector(".page-header-logo-link");
const showNavBtn = document.querySelector(".navigation-btn");
const adultsMinusButton = document.getElementById("adults-minus");
const adultsPlusButton = document.getElementById("adults-plus");
const childrenMinusButton = document.getElementById("children-minus");
const childrenPlusButton = document.getElementById("children-plus");
const adultsResult = document.getElementById("adults-result");
const childrenResult = document.getElementById("children-result");
const viewButtons = document.querySelectorAll(".view-btn");
const showStart = document.querySelector(".modal-input-start");
const showEnd = document.querySelector(".modal-input-end");
const layoutContainer = document.querySelector(".layout-container");

let counter=0;
const monthArray = { '01': 'января', '02': 'февраля', '03': 'марта', '04': 'апреля', '05': 'мая', '06': 'июня', '07': 'июля', '08': 'августа', '09': 'сентября', '10': 'октября', '11': 'ноября', '12': 'декабря' };

const transformDate = (date, isDirectOrder = false) => {
  const startDateArray = date.split("-");
  // if (startDateArray.length === 0) {
  //   return "Укажите дату";
  // }
  if (isDirectOrder) {
    return `${startDateArray[0]} ${monthArray[startDateArray[1]]} ${startDateArray[2]}`;
  }
  return `${startDateArray[2]} ${monthArray[startDateArray[1]]} ${startDateArray[0]}`;
};

document.onkeydown = function(e) {
  if(e.key === "Escape") {
    modalOverlay.style.display = "none";
  }
};
viewButtons.forEach(item=>{
  item.addEventListener("click",(elem)=>{
    viewButtons.forEach(i=>i.classList.remove("current"))
    elem.classList.add("current");
  })
});

//showStart.innerText=transformDate(new Date().toLocaleString().substr(0, 10).replaceAll(".", "-"), 1);
//showEnd.innerText=transformDate(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 10).toLocaleString().substr(0, 10).replaceAll(".", "-"), 1);

adultsPlusButton.onclick = () => {
  const result = +adultsResult.value;
  adultsResult.value = (result + 1).toString();
};
adultsMinusButton.onclick = () => {
  const result = +adultsResult.value;
  if (result > 1) {
    adultsResult.value = (result - 1).toString();
  }
};
childrenPlusButton.onclick = () => {
  const result = +childrenResult.value;
  childrenResult.value = (result + 1).toString();
};
childrenMinusButton.onclick = () => {
  const result = +childrenResult.value;
  if (result > 0) {
    childrenResult.value = (result - 1).toString();
  }
};
modalShowBtn.onclick = () => {
  modalOverlay.style.display = "flex";

};

modalCloseBtn.onclick = () => {
  modalOverlay.style.display = "none";
};
modalOverlay.onclick = (e) => {
  if(e.target.classList.contains("modal-overlay")){
    modalOverlay.style.display = "none";
  }
};
start.oninput = (event) => {
  event.preventDefault();
  const startDate = new Date(event.target.value);
  if (startDate < new Date()) {
    error.style.display = "block";
    start.value = null;
    showStart.value=null;
  } else {
    start.classList.add("active");
    start.value = event.target.value;
    showStart.value=transformDate(event.target.value);
    error.style.display = "none";
  }
};
end.oninput = (event) => {
  event.preventDefault();
  const endDate = new Date(event.target.value);
  if (endDate > new Date()) {
    successInfo.style.display = "block";
    end.value = event.target.value;
    end.classList.add("active");
    showEnd.value=transformDate(event.target.value);
  } else {
    successInfo.style.display = "none";
    end.value = null;
    showEnd.value=null
  }
};
showNavBtn.onclick = () => {
  showNavBtn.classList.toggle("active");
  if (showNavBtn.classList.contains("active")) {
    nav.style.display = "flex";
    logo.style.display = "none";
    document.querySelectorAll(".navigation-btn-line").forEach(item => {
      item.style.display = "none";
    })
  } else {
    nav.style.display = "none";
    logo.style.display = "block";
    document.querySelectorAll(".navigation-btn-line").forEach(item => {
      item.style.display = "block";
    })
  }
};
