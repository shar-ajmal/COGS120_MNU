var restaurantTitle = document.getElementById('restaurant-title');
var restaurantName = document.getElementById('restaurant-name');
var restaurantAddress = document.getElementById('restaurant-address');
var restaurantPrice = document.getElementById('restaurant-price');

console.log(JSON.parse(localStorage.getItem('objectToPass')));
var restaurant = JSON.parse(localStorage.getItem('objectToPass'))
restaurantTitle.innerHTML += " " + restaurant.Name 
restaurantName.innerHTML += " " + restaurant.Name
restaurantAddress.innerHTML += " " + restaurant.Address 
restaurantPrice.innerHTML += " " + restaurant.Price 