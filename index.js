"use strict"
const inputField = document.querySelector("#uname")
const passWord = document.querySelector("#pword")
const submitBtn = document.querySelector("#sub-btn")
const nameWarning = document.querySelector("#warning-name")
const pWordWarning = document.querySelector("#warning-pword")
const buttonToggle = document.querySelector("#togg-pword")
const testBtn = document.querySelector("#test")
const displayInfoText = document.querySelector("#display-info")
let testVar;
let passwordVar;
function readText (form){
    testVar = form.username.value
    passwordVar = form.pword.value
    console.log(testVar);
    console.log(passwordVar);
}
const dispWarningUser = () =>{
    nameWarning.innerHTML = `&CircleTimes; Enter Username`
}
const dispWarningPword = () =>{
    pWordWarning.innerHTML = `&CircleTimes; Enter Password`
}
submitBtn.addEventListener('click', () =>{
    readText (submitBtn.form) 
    if (testVar === ""){
        dispWarningUser()
    } if (passwordVar === "") {
        dispWarningPword()
    }
    if (testVar === "" && passwordVar === ""){
        displayInfoText.textContent = ""
    } else{
        displayInfoText.innerHTML = `Welcome <b>${testVar}</b>, your password is <b>${passwordVar}</b>`
    }

    
})
buttonToggle.addEventListener ('click', () =>{
    let toggPword = () => {
        if (passWord.type === "password"){
            passWord.type = "text"
            buttonToggle.innerHTML = `<i class="fa fa-eye-slash"></i>`
            buttonToggle.style.fontSize = "20px"
        } else{
            passWord.type = "password"
            buttonToggle.innerHTML = `<i class="fa fa-eye"></i>`
            buttonToggle.style.fontSize = "20px"
        }
    }
    toggPword()
})
function demo() {
    console.log("Testing!");
}

