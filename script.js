document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        const taskTextNode = document.createElement('span');
        taskTextNode.textContent = taskText;
        taskItem.appendChild(taskTextNode);

        // Create complete button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete-btn');
        taskItem.appendChild(completeButton);

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        taskItem.appendChild(deleteButton);

        // Append to the list
        taskList.appendChild(taskItem);

        // Clear input
        taskInput.value = '';

        // Handle task completion
        completeButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        // Handle task deletion
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    }

    // Add task when button is clicked
    addTaskButton.addEventListener('click', addTask);

    // Add task when 'Enter' key is pressed
    taskInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
