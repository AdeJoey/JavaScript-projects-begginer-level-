/* Storing the elements into variables */
const inputBox = document.getElementById("text");
let addBtn = document.getElementById("btn");
let listCtn = document.querySelector(".list");
let toDoList = document.querySelector("to-do")

/* event that breaks a line when you press the enter key */
inputBox.addEventListener('keydown', function(event) {
    // Check if Enter was pressed
    if (event.keyCode === 13) {
      // Prevent the default action
      event.preventDefault();
      
      // Trigger the button click
      document.getElementById('btn').click();
    }
   
        let greetings = ['Hello, Wanna do something fun today?', 'Have you Prayed today?'];
        for (let i = 0; i < array.length; i++) {
            document.getElementById('text').Placeholder = greetings[i];
            
          }
      });  
   

 
function addTask() {
    if(inputBox.value === ''){
        alert('Kindly add a title for your task');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCtn.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value ="";
}
listCtn.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);