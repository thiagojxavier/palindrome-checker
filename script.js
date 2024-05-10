const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

function handleDataInput() {
    result.classList.remove("active");

    if (checkingIfTheInputIsEmpty()) {
        return;
    }

    const valueTextInput = removeSpecialCharacters(textInput.value);
    
    const valueTextInputReverse = valueTextInput.split('').reverse().join('');

    if (valueTextInputReverse !== valueTextInput) {
        result.textContent = `${textInput.value} is not a palindrome`;
        result.offsetWidth;
        result.classList.add("active");
    } else {
        result.textContent = `${textInput.value} is a palindrome`;
        result.offsetWidth;
        result.classList.add("active");
    }

    textInput.value = "";

}

function checkingIfTheInputIsEmpty() {

  if (textInput.value === "") {
    alert('Please input a value');
    return true;
  }

  return false;
}

function removeSpecialCharacters(string) {
  const regex = /[^a-zA-Z0-9]/g;
  return string.replace(regex, "").toLowerCase();
}

checkButton.addEventListener('click', handleDataInput);