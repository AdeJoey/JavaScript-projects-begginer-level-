let button = document.querySelector("button");
let result = document.querySelector(".result");
let each = document.getElementById("each");
let span = document.querySelector("span");

result.style.display = "none";
each.style.display = "none";

localStorage

button.addEventListener("click", () => {
  let Price = document.getElementById("One").value;
  let CustomerExperience = document.querySelector("select").value;
  let numOfPeople = document.querySelector("#two").value;

  //Quick Validation
  if (Price === "" || CustomerExperience == 0) {
    window.alert(
      "Kindly fill in the requested information to get your desired result 😊"
    );
    return;
  }

  //Check to see if this input is empty or less than or equal to 1
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    each.style.display = "none";
  } else {
    each.style.display = "block";
  }
  let total = (Price * CustomerExperience) / numOfPeople;
  window.alert(total);
  total = Math.round(total);

  result.style.display = "block";
  span.innerHTML = total;
  return;
});
