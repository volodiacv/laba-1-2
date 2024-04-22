const passwordInput = document.querySelector('#password-input');
const passwordLengthInput = document.querySelector('#password-length');
const generateBtn = document.querySelector('#generate-btn');

generateBtn.addEventListener('click', () => {
  const passwordLength = parseInt(passwordLengthInput.value);
  if (isNaN(passwordLength) || passwordLength <= 0) {
    alert('Введіть валидну довжину пароля!');
    return;
  }
  const password = generatePassword(passwordLength);
  passwordInput.value = password;
});

function generatePassword(length) {
  // Визначити набори символів
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_-+";

  // Створити змінну для пароля
  let password = "";

  // Перебрати довжину пароля
  for (let i = 0; i < length; i++) {
    // Випадковим чином вибрати тип символу
    const type = Math.floor(Math.random() * 3);

    // Додати символ до пароля
    switch (type) {
      case 0:
        password += letters[Math.floor(Math.random() * letters.length)];
        break;
      case 1:
        password += numbers[Math.floor(Math.random() * numbers.length)];
        break;
      case 2:
        password += symbols[Math.floor(Math.random() * symbols.length)];
        break;
    }
  }

  // Повернути пароль
  return password;
}