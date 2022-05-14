function saveTasks() {
  const taskInput = document.querySelector(`#taskInput`)
  const inputs = document.querySelectorAll('input');

  const task = {
    contain: taskInput.value,
    data: inputs[0].value,
    time: inputs[1].value,
  };

  const currentTasks = localStorage.getItem('allTasks');

  let arr = [];

  if (currentTasks) {
    arr = JSON.parse(currentTasks);
  }

  arr.push(task);

  localStorage.setItem('allTasks', JSON.stringify(arr));

  taskInput.value = '';
  inputs[0].value = '';
  inputs[1].value = '';

  loadTasks();

}
  
function loadTasks(){
  let currentTasks = localStorage.getItem('allTasks');
  if (currentTasks) {
    let tasks = `<div class="tasks">`;

    const arr = JSON.parse(currentTasks);
        
    for (const task of arr) {

      tasks += `<div id="index" class="note mb-4 p-2">
        <div class="deleteTask" class="mr-4" align="right">
          <button id="hiddenRemButton">
          <svg class="hiddenDelete" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
          </button>
        </div>
        <div class="taskContain mb-1 p-1">
          <textarea class="taskTextarea" rows="5" cols="17" disabled>${task.contain}</textarea>
        </div>
        <div class="m-1">
          <p>${task.data}<br>${task.time}</p>
        </div>
      </div>  
        `;
    }

    tasks += `</div>`;

    const totalTasksDiv = document.querySelector('#totalTasksDiv');
    totalTasksDiv .innerHTML = tasks;

  }

}

function deleteTask(event) {
 
  let arr = JSON.parse(localStorage.getItem('allTasks')); 
  
  for (const i = 0; i < arr.length; i++) {
      arr = JSON.parse(arr[i]);
      if (arr.id == 3) {
        event.target.arr.splice(i, 1);
      }
  }
  
  arr = JSON.stringify(arr);
  
  localStorage.setItem("allTasks", currentTasks);

}

function onWindowLoad() {
  
  const form = document.querySelector('form');
  form.onsubmit = saveTasks;

  loadTasks();  

  const hiddenRemButton = document.querySelector("#hiddenRemButton");
  hiddenRemButton.addEventListener("click", deleteTask);

}
  
window.onload = onWindowLoad;