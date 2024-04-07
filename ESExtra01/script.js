// Get elements from the DOM
const taskNameInput = document.getElementById('task-name');
const taskPointsInput = document.getElementById('task-points');
const createTaskButton = document.getElementById('create-task');
const toDoList = document.getElementById('to-do-list');
const doingList = document.getElementById('doing-list');
const doneList = document.getElementById('done-list');
const totalPointsDisplay = document.getElementById('total-points');

// Initialize 3 arrays for tasks
let toDoTasks = [];
let doingTasks = [];
let doneTasks = [];

// Initialize total points
let totalPoints = 0;

/**
 * Gets the next available ID for a task.
 * @returns {number} The next available ID.
 */
const getNextId = () => {
    let biggestId = 0;
    toDoTasks.forEach(task => {
        if (task.id > biggestId) {
            biggestId = task.id;
        }
    });
    doingTasks.forEach(task => {
        if (task.id > biggestId) {
            biggestId = task.id;
        }
    });
    doneTasks.forEach(task => {
        if (task.id > biggestId) {
            biggestId = task.id;
        }
    });
    return biggestId + 1;
}


/**
 * Loads data from localStorage and populates the task lists.
 */
const loadData = () => {
    totalPoints = parseInt(localStorage.getItem('totalPoints')) || 0;
    totalPointsDisplay.textContent = totalPoints;

    const localToDoTasks = JSON.parse(localStorage.getItem('toDoTasks')) || [];
    const localDoingTasks = JSON.parse(localStorage.getItem('doingTasks')) || [];
    const localDoneTasks = JSON.parse(localStorage.getItem('doneTasks')) || [];

    // Create tasks from the loaded data
    localToDoTasks.forEach(task => {
        createTask(task.name, task.points, task.id, toDoList);
    });
    localDoingTasks.forEach(task => {
        createTask(task.name, task.points, task.id, doingList);
    });
    localDoneTasks.forEach(task => {
        createTask(task.name, task.points, task.id, doneList);
    });
};


/**
 * Saves data to the local storage.
 */
const saveData = () => {
    localStorage.setItem('totalPoints', totalPoints);
    localStorage.setItem('toDoTasks', JSON.stringify(toDoTasks));
    localStorage.setItem('doingTasks', JSON.stringify(doingTasks));
    localStorage.setItem('doneTasks', JSON.stringify(doneTasks));
};


/**
 * Creates a new task element and appends it to the specified list.
 *
 * @param {string} name - The name of the task.
 * @param {number} points - The points associated with the task.
 * @param {string} id - The unique identifier of the task.
 * @param {HTMLElement} list - The list element to which the task will be appended.
 */
const createTask = (name, points, id, list) => {
    const task = document.createElement('li');
    task.textContent = `${id}. ${name} (${points})`;
    // add a custom atributte to save the points
    task.setAttribute('data-name', name);
    task.setAttribute('data-points', points);
    task.setAttribute('data-id', id);
    task.draggable = true;
    task.addEventListener('dragstart', dragStart);
    list.appendChild(task);

    // save task to the array
    if (list === toDoList) {
        toDoTasks.push({ name, points, id });
    } else if (list === doingList) {
        doingTasks.push({ name, points, id });
    } else if (list === doneList) {
        doneTasks.push({ name, points, id });
    }
};

/**
 * Removes a task with the specified ID from the task lists and the DOM.
 * @param {number} id - The ID of the task to be removed.
 */
const removeTask = (id) => {
    toDoTasks = toDoTasks.filter(task => task.id !== id);
    doingTasks = doingTasks.filter(task => task.id !== id);
    doneTasks = doneTasks.filter(task => task.id !== id);
    // remove the li element from the DOM
    const task = document.querySelector(`[data-id="${id}"]`);
    task.parentElement.removeChild(task);

    saveData();
}

/**
 * Moves a task from one list to another.
 * @param {string} id - The ID of the task to be moved.
 * @param {HTMLElement} fromList - The list from which the task is being moved.
 * @param {HTMLElement} toList - The list to which the task is being moved.
 */
const moveTask = (id, fromList, toList) => {
    const task = document.querySelector(`[data-id="${id}"]`);
    fromList.removeChild(task);
    toDoTasks = toDoTasks.filter(task => task.id !== id);
    doingTasks = doingTasks.filter(task => task.id !== id);
    doneTasks = doneTasks.filter(task => task.id !== id);

    toList.appendChild(task);
    if (toList === toDoList) {
        toDoTasks.push({ name: task.getAttribute('data-name'), points: parseInt(task.getAttribute('data-points')), id });
    } else if (toList === doingList) {
        doingTasks.push({ name: task.getAttribute('data-name'), points: parseInt(task.getAttribute('data-points')), id });
    } else if (toList === doneList) {
        doneTasks.push({ name: task.getAttribute('data-name'), points: parseInt(task.getAttribute('data-points')), id });
    }
    
    saveData();
}



/**
 * Handles the drag start event for a task element.
 * @param {Event} event - The drag start event.
 */
const dragStart = (event) => {
    const task = {
        name: event.target.getAttribute('data-name'),
        points: parseInt(event.target.getAttribute('data-points')),
        id: parseInt(event.target.getAttribute('data-id')),
        fromList: event.target.parentElement.id
    }
    event.dataTransfer.setData('text/plain', JSON.stringify(task));
};


// Add event listener to the createTaskButton
createTaskButton.addEventListener('click', () => {
    // Get the name and points from the input fields
    const name = taskNameInput.value;
    const points = parseInt(taskPointsInput.value);
    // Get the next available ID for the task
    const id = getNextId();
    // Create the task and add it to the to-do list
    createTask(name, points, id, toDoList);
    // Save the data to local storage
    saveData();
});


// Add event listeners for dragover and drop events on each list
[toDoList, doingList, doneList].forEach(list => {
    // Prevent the default behavior of the dragover event
    list.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    // Handle the drop event
    list.addEventListener('drop', (event) => {
        event.preventDefault();

        // Parse the task data from the dropped item
        const task = JSON.parse(event.dataTransfer.getData('text/plain'));
        const points = task.points;
        const id = task.id;
        const fromList = document.getElementById(task.fromList);
        const toList = list;

        // Check if the task is being moved within the same list
        if (fromList == toList) {
            return;
        }

        // Update the total points based on the list the task is moved from and to
        if (fromList === doneList) {
            // Subtract the points if the task is moved from the "done-list"
            totalPoints -= points;
        } else if (toList === doneList) {
            // Add the points if the task is moved to the "done-list"
            totalPoints += points;
        }

        // Update the total points display
        totalPointsDisplay.textContent = totalPoints;

        // Move the task to the new list
        moveTask(id, fromList, toList);
    });
});

// Load data when the page loads
window.addEventListener('load', loadData);