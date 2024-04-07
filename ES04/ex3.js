const table = document.querySelector('table');

// c. When clicking the submit button you must check if the game year is greater than 1950 and less than or equal to the current year. If everything is validated, the message “Validation OK” should appear. Otherwise, the message “Error” should appear.
// i. If validation is ok, a new row must be automatically added to the lower table. ii. Regardless of whether validation was successful, the form must not be “submitted” so it must prevent the default action of the submit button.

const submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const year = document.querySelector('#year').value;
    const genre = document.querySelector('select[name="genre"]').value;
    const cover = document.querySelector('#cover').value;

    const currentYear = new Date().getFullYear();
    if (year > 1950 && year <= currentYear) {
        alert('Validation OK');
        const row = document.createElement('tr');
        const cellName = document.createElement('td');
        cellName.textContent = year;
        row.appendChild(cellName);
        const cellYear = document.createElement('td');
        cellYear.textContent = name;
        row.appendChild(cellYear);
        const cellGenre = document.createElement('td');
        cellGenre.textContent = genre;
        row.appendChild(cellGenre);
        const cellCover = document.createElement('td');
        const img = document.createElement('img');
        img.src = cover;
        img.width = 100;
        cellCover.appendChild(img);
        row.appendChild(cellCover);

        // e. The Options column must be filled, per line, with a button with the value “X”. When pressed, the game must be removed!
        const cellOptions = document.createElement('td');
        const button = document.createElement('button');
        button.textContent = 'X';
        button.addEventListener('click', () => {
            row.remove();
        });
        cellOptions.appendChild(button);
        row.appendChild(cellOptions);

        table.appendChild(row);
    } else {
        alert('Error');
    }

});

// d. Clicking on the reset button must reset all default values.
const resetButton = document.querySelector('button[type="reset"]');
resetButton.addEventListener('click', () => {
    document.querySelector('#name').value = '';
    document.querySelector('#year').value = '';
    document.querySelector('select[name="genre"]').value = '';
    document.querySelector('#cover').value = '';
});

