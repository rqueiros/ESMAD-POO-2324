const form = document.querySelector('form');
const table = document.querySelector('table');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const course = document.querySelector('input[name="course"]:checked').value;
    const userType = document.querySelector('select[name="userType"]').value;
    const session = Array.from(document.querySelectorAll('input[name="session"]:checked')).map(checkbox => checkbox.value);

    // at least one session must be selected
    if (session.length === 0) {
        alert('At least one session must be selected');
        return;
    }

    // b. Add a new row to the table with the user's data.

    const row = document.createElement('tr');
    const cellName = document.createElement('td');
    cellName.textContent = name;
    row.appendChild(cellName);
    const cellCourse = document.createElement('td');
    cellCourse.textContent = course;
    row.appendChild(cellCourse);
    const cellUserType = document.createElement('td');
    cellUserType.textContent = userType;
    row.appendChild(cellUserType);
    const cellSession = document.createElement('td');
    cellSession.textContent = session.join(', ');
    row.appendChild(cellSession);

    table.appendChild(row);


    document.querySelector('#name').value = '';
    document.querySelector('input[name="course"]:checked').checked = false;
    document.querySelector('select[name="userType"]').value = '';
    document.querySelectorAll('input[name="session"]:checked').forEach(checkbox => checkbox.checked = false);
}
);

// iii. 2. When the “other” item is selected, a prompt should appear where the user can add a new item to the select.
const userTypeSelect = document.querySelector('select[name="userType"]');
userTypeSelect.addEventListener('change', () => {
    if (userTypeSelect.value === 'Other') {
        const newUserType = prompt('Add new user type');
        const option = document.createElement('option');
        option.value = newUserType;
        option.textContent = newUserType;
        userTypeSelect.appendChild(option);
        userTypeSelect.value = newUserType;
    }
});

const countButton = document.getElementById('count');
countButton.addEventListener('click', () => {
    const rows = document.querySelectorAll('table tr');
    alert(`Number of registered users: ${rows.length - 1}`);
});