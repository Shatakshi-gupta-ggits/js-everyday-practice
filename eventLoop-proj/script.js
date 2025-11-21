// Event Loop Visualization Logic
class EventLoopVisualizer {
    constructor() {
        this.callStack = document.getElementById('call-stack');
        this.microtaskQueue = document.getElementById('microtask-queue');
        this.callbackQueue = document.getElementById('callback-queue');
        this.eventLoopTask = document.getElementById('event-loop-task');
        this.webApis = document.getElementById('web-apis');
        this.hoverInfo = document.getElementById('hover-info');
        
        this.isRunning = false;
        this.taskId = 1;
        this.todoTasks = new Map();
        
        this.initHoverEffects();
        this.initControls();
        this.initExampleButtons();
    }

    initHoverEffects() {
        // Add hover info to all sections
        const sections = document.querySelectorAll('[data-info]');
        sections.forEach(section => {
            section.addEventListener('mouseenter', (e) => {
                this.hoverInfo.textContent = e.currentTarget.getAttribute('data-info');
            });
            
            section.addEventListener('mouseleave', () => {
                this.hoverInfo.textContent = 'Hover over a section to see what it does...';
            });
        });
    }

    initControls() {
        document.getElementById('startExecution').addEventListener('click', () => this.startExecution());
        document.getElementById('addRandomTask').addEventListener('click', () => this.addRandomTask());
        document.getElementById('clearAll').addEventListener('click', () => this.clearAll());
        document.getElementById('demoMode').addEventListener('click', () => this.startDemoMode());
    }

