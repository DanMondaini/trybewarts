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

document.getElementById('submit-btn').disabled = true;

// consultamos o repositório do Arturo Vaine para o requisito 18 - link: https://github.com/tryber/sd-014-b-project-trybewarts/pull/42/commits/cef3445c02af40a04aaed8277aa1034de02b04e7

const submitButton = document.getElementById('submit-btn');
const checkboxAgreement = document.getElementById('agreement');
function checkedButton() {
  if (checkboxAgreement.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
checkboxAgreement.addEventListener('click', checkedButton);

const inputname = document.querySelector('#input-name');
const inputLastName = document.querySelectorAll('#input-lastname');
const nameHere = document.querySelectorAll('#name-here');
function addFormsAll() {
  nameHere.innerHTML.add = inputname.value + inputLastName.value;
}
submitButton.addEventListener('click', addFormsAll);
