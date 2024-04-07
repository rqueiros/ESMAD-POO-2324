// a. When you click the button, an alert with the text “Hello World!”
// should pop up. For this use the 3 approaches learned:
// i. Through an HTML attribute
// ii. Through a DOM property
// iii. By adding a listener

// i. Through an HTML attribute
function showAlert() {
    alert('Hello World!');
}

// ii. Through a DOM property
const btn2 = document.getElementById('btn2');
btn2.onclick = showAlert;

// iii. By adding a listener
const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', showAlert);


// b. Add a text box and a paragraph to the file. Create a listener
// that will play what is written in the text box for the paragraph.
// Change the button click event to display the number of characters
// written.

const input = document.getElementById('txt1');
const paragraph = document.getElementById('p1');
const btn4 = document.getElementById('btn4');

function playText() {
    paragraph.innerText = input.value;
}

input.addEventListener('input', playText);

function countCharacters() {
    alert(input.value.length);
}

btn4.addEventListener('click', countCharacters);

// c. Add a new listener to the button that, when the button is pressed, should send a message to the console with the text “thanks for clicking the button!”.
btn4.addEventListener('click', () => {
    console.log('thanks for clicking the button!');
});