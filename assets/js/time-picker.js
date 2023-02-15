var select = document.getElementById("time-select");
var hidden = document.getElementById("selected-time");
var timeInput = document.getElementById("actual-time");

select.addEventListener("change", function () {
  hidden.value = select.value;
  timeInput.value = select.value;
});