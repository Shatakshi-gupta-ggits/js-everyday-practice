// Todo List Management
class TodoManager {
    constructor(eventLoop) {
        this.eventLoop = eventLoop;
        this.taskInput = document.getElementById('taskInput');
        this.taskType = document.getElementById('taskType');
        this.addTodoBtn = document.getElementById('addTodo');
        this.todoItems = document.getElementById('todoItems');
        
        this.initEventListeners();
    }

    initEventListeners() {
        this.addTodoBtn.addEventListener('click', () => this.addTask());
        
        this.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addTask();
            }
        });
    }

    addTask() {
        const taskText = this.taskInput.value.trim();
        const taskType = this.taskType.value;

        if (!taskText) {
            alert('Please enter a task description');
            return;
        }

        this.eventLoop.addTodoTask(taskText, taskType);
        
        // Clear input
        this.taskInput.value = '';
        this.taskInput.focus();
    }
}

// Initialize Todo Manager when Event Loop is ready
document.addEventListener('DOMContentLoaded', () => {
    new TodoManager(eventLoop);
});