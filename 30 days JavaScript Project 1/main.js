

/* Storing the elements inside a variable  */
const addBtn =document.querySelector(".btn");
const container = document.querySelector(".note-Container");
let  Notes = document.querySelectorAll('.note-input');

/* Function to display the saved data entered by a user,when refreshed  */
function showNotes(){
    container.innerHTML = localStorage.getItem("Notes");
}
showNotes();

/* Function to save the data entered by a user */
function updateStorage(){
    localStorage.setItem("Notes", container.innerHTML);
}
/* An event that creates the contentEditable paragraph when we click on the create buttton  */
addBtn.addEventListener("click", ()=>{
    let note = document.createElement("p");
    let btn = document.createElement('img');
    note.className = "note-input";
    note.setAttribute("contenteditable", "true");
    btn.src = "trash.png";


container.appendChild(note).appendChild(btn);


});
/* event and function that deletes the note*/
container.addEventListener("click", function(e){
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    /* conditional statements for the note contents  */
    else if(e.target.tagName === "P"){
        Notes = document.querySelectorAll(".note-input");
        Notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})
/* event that breaks a line when you press the enter key */
document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})


