const countButton = document.querySelector("#countBtn");
const dayInput = document.querySelector("#days");
const monthInput = document.querySelector("#months");
const yearInput = document.querySelector("#year");
const resultYears = document.querySelector(".result .score:nth-child(1) h2");
const resultMonths = document.querySelector(".result .score:nth-child(2) h2");
const resultDays = document.querySelector(".result .score:nth-child(3) h2");

countButton.addEventListener("click", calculateAge);

function calculateAge() {
  clearErrorStyles();
  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  let isValid = true;

  if (!isValidDate(day, month, year)) {
    if (day < 1 || day > 31) {
      showErrorStyles(dayInput);
    }

    if (month < 1 || month > 12) {
      showErrorStyles(monthInput);
    }

    if (year < 1 || year > new Date().getFullYear()) {
      showErrorStyles(yearInput);
    }

    isValid = false;
  }

  if (!isValid) {
    return;
  }

  const currentDate = new Date();
  const birthDate = new Date(year, month - 1, day);
  const newDate = new Date(currentDate - birthDate);

  if (birthDate > currentDate) {
    alert("Not in future");
    return;
  }

  const years = newDate.getFullYear() - 1970;
  const months = newDate.getMonth();
  const days = newDate.getDate() - 1;

  resultYears.textContent = years;
  resultMonths.textContent = months;
  resultDays.textContent = days;
}

function clearErrorStyles() {
  dayInput.classList.remove("error");
  monthInput.classList.remove("error");
  yearInput.classList.remove("error");
}

function isValidDate(day, month, year) {
  let valid = true;

  if (day < 1 || day > 31) {
    showErrorStyles(dayInput);
    valid = false;
  }

  if (month < 1 || month > 12) {
    showErrorStyles(monthInput);
    valid = false;
  }

  if (year < 1 || year > new Date().getFullYear()) {
    showErrorStyles(yearInput);
    valid = false;
  }

  return valid;
}

function showErrorStyles(input) {
  input.classList.add("error");
}
