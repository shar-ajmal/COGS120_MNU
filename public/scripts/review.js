function render(data){
	var html = "<div class = 'commentBox'> <div class= 'leftPanelImg'><img src='https://placeholit.imgix.net/~text?w=100&h=100' /></div><div class='rightPanel'><span>"+data.name+"</span><div class='date'>"+data.date+"</div><p>"+data.commentText+"</p></div><div class='clear'></div></div>";
	$('container').append(html);
}

$(document).ready(function(){
	var comment = [
		{"name": "Faraz Shaikh", "date": "10 Apr, 2016", "body": "this is so cool 1"}
	];


		for(var i = 0; comment.length; i++){
			render(comment[i]); 
		}

	$('#addCommnet').click(function(){
		var addObj = {
			"name": $('#name').val(), 
			"date": $('#date').val(), 
			"body": $('#commentText').val()

		};
		commnet.push(addObj); 
		render(addObj); 
		$('name').val('');
		$('#date').val('dd/mm/yyyy');
		$('#commentText').val('');
	});
});