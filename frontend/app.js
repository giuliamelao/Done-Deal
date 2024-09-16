// Function to show the modal
function showModal(message) {
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modalMessage");
    const closeModal = document.getElementsByClassName("close")[0];

    modalMessage.textContent = message;
    modal.style.display = "block";

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    fetch('http://localhost:3002/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => {
        console.log('Server Response Status:', res.status); // Log response status
        return res.json();
    })
    .then(data => {
        console.log('Server Response Data:', data); // Log response data
        if (data.message === 'Login successful!') {
            localStorage.setItem('email', email);
            localStorage.setItem('name', data.user.name);
            window.location.href = 'loggedin.html';
        } else {
            showModal(data.message);
        }
    })
    .catch(error => {
        console.error('Fetch Error:', error); // Log fetch error
        showModal('Login failed!'); // Display a user-friendly message
    });
});



document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    fetch('http://localhost:3002/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })
    .then(res => res.json())
    .then(data => {
        showModal(data.message);
    })
    .catch(error => {
        showModal('Registration failed!');
        console.error('Error:', error);
    });
});
