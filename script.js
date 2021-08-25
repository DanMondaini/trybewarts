/* Adiciona Botão e validação de Login */
const buttonLogin = document.querySelector('#button-login');
const inputEmail = document.querySelector('#input-email');
const inputPassword = document.querySelector('#input-password');
const validationLogin = 'tryber@teste.com';
const validationPassword = '123456';

function validationButton() {
  if (inputEmail.value === validationLogin && inputPassword.value === validationPassword) {
    alert('Olá, Tryber!');
  } else {
  alert('Email ou senha inválidos.');
  }

  buttonLogin.addEventListener('click', validationButton);
  validationButton()
}
