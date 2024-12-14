// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    // Add task to list
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
            <button class="delete">Delete</button>
        `;

        // Mark task as done
        li.addEventListener('click', () => {
            li.classList.toggle('done');
        });

        // Delete task
        const deleteButton = li.querySelector('.delete');
        deleteButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent triggering the 'done' functionality
            taskList.removeChild(li);
        });

        // Add the task to the list
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = '';
    });

    // Allow adding task with Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });
});
