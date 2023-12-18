let userInput = document.querySelector("#date-input");
userInput.max = new Date().toISOString().split("T")[0];

function ageCalculator(){
    /* collecting and storing the user birthday */
    let userBirthday =new Date(userInput.value);

    let daySelected = userBirthday.getDate();
    let monthSelected = userBirthday.getMonth() + 1;
    let yearSelected = userBirthday.getFullYear();
    
    /* Storing the current date */
    let today = new Date();

    let currentDay = today.getDate();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    

    let AgeinDays;
    let AgeinMonths;
    let AgeinYears;
    AgeinYears = currentYear-yearSelected ;

    if (currentMonth >= monthSelected ) {
        AgeinMonths = currentMonth - monthSelected;
    }
    else{
        AgeinYears--;
        AgeinMonths =12 + currentMonth - monthSelected;
    }
   
    if (currentDay >= daySelected ) {
        AgeinDays = currentDay - daySelected;
    }
    else{
        AgeinMonths--;
        AgeinDays = getDaysinMonthandYear(yearSelected, monthSelected) + currentDay - daySelected;
    }
    if (AgeinMonths < 0) {
        AgeinMonths = 11;
        AgeinYears--;
    }

    console.log(AgeinYears, AgeinMonths, AgeinDays);
}
function getDaysinMonthandYear(year, month){
    return new Date(year, month, 0).getDate();
}
