let tasks = [];
const pomodoroForm = document.querySelector(".js-add-task");
const pomodoroTableBody = document.querySelector(".js-task-table-body");


//được gọi khi form được gửi đi
const addTask = (e) => {
  // 1. Prevent default action (tránh tải lại trang)
  e.preventDefault();

  // Get the form element from the event target
  const form = e.target;

  // 2. Extract form field values
  const taskName = form.querySelector(".js-task-name").value;
  const pomodoroCount = form.querySelector(".js-pomodoro-count").value;

  // 3. Create a new task item by updating the global state
  tasks.push({
    taskName,
    pomodoroDone: 0,
    pomodoroCount,
    finished: false,
  });

  // 4. Reset the form
  form.reset();

  // 5. Render the global state - cập nhật giao diện người dùng.
  renderTasks(pomodoroTableBody, tasks);
};

pomodoroForm.addEventListener("submit", addTask);

const renderTasks = (tBodyNode, tasks = []) => { //nhận vào một node và tasks (mảng rỗng).
  tBodyNode.innerHTML = tasks.map((task, id) => //map: lặp qua danh sách công việc
    `<tr>
      <td class="cell-task-name">${task.taskName}</td>
      <td class="cell-pom-count">${task.pomodoroDone} / ${task.pomodoroCount} pomodori</td>
      <td class="cell-pom-controls">
      ${task.finished ? "Finished" : `
        <button class="js-task-done" data-id="${id}">Done</button>
        <button class="js-increase-pomodoro" data-id="${id}">Increase Pomodoro Count</button>`
    }
        <button class="js-delete-task" data-id="${id}">Delete Task</button>
      </td>
    </tr>`
  ).join("");
};

const finishTask = (tasks, taskId) => {
  tasks[taskId].finished = true;
};

const increasePomodoroDone = (tasks, taskId) => {
  tasks[taskId].pomodoroDone += 1;
};

const deleteTask = (tasks, taskId) => {
  tasks.splice(taskId, 1);
};

const handleTaskButtonClick = (e) => {
  const classList = e.target.className;
  const taskId = e.target.dataset.id;

  switch (true) {
    case /js-task-done/.test(classList): finishTask(tasks, taskId);
      break;

    case /js-increase-pomodoro/.test(classList): increasePomodoroDone(tasks, taskId);
      break;

    case /js-delete-task/.test(classList): deleteTask(tasks, taskId);
      break;
  }
  renderTasks(pomodoroTableBody, tasks);
}

pomodoroTableBody.addEventListener('click', handleTaskButtonClick)