var loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', function() {
    localStorage.setItem('loginName', JSON.stringify('Sarah'));
})