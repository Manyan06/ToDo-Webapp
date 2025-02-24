let taskCount = 0;

        function addTask() {
            let taskInput = document.getElementById("taskInput");
            let taskText = taskInput.value.trim();

            if (taskText === "") return;

            taskCount++;

            let taskList = document.getElementById("taskList");
            let li = document.createElement("li");
            li.className = "flex justify-between items-center p-2 bg-blue-300 text-black font-semibold rounded-md";

            li.innerHTML = `
                 <input type="checkbox" class="task-checkbox" onclick="toggleComplete(this)">
                <span class="flex-1 ml-2 cursor-pointer">${taskText}</span>
                <button onclick="removeTask(this)" style="color" class="hover:text-red-800 ml-3">✖</button>
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