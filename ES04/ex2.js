const select = document.querySelector('select');

// a. Add button – when pressed, a new item must be added via prompt.
const addButton = document.querySelector('#add');
addButton.addEventListener('click', () => {
  const newItem = prompt('Enter a new item:');
  const option = document.createElement('option');
  option.textContent = newItem;
  select.appendChild(option);
});

// b. View button - when pressed, it should show the content of the selected item through an alert.
const viewButton = document.querySelector('#view');
viewButton.addEventListener('click', () => {
  const selectedOption = select.options[select.selectedIndex];
  alert(selectedOption.textContent);
});

// c. Remove button – when pressed, the selected item must be removed.
const removeButton = document.querySelector('#remove');
removeButton.addEventListener('click', () => {
  const selectedOption = select.options[select.selectedIndex];
  select.removeChild(selectedOption);
});