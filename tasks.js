let tasks = [];


function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();


  if (task) {
    tasks.push({ text: task, completed: false });
    taskInput.value = '';
    renderTasks();
    updateProgress();
  }
}


function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
  updateProgress();
}


function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
  updateProgress();
}


function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';


  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.text;
    li.className = task.completed ? 'completed' : '';
    li.onclick = () => toggleTask(index);


    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      deleteTask(index);
    };


    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}


function updateProgress() {
  const completedTasks = tasks.filter(task => task.completed).length;
  const progress = tasks.length ? (completedTasks / tasks.length) * 100 : 0;


  localStorage.setItem('progress', progress);
}


