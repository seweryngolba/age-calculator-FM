const countButton = document.querySelector("#countBtn");
const dayInput = document.querySelector("#days");
const monthInput = document.querySelector("#months");
const yearInput = document.querySelector("#year");
const resultYears = document.querySelector(".result .score:nth-child(1) h2");
const resultMonths = document.querySelector(".result .score:nth-child(2) h2");
const resultDays = document.querySelector(".result .score:nth-child(3) h2");
const dayLabel = document.querySelector(".day-label");
const monthLabel = document.querySelector(".month-label");
const yearLabel = document.querySelector(".year-label");

countButton.addEventListener("click", calculateAge);

function calculateAge() {
  clearErrorStyles();

  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  let errorFields = [];

  if (isNaN(day) || day < 1 || day > 31) {
    showErrorStyles(dayInput);
    showErrorLabel(dayLabel);
    errorFields.push(dayLabel);
  }

  if (isNaN(month) || month < 1 || month > 12) {
    showErrorStyles(monthInput);
    showErrorLabel(monthLabel);
    errorFields.push(monthLabel);
  }

  if (isNaN(year) || year < 1 || year > new Date().getFullYear()) {
    showErrorStyles(yearInput);
    showErrorLabel(yearLabel);
    errorFields.push(yearLabel);
  }

  if (errorFields.length > 0) {
    return;
  }

  const currentDate = new Date();
  const birthDate = new Date(year, month - 1, day);
  const newDate = new Date(currentDate - birthDate);

  if (birthDate > currentDate) {
    alert("Not in the future");
    return;
  }

  resultYears.textContent = newDate.getFullYear() - 1970;
  resultMonths.textContent = newDate.getMonth();
  resultDays.textContent = newDate.getDate() - 1;
}

function clearErrorStyles() {
  dayInput.classList.remove("error");
  monthInput.classList.remove("error");
  yearInput.classList.remove("error");
  clearErrorLabel(dayLabel);
  clearErrorLabel(monthLabel);
  clearErrorLabel(yearLabel);
}

function showErrorStyles(input) {
  input.classList.add("error");
}

function showErrorLabel(label) {
  label.textContent = "Error Date";
  label.classList.add("error-label");
}

function clearErrorLabel(label) {
  label.textContent = label.getAttribute("for").toUpperCase();
  label.classList.remove("error-label");
}
