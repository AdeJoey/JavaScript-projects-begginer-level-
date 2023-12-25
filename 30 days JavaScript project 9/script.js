
//get and storing the desired launching date
let countDownDate = new Date("oct 16, 2024 00:00:00").getTime();

//function and formula that allows countdown 
let x = setInterval(() => {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60))/ 1000);

//Displaying the countdown
  document.querySelector(".s1").innerHTML = days;
  document.querySelector(".s2").innerHTML = hours;
  document.querySelector(".s3").innerHTML = minutes;
  document.querySelector(".s4").innerHTML = seconds;

// behaviour when the count down finishes
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".s1").innerHTML = '00';
    document.querySelector(".s2").innerHTML = '00';
    document.querySelector(".s3").innerHTML = '00';
    document.querySelector(".s4").innerHTML = '00';
  }

}, 1000);
