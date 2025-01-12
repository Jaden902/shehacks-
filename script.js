// Sample tasks for each category
const tasks = {
    techExploration: [
        "Learn the basics of HTML, CSS, and JavaScript for building websites.",
        "Explore space technologies in the tech field."
    ],
    aiSpace: [
        "Research AI's potential in space exploration.",
        "Understand how AI is used to control spacecrafts."
    ],
    womenInSTEM: [
        "Watch a documentary on the role of women in tech and STEM.",
        "Attend a virtual event for women in STEM fields."
    ],
    cyberSecurity: [
        "Take an introductory course in cybersecurity.",
        "Understand how cybersecurity impacts space missions."
    ],
    machineLearning: [
        "Research the role of machine learning in space exploration.",
        "Complete a beginner-level machine learning challenge."
    ]
};

// Show tasks based on selected category
function showTasks(category) {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";  // Clear existing tasks

    const categoryTasks = tasks[category] || [];
    
    categoryTasks.forEach((task, index) => {
        const taskItem = document.createElement("li");

        // Create a checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `task-${category}-${index}`;
        checkbox.addEventListener("change", function() {
            taskItem.style.textDecoration = checkbox.checked ? "line-through" : "none";  // Strikethrough for checked tasks
        });

        // Create the delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function() {
            deleteTask(category, index);
        });

        // Add elements to the task item
        taskItem.appendChild(checkbox);
        taskItem.appendChild(document.createTextNode(` ${task}`));
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
    });
}

// Add a new task to the list
function addTask() {
    const taskInput = document.getElementById("searchInput");
    const task = taskInput.value.trim();

    if (task) {
        // Add the task to the default category or the desired category
        const defaultCategory = 'techExploration';  // Example category
        tasks[defaultCategory].push(task);

        // Display the updated tasks
        showTasks(defaultCategory);

        // Clear the input field after adding the task
        taskInput.value = "";
    }
}

// Delete a task from the list
function deleteTask(category, index) {
    tasks[category].splice(index, 1);  // Remove task from array
    showTasks(category);  // Re-render the task list for the selected category
}
