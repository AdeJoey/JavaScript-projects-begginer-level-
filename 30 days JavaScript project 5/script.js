/* storing the elements into variables */
const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const current = new Date();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const allMonths = ["January", "Febuary", "March", "April", "May", "June", "July", "August",
"September", "October", "November","December"]

    date.innerHTML = current.getDate();
    day.innerHTML = weekDays[current.getDay()];
    month.innerHTML = allMonths[current.getMonth()];
    year.innerHTML = current.getFullYear();

