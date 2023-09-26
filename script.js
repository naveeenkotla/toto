const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("prioritySelect");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value;
    const priority = prioritySelect.value;
    
    if (taskText.trim() !== "") {
        const li = document.createElement("li");
        li.className = `${priority}`;
        
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <span class="priority">${priority}</span>
            <button class="delete-button">Delete</button>
        `;
        
        taskList.appendChild(li);
        taskInput.value = "";
        
        li.querySelector(".delete-button").addEventListener("click", deleteTask);
    }
}

function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
}

taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
