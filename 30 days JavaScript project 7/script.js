// Storing elements inside variables
const inputBox = document.getElementById("text");
const Copy = document.getElementById("copy");
const btn = document.querySelector("button");
const lenght = 8;

// Storing character sets inside variables
const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const numbers ="1234567890";
const symbols ="?*&^%$#@!~";

const allChars = upperCase + lowerCase +symbols + numbers; 
// function that generates password
function PasswordCreator() {
        let password ="";
        password += upperCase[Math.floor(Math.random()* upperCase.length)];  
        password += lowerCase[Math.floor(Math.random()* lowerCase.length)];  
        password += symbols[Math.floor(Math.random()* symbols.length)];  
        password += numbers[Math.floor(Math.random()* numbers.length)];  

        while(lenght > password.length){
            password += allChars[Math.floor(Math.random()* allChars.length)]
        }
        inputBox.value = password;
}
//executing the command
btn.addEventListener("click", (e)=>{
    PasswordCreator();
})
Copy.addEventListener('click', (e)=>{
    inputBox.select();
    document.execCommand('copy');
    password;
})
