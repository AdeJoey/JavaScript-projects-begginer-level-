let userName =prompt('Hello, May I know your name?');
let hrs = document.querySelector(".hrs");
let mins = document.querySelector(".mins");
let secs = document.querySelector(".secs");
let pleasantries = document.querySelector('h3')
setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = currentTime.getHours();
    mins.innerHTML = currentTime.getMinutes();
    secs.innerHTML = currentTime.getSeconds();
    if (hrs.innerHTML <12 ) {
        pleasantries.innerText = 'Good Morning, ' + userName;
    }
    else if (hrs.innerHTML >= 12 && hrs.innerHTML < 16) {
        pleasantries.innerText = 'Good Afternoon, '+ userName
    }
    else if (hrs.innerHTML >= 16 && hrs.innerHTML < 21) {
        pleasantries.innerText = 'Good Evening, '+ userName
    }
    else{
        pleasantries.innerText = 'Good Night, '+ userName
    }
}, 1000);


