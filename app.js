const loginInput = document.querySelector(".login-form input");
const loginForm = document.querySelector(".login-form");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  greeting.innerText = `Hello ${username} !!!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit", onLoginSubmit);
// 이 부분에서 함수명()을 안하는 이유
// -> 이 이벤트가 충족되었을 때만 실행하고 싶기 때문이다! 