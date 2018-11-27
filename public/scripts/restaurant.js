var restaurantTitle = document.getElementById('restaurant-title');
var restaurantName = document.getElementById('restaurant-name');
var restaurantAddress = document.getElementById('restaurant-address');
var restaurantPrice = document.getElementById('restaurant-price');
var viewMenuButton = document.getElementById('view-menu-button');

console.log(JSON.parse(localStorage.getItem('restaurantObject')));
var restaurant = JSON.parse(localStorage.getItem('restaurantObject'))

viewMenuButton.addEventListener('click', goToMenu);

function goToMenu() {
    window.location.href = 'menu.html';
}

restaurantTitle.innerHTML = restaurant.Name 
restaurantName.innerHTML += " " + restaurant.Name
restaurantAddress.innerHTML += " " + restaurant.Address 
restaurantPrice.innerHTML += " " + restaurant.Price 