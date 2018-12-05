var backButton = document.getElementById('back-button');
var loginPrompt = document.getElementById('login-prompt');
var appTitle = document.getElementById('app-title');

var isLoggedIn = JSON.parse(localStorage.getItem('loginName'));

appTitle.addEventListener('click', function() {
    location.href = 'index.html';
});

backButton.addEventListener('click', function() {
    window.history.back();
})