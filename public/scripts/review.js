function render(data){ 
	var html = "<div class='commentBox'><div class='leftPanelImg'><img src='https://via.placeholder.com/100x100' /> </div><div class='rightPanel'><span>"+data.name+"</span><div class= 'date'>"+data.date+" </div><p>"+data.body+ "<br /><br /></p></div> <div class='clear'> </div></div>";
	$('#container').append(html); 
}

$(document).ready(function(){ 

	var comment = [];

	if (!localStorage.commentData){ 
		localStorage.commentData = []; 
	}else{ 
		comment = JSON.parse(localStorage.commentData); 
	}

		//{"name": " Faraz Shaikh ", "date":"11/30/2020", "body": "This is a test"}

	for(var i=0;i<comment.length; i++){
    	render(comment[i]); 
	}

	$('#addComment').click(function(){ 
		var addObj = { 
			"name": $('#name').val(), 
			"date": $('#date').val(), 
			"body": $('#bodyText').val()
		}; 
		console.log(addObj); 
		comment.push(addObj);
		localStorage.commentData = JSON.stringify(comment);
		render(addObj); 

		$('#name').val(''); 
		$('#date').val('dd/mm/yyyy'); 
		$('#bodyText').val(''); 
		window.location.href = "eggplant.html"
	}); 
}); 


