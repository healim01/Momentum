const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const ck = document.getElementById("clock");
const todow = document.getElementById("todo-word");
const todof = document.getElementById("todo-form");
const todol = document.getElementById("todo-list");
const qt = document.getElementById("quote");
const weat = document.getElementById("weather");


const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function submitInput(event) {
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(userName);
}

function paintGreeting(userName) {
    greeting.innerText = `Hello, ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

    ck.classList.remove(HIDDEN_CLASSNAME);
    todow.classList.remove(HIDDEN_CLASSNAME);
    todof.classList.remove(HIDDEN_CLASSNAME);
    todol.classList.remove(HIDDEN_CLASSNAME);
    qt.classList.remove(HIDDEN_CLASSNAME);
    weat.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", submitInput);
} else {
    paintGreeting(savedUsername);
}