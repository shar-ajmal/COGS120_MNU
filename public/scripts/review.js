function render(data){ 
	var html = "<div class='commentBox'><div class='leftPanelImg'><img src='https://via.placeholder.com/100x100' /> </div><div class='rightPanel'><span>"+data.name+"</span><div class= 'date'>"+data.date+" </div><p>"+data.body+ "<br /><br /></p></div> <div class='clear'> </div></div>";
	$('#container').append(html); 
}

$(document).ready(function(){ 

	var itemComments = [];
	var item = JSON.parse(localStorage.getItem('itemObject'));

	
	if (!localStorage.getItem(item.Name + "Comments")){ 
		localStorage.setItem(item.Name + "Comments", JSON.stringify([]))
	}else{ 
		itemComments = JSON.parse(localStorage.getItem(item.Name + "Comments")); 
	}

	$('#addComment').click(function(){ 
		var addObj = { 
			"name": $('#name').val(), 
			"date": $('#date').val(), 
			"body": $('#bodyText').val()
		}; 
		console.log(addObj); 
		itemComments.push(addObj)

		localStorage.setItem(item.Name + "Comments", JSON.stringify(itemComments));

		$('#name').val(''); 
		$('#date').val('dd/mm/yyyy'); 
		$('#bodyText').val(''); 
		console.log(itemComments);
		console.log(item.Name)
		window.location=document.referrer;
	}); 
}); 


