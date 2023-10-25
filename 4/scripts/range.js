const rangeFrom = document.querySelector("#range-from");
const rangeTo = document.querySelector("#range-to");
rangeFrom.style.backgroundSize =
  ((rangeFrom.value - rangeFrom.min) / (rangeFrom.max - rangeFrom.min)) *
  100 +
  "% 100%";
rangeTo.style.backgroundSize =
  ((rangeTo.value - rangeTo.min) / (rangeTo.max - rangeTo.min)) * 100 +
  "% 100%";
rangeFrom.addEventListener("input", () => {
  const min = rangeFrom.max;
  const max = rangeFrom.min;
  const currentVal = rangeFrom.value;

  rangeFrom.style.backgroundSize =
    ((currentVal - min) / (max - min)) * 100 + "% 100%";
});
rangeTo.addEventListener("input", () => {
  const min = rangeTo.min;
  const max = rangeTo.max;
  const currentVal = rangeTo.value;

  rangeTo.style.backgroundSize =
    ((currentVal - min) / (max - min)) * 100 + "% 100%";
});
