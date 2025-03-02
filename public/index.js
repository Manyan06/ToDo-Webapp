import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { logoutUser } from "./firebase.js";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "auth.html"; // Redirect to login if not logged in
    }
});

// Logout button (Optional)
document.getElementById("logout-btn")?.addEventListener("click", logoutUser);

let taskCount = 0;

        window.addTask = function () {
            let taskInput = document.getElementById("taskInput");
            let taskText = taskInput.value.trim();

            if (taskText === "") return;

            taskCount++;

            let taskList = document.getElementById("taskList");
            let li = document.createElement("li");
            li.className = "flex justify-between items-center p-2 bg-blue-300 text-black font-semibold rounded-md";

            li.innerHTML = `
                 <input type="checkbox" class="accent-green-700 w-6 h-6" onclick="toggleComplete(this)">
                <span class="flex-1 ml-2 cursor-pointer">${taskText}</span>
                <button onclick="removeTask(this)" style="color: red;" class="hover:text-red-800 text-2xl font-bold ml-3">&times;</button>`;


            taskList.appendChild(li);
            taskInput.value = "";
        }

        window.removeTask = function (button) {
            button.parentElement.remove();
            checkCompletion();
        }
        window.toggleComplete = function (checkbox) {
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