window.onload = function() {
    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');
    if (email) {
        document.getElementById('welcomeMessage').textContent = `Welcome, ${name}`;
        loadTasks();
    } else {
        window.location.href = 'index.html';
    }

    document.getElementById('logoutButton').addEventListener('click', function() {
        localStorage.removeItem('email');
        window.location.href = 'index.html';
    });

    document.getElementById('addTaskButton').addEventListener('click', function() {
        document.getElementById('taskModal').style.display = 'block';
    });

    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('taskModal').style.display = 'none';
    });

    document.getElementById('taskForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('taskName').value;
        const description = document.getElementById('taskDescription').value;
        const priority = document.getElementById('taskPriority').value;
        const type = document.getElementById('taskType').value;
        const color = document.getElementById('taskColor').value;
        const email = localStorage.getItem('email');

        fetch('http://localhost:3002/addTask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, description, priority, type, color, email })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                document.getElementById('taskModal').style.display = 'none';
                loadTasks(); // Reload tasks after adding
            } else {
                alert('Failed to add task');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
};

function loadTasks() {
    const email = localStorage.getItem('email');
    fetch('http://localhost:3002/tasks?email=' + encodeURIComponent(email))
        .then(res => res.json())
        .then(data => {
            const taskBoard = document.getElementById('taskBoard');
            taskBoard.innerHTML = ''; // Clear previous tasks
            data.tasks.forEach(task => {
                const taskElement = document.createElement('div');
                taskElement.style.backgroundColor = task.color;
                taskElement.className = 'task';
                taskElement.innerHTML = `
                    <h4>${task.name}</h4>
                    <p>${task.description}</p>
                    <p>Priority: ${task.priority}</p>
                    <p>Type: ${task.type}</p>
                `;
                taskBoard.appendChild(taskElement);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
