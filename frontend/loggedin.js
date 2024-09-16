window.onload = function() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('welcomeMessage').textContent = `Welcome, ${username}`;
    } else {
        // Redirect to login page if user not found in localStorage
        window.location.href = 'index.html';
    }

    document.getElementById('logoutButton').addEventListener('click', function() {
        localStorage.removeItem('username');
        window.location.href = 'index.html'; // Redirect to login page
    });
};
