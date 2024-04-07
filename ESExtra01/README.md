# To-Do List

## Features:

- Task Creation:
    - Users can enter a task name in an input field.
    - Beside the name, a separate input allows users to assign a point value to the task (integer only).
    - A "Create Task" button submits the task and assigned points.

- Task List:
    - The app displays three vertically stacked sections:
    - To-Do: Lists tasks yet to be started.
    - Doing: Lists tasks currently being worked on.
    - Done: Lists completed tasks.

- Drag-and-Drop Functionality:
    - Users can drag and drop tasks between the different columns to indicate their progress: To-Do -> Doing -> Done.

- Points System:
    - Points assigned to each task are displayed next to the task name within its respective column.
    - Upon dragging a task to the "Done" column, the assigned points are credited to the user's total score.
 
- Total Points:
    - The app displays the user's current total score prominently in the top right corner.
    - This score is updated dynamically as tasks are completed (moved to "Done").
    - If a task is moved back from "Done" then the points should be de-ducted.

- Visual Feedback:
    - Tasks in the "Done" column could be displayed with a different style (e.g., strikethrough text, different background color) to visually indicate completion.
    - A subtle animation or sound effect could be implemented when a task is successfully moved to "Done" for user satisfaction.

- Data persist:
    - Local storage can be used to persist the task list and user score between sessions.
