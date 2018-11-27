var dishTitle = document.getElementById('dish-title');
var dishContent = document.getElementById('dish-content');
var dishDescription = document.getElementById('dish-description');
var dishRating = document.getElementById('dish-rating');
//var dishReviewContainer = document.getElementById('review-container');

var dish = JSON.parse(localStorage.getItem('itemObject'));
var itemComments = JSON.parse(localStorage.getItem(dish.Name + "Comments")); 

dishTitle.innerHTML = dish.Name;
dishDescription.innerHTML = "Description: " + dish.Description;
dishContent.innerHTML = "Contains: " + dish.Content;
dishRating.innerHTML = "Rating: " + dish.Rating;

function render(data){ 
	var html = "<div class='commentBox'><div class='leftPanelImg'><img src='https://via.placeholder.com/100x100' /> </div><div class='rightPanel'><span>"+data.name+"</span><div class= 'date'>"+data.date+" </div><p>"+data.body+ "<br /><br /></p></div> <div class='clear'> </div></div>";
	$('#review-container').append(html); 
}

for(var i=0;i<itemComments.length; i++){
    console.log(itemComments[i]);
    render(itemComments[i]); 
}