    initExampleButtons() {
        document.querySelectorAll('.example-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const task = btn.getAttribute('data-task');
                const type = btn.getAttribute('data-type');
                this.addTodoTask(task, type);
            });
        });
    }

    addTodoTask(taskText, type) {
        const taskId = `task-${Date.now()}`;
        const task = {
            id: taskId,
            text: taskText,
            type: type,
            element: null
        };
        
        this.todoTasks.set(taskId, task);
        this.renderTodoItem(task);
        
        // Add to appropriate queue based on type
        switch(type) {
            case 'micro':
                this.addToMicrotaskQueue(taskText, taskId);
                break;
            case 'macro':
                this.addToMacrotaskQueue(taskText, taskId);
                break;
            case 'sync':
                this.addToCallStack(taskText, taskId);
                break;
        }
    }

    renderTodoItem(task) {
        const todoItems = document.getElementById('todoItems');
        const item = document.createElement('div');
        item.className = `todo-item ${task.type}`;
        item.innerHTML = `
            <span>${task.text} (${task.type})</span>
            <div class="todo-actions">
                <button onclick="eventLoop.removeTask('${task.id}')">❌</button>
                <button onclick="eventLoop.executeTask('${task.id}')">▶️</button>
            </div>
        `;
        todoItems.appendChild(item);
        task.element = item;
    }

    removeTask(taskId) {
        const task = this.todoTasks.get(taskId);
        if (task && task.element) {
            task.element.remove();
        }
        this.todoTasks.delete(taskId);
    }

    executeTask(taskId) {
        const task = this.todoTasks.get(taskId);
        if (task) {
            this.startExecution();
        }
    }

    addToCallStack(taskText, taskId) {
        const taskElement = this.createTaskElement(taskText, 'sync', taskId);
        this.animateToCallStack(taskElement);
    }

    addToMicrotaskQueue(taskText, taskId) {
        const taskElement = this.createTaskElement(taskText, 'micro', taskId);
        this.microtaskQueue.appendChild(taskElement);
    }

    addToMacrotaskQueue(taskText, taskId) {
        const taskElement = this.createTaskElement(taskText, 'macro', taskId);
        this.callbackQueue.appendChild(taskElement);
    }

    createTaskElement(text, type, taskId) {
        const task = document.createElement('div');
        task.className = `task ${type}-task`;
        task.setAttribute('data-task-id', taskId);
        task.innerHTML = `
            <span class="task-icon">${this.getTaskIcon(type)}</span>
            <span>${text}</span>
        `;
        return task;
    }

    getTaskIcon(type) {
        const icons = {
            'micro': '⚡',
            'macro': '🖱️',
            'sync': '📝',
            'api': '🌐'
        };
        return icons[type] || '📋';
    }

    animateToCallStack(taskElement) {
        taskElement.classList.add('moving');
        setTimeout(() => {
            this.callStack.appendChild(taskElement);
            taskElement.classList.remove('moving');
            
            // Simulate execution
            setTimeout(() => {
                if (taskElement.parentNode === this.callStack) {
                    this.callStack.removeChild(taskElement);
                    this.completeTask(taskElement.getAttribute('data-task-id'));
                }
            }, 1000);
        }, 500);
    }

    completeTask(taskId) {
        const task = this.todoTasks.get(taskId);
        if (task && task.element) {
            task.element.style.opacity = '0.5';
            task.element.style.textDecoration = 'line-through';
            
            setTimeout(() => {
                this.removeTask(taskId);
            }, 2000);
        }
    }

    startExecution() {
        if (this.isRunning) return;
        this.isRunning = true;
        
        this.runEventLoopCycle();
    }

    runEventLoopCycle() {
        if (!this.isRunning) return;

        this.eventLoopTask.classList.add('animation-active');
        this.eventLoopTask.innerHTML = `<span class="task-icon">🔄</span> <span>Processing queues...</span>`;

        setTimeout(() => {
            // Process all microtasks first
            if (this.microtaskQueue.children.length > 0) {
                this.processMicrotask();
            } 
            // Then process one macrotask
            else if (this.callbackQueue.children.length > 0) {
                this.processMacrotask();
            }
            
            setTimeout(() => {
                this.eventLoopTask.innerHTML = `<span class="task-icon">🔄</span> <span>Checking queues...</span>`;
                this.eventLoopTask.classList.remove('animation-active');
                
                // Continue if there are more tasks
                if (this.microtaskQueue.children.length > 0 || this.callbackQueue.children.length > 0) {
                    setTimeout(() => this.runEventLoopCycle(), 1500);
                } else {
                    this.isRunning = false;
                }
            }, 800);
        }, 1000);
    }

    processMicrotask() {
        const task = this.microtaskQueue.children[0];
        if (!task) return;

        task.classList.add('moving');
        setTimeout(() => {
            this.microtaskQueue.removeChild(task);
            task.classList.remove('moving');
            this.animateToCallStack(task);
        }, 500);
    }

    processMacrotask() {
        const task = this.callbackQueue.children[0];
        if (!task) return;

        task.classList.add('moving');
        setTimeout(() => {
            this.callbackQueue.removeChild(task);
            task.classList.remove('moving');
            this.animateToCallStack(task);
        }, 500);
    }

    addRandomTask() {
        const tasks = [
            { text: "Process user input", type: "micro" },
            { text: "Update shopping cart", type: "sync" },
            { text: "Fetch product data", type: "macro" },
            { text: "Calculate analytics", type: "micro" },
            { text: "Render chart after delay", type: "macro" }
        ];
        
        const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
        this.addTodoTask(randomTask.text, randomTask.type);
    }

    clearAll() {
        this.isRunning = false;
        
        // Clear all queues
        [this.microtaskQueue, this.callbackQueue].forEach(queue => {
            while (queue.children.length > 0) {
                queue.removeChild(queue.lastChild);
            }
        });
        
        // Clear call stack except main()
        while (this.callStack.children.length > 1) {
            this.callStack.removeChild(this.callStack.lastChild);
        }
        
        // Clear todos
        this.todoTasks.forEach((task, id) => this.removeTask(id));
        
        this.eventLoopTask.innerHTML = `<span class="task-icon">🔄</span> <span>Checking queues...</span>`;
        this.eventLoopTask.classList.remove('animation-active');
    }

    startDemoMode() {
        this.clearAll();
        
        // Add demo tasks
        setTimeout(() => {
            this.addTodoTask("Validate form data", "micro");
            this.addTodoTask("API timeout handler", "macro");
            this.addTodoTask("Calculate total", "sync");
            this.addTodoTask("Process payment", "micro");
            this.addTodoTask("Delayed notification", "macro");
            
            setTimeout(() => this.startExecution(), 2000);
        }, 500);
    }
}

// Initialize when DOM is loaded
let eventLoop;
document.addEventListener('DOMContentLoaded', () => {
    eventLoop = new EventLoopVisualizer();
});