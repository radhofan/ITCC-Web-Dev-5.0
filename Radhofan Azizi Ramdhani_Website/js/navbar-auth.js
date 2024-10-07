function loadNavbar() {
    fetch('./navbar.html') 
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            updateNavbar(); 
            attachLogoutListener(); 
            attachProfileDropdownListener();
        })
        .catch(error => console.error('Error loading navbar:', error));
}

function updateNavbar() {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    const authButtons = document.querySelector('.navbar-auth-buttons');
    const profile = document.querySelector('.navbar-profile');

    if (loggedIn) {
        if (authButtons) authButtons.style.display = 'none';
        if (profile) profile.style.display = 'block';
    } else {
        if (authButtons) authButtons.style.display = 'block';
        if (profile) profile.style.display = 'none';
    }
}

function handleLogin() {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = './homepage.html'; 
}

function handleSignUp() {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = './homepage.html'; 
}

function handleLogout() {
    localStorage.removeItem('loggedIn');
    loadNavbar(); 
    window.location.href = './login.html'; 
    console.log("Logged in:", localStorage.getItem('loggedIn')); 
}


function handleLoginFormSubmission(event) {
    event.preventDefault();
    handleLogin();
}


function handleSignUpFormSubmission(event) {
    event.preventDefault();
    handleSignUp();
}


function attachLogoutListener() {
    const logoutButton = document.getElementById('navbar-logout');
    if (logoutButton) {
        console.log("Logout button found and event listener attached");
        logoutButton.addEventListener('click', handleLogout);
    } else {
        console.error("Logout button not found");
    }
}


document.addEventListener('DOMContentLoaded', function () {
    loadNavbar();


    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLoginFormSubmission);
    }


    const signUpForm = document.getElementById('signup-form');
    if (signUpForm) {
        signUpForm.addEventListener('submit', handleSignUpFormSubmission);
    }


    attachLogoutListener();
});


function attachProfileDropdownListener() {
    const profileIcon = document.getElementById('profile-icon');
    const dropdown = document.getElementById('profile-dropdown');

    if (profileIcon && dropdown) {
        profileIcon.addEventListener('click', function(event) {
            event.preventDefault();

            if (dropdown.style.display === "none" || dropdown.style.display === "") {
                dropdown.style.display = "block";
            } else {
                dropdown.style.display = "none";
            }
        });


        window.addEventListener('click', function(event) {
            if (!event.target.closest('.navbar-profile')) {
                if (dropdown.style.display === "block") {
                    dropdown.style.display = "none";
                }
            }
        });
    } else {
        console.error("Profile icon or dropdown not found");
    }
}