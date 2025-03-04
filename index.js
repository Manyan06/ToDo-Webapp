document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") return;

  let taskList = document.getElementById("taskList");
  let li = document.createElement("li");
  li.className =
    "flex justify-between items-center p-2 bg-blue-300 text-black font-semibold rounded-md";

  li.innerHTML = `
          <input type="checkbox" class="accent-green-700 w-6 h-6" onclick="toggleComplete(this)">
          <span class="flex-1 ml-2 cursor-pointer">${taskText}</span>
          <button onclick="removeTask(this)" style="color: red;" class="hover:text-red-800 text-2xl font-bold ml-3">&times;</button>
      `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function removeTask(button) {
  button.parentElement.remove();
  checkCompletion();
}

function toggleComplete(checkbox) {
  let task = checkbox.nextElementSibling;
  task.classList.toggle("completed");
  checkCompletion();
}

function checkCompletion() {
  let tasks = document.querySelectorAll("#taskList li");
  let completedTasks = document.querySelectorAll("#taskList .completed");
  if (tasks.length > 0 && tasks.length === completedTasks.length) {
    confetti();
  }
}