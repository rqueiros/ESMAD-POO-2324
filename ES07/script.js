const agenda = [{
    title: 'Meeting with boss',
    description: 'Meeting with boss to discuss about the project',
    date: '2024-04-15T10:00:00',
    category: 'Work'
}, {
    title: 'Dinner with friends',
    description: 'Dinner with friends at the new restaurant',
    date: '2024-04-20T19:00:00',
    category: 'Social'
}, {
    title: 'Doctor appointment',
    description: 'Doctor appointment at the hospital',
    date: '2024-04-16T08:00:00',
    category: 'Health'
}, {
    title: 'Shopping',
    description: 'Shopping for the new clothes',
    date: '2024-04-17T15:00:00',
    category: 'Personal'
}, {
    title: 'Birthday party',
    description: 'Birthday party at the beach',
    date: '2024-04-25T14:00:00',
    category: 'Others'
}];



function addAgenda(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;

    const newAgenda = {
        title,
        description,
        date,
        category
    };

    // check if the date is less than the current date
    const currentDate = new Date();
    const agendaDate = new Date(date);
    if (agendaDate < currentDate) {
        alert('Date must be greater than the current date');
        return;
    }

    // check if the agenda already exists, it must have different title, description, date, and category
    const isExist = agenda.some((agenda) => {
        return agenda.title === title && agenda.description === description && agenda.date === date && agenda.category === category;
    });
    if (isExist) {
        alert('Agenda already exists');
        return;
    }

    agenda.push(newAgenda);

    renderAgenda();
}
document.getElementById('form').addEventListener('submit', addAgenda);

function renderAgenda() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    // sort agenda by date
    agenda.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    });

    agenda.forEach((agenda, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        // if date is less than current date, add class expired
        const currentDate = new Date();
        const agendaDate = new Date(agenda.date);
        if (agendaDate < currentDate) {
            card.classList.add('expired');
        }

        // add the category class
        card.classList.add(agenda.category.toLowerCase());

        card.innerHTML = `
            <h3>${agenda.title}</h3>
            <p>${agenda.description}</p>
            <p>${agenda.date}</p>
            <p>${agenda.category}</p>
            <button onclick="deleteAgenda(${index})">X</button>
        `;
        grid.appendChild(card);
    });
}

function deleteAgenda(index) {
    agenda.splice(index, 1);
    renderAgenda();
}

renderAgenda();