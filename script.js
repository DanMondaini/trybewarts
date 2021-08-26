/* Adiciona Botão e validação de Login */
const buttonLogin = document.querySelector('#button-login');
const inputEmail = document.querySelector('#input-email1');
const inputPassword = document.querySelector('#input-password');
const validationLogin = 'tryber@teste.com';
const validationPassword = '123456';
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

function validationButton() {
  if (inputEmail.value === validationLogin && inputPassword.value === validationPassword) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', validationButton);

function counterCharacter() {
  const counterText = 500 - textArea.value.length;
  counter.innerHTML = counterText; 
}
textArea.addEventListener('keyup', counterCharacter);
