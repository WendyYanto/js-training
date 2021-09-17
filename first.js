function addTask(task) {
  // Code here
}

function deleteTask(task) {
  // Code here
}

function editTask(task, newTask) {
  // Code here
}

function showTasksByLatest() {
  // Code here
}

function main() {
  showTasksByLatest()
  // EXPECTED: "No Task!"
  addTask('task1')
  addTask('task2')
  addTask('task3')
  addTask('task4')
  deleteTask('task3')
  editTask('task1', 'newtask1')
  showTasksByLatest()
  // EXPECTED: "task4, task2, newtask1"
  deleteTask('task1')
  showTasksByLatest()
  // EXPECTED: "task4, task2, newtask1"
  editTask('newtask1', 'task1')
  showTasksByLatest()
  // EXPECTED: "task4, task2, task1"
  addTask('task1')
  addTask('task2')
  addTask('task3')
  addTask('task4')
  deleteTask('task1')
  deleteTask('task1')
  showTasksByLatest()
  // EXPECTED: "task4, task3, task2, task4, task2"
}