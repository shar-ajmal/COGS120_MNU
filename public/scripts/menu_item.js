var dishTitle = document.getElementById('dish-title');
var dishContent = document.getElementById('dish-content');
var dishDescription = document.getElementById('dish-description');
var dishRating = document.getElementById('dish-rating');

console.log(JSON.parse(localStorage.getItem('objectToPass')));
var dish = JSON.parse(localStorage.getItem('objectToPass'))
dishTitle.innerHTML = dish.Name 
dishDescription.innerHTML = "Description: " + dish.Description
dishContent.innerHTML = "Contains: " + dish.Content 
dishRating.innerHTML = "Rating: " + dish.Rating