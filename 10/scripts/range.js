const rangeFrom = document.querySelector("#range-from");
const rangeTo = document.querySelector("#range-to");
const inputFrom = document.querySelector("#input-from");
const inputTo = document.querySelector("#input-to");

rangeFrom.style.backgroundSize =
  ((rangeFrom.max-rangeFrom.value) / (rangeFrom.max - rangeFrom.min)) * 100 + "% 100%";

rangeTo.style.backgroundSize =
  ((rangeTo.value - rangeTo.min) / (rangeTo.max - rangeTo.min)) * 100 + "% 100%";

rangeFrom.addEventListener("input", () => {
  const min = rangeFrom.max;
  const max = rangeFrom.min;
  const currentVal = rangeFrom.value;
  rangeFrom.style.backgroundSize =
    ((currentVal - min) / (max - min)) * 100 + "% 100%";
  inputFrom.value = currentVal;
});

rangeTo.addEventListener("input", () => {
  const min = rangeTo.min;
  const max = rangeTo.max;
  const currentVal = rangeTo.value;
  rangeTo.style.backgroundSize =
    ((currentVal - min) / (max - min)) * 100 + "% 100%";
  inputTo.value = currentVal;
});

inputFrom.addEventListener("input", (event) => {
  const currentTarget = event.target.value;
  if (currentTarget >= rangeFrom.min && currentTarget <= rangeFrom.max) {
    rangeFrom.value = event.target.value;
    rangeFrom.style.backgroundSize =
      ((rangeFrom.max - currentTarget) / (rangeFrom.max - rangeFrom.min)) * 100 + "% 100%";
  }
});

inputTo.addEventListener("input", (event) => {
  const currentTarget = event.target.value;
  if (currentTarget >= rangeTo.min && currentTarget <= rangeTo.max) {
    rangeTo.value = event.target.value;
    rangeTo.style.backgroundSize =
      ((currentTarget - rangeTo.min) / (rangeTo.max - rangeTo.min)) * 100 + "% 100%";
  }
});
