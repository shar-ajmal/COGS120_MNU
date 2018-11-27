var backButton = document.getElementById('back-button');
var loginPrompt = document.getElementById('login-prompt');

var isLoggedIn = JSON.parse(localStorage.getItem('loginName'));

if (isLoggedIn) {
    
}
backButton.addEventListener('click', function() {
    window.history.back();
})