const fs = require("fs");

// Define the path to the to-do list file (replace with your actual file path)
const filePath = "my_todo_list.txt";

// Function to add a new task to the list
function addTask(task) {
  // New task to be appended (including a newline character for better formatting)
  const newTask = `${task}\n`;

  // Append the new task to the file asynchronously
  fs.appendFile(filePath, newTask, (err, data) => {
    if (err) {
      console.error("Error adding task:", err.message);
    } else {
      console.log("Task added successfully!");
    }
  });
}

// Example usage: Add a new task "Buy groceries"
addTask("buy groceries");
