const start = document.getElementById("start");
const end = document.getElementById("end");
start.valueAsDate = new Date();
end.valueAsDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 10);
const modalOverlay = document.querySelector(".modal-overlay");
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
const svgImages = document.querySelectorAll("svg");

svgImages.forEach((item, ind) => {
  switch (ind) {
    case 0:
      item.setAttribute("transform", "translate(-55 0)");
      break;
    case 1:
      item.setAttribute("transform", "translate(-40 0)");
      break;
    case 2:
      item.setAttribute("transform", "translate(-65 0)");
      break;
    default:
  }
});
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
start.oninput = (event) => {
  event.preventDefault();
  const startDate = new Date(event.target.value);
  if (startDate < new Date()) {
    error.style.display = "block";
  } else {
    start.value = event.target.value;
    error.style.display = "none";
  }
};
end.oninput = (event) => {
  event.preventDefault();
  const endDate = new Date(event.target.value);
  if (endDate > new Date()) {
    successInfo.style.display = "block";
    end.value = event.target.value;
  } else {
    successInfo.style.display = "none";
    end.value = "";
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
