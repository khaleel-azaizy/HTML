document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(event.target);
    fetch('/signup', {
        method: 'POST',
        body: new URLSearchParams(formData)
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        if (data === 'User registered successfully!') {
            window.location.href = 'login2.html'; // Redirect to login page after successful signup
        }
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(event.target);
    fetch('/login', {
        method: 'POST',
        body: new URLSearchParams(formData)
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        if (data === 'Login successful!') {
            window.location.href = 'HomeScreen.html'; // Redirect to home screen after successful login
        }
    })
    .catch(error => console.error('Error:', error));
});
