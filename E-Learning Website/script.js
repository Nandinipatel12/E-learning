// Show the login form modal
function showLoginForm() {
    document.getElementById('loginModal').style.display = 'flex';
    document.getElementById('signUpModal').style.display = 'none'; // Hide sign-up modal if open
}

// Show the sign-up form modal
function showSignUpForm() {
    document.getElementById('signUpModal').style.display = 'flex';
    document.getElementById('loginModal').style.display = 'none'; // Hide login modal if open
}

// Close modals by clicking outside of the form
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const signUpModal = document.getElementById('signUpModal');
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    } else if (event.target === signUpModal) {
        signUpModal.style.display = 'none';
    }
}
