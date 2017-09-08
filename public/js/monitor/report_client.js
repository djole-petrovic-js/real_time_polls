( function(){

	'use strict';

	var pollID = $('#poll').attr('data-id');
    
  //kill script if poll is not found...  
  if ( !pollID ) return;

	$('#btnShowForm').on('click',function(){
		$('#reportForm').slideToggle();
	});

	$('#btnReport').on('click',function(e){
		e.preventDefault();
		
		var reason = $('#reportTextArea').val();

		if ( reason.length < 10 ) {
			return alert('Please enter more than 10 characters...');
		}

		$.ajax({
			method:'POST',
			url:'/api/public/report',
			data:{
				pollID:pollID,
				reason:reason
			}
		}).done(function(response){
			console.log(response);
		}).catch(function(err){
			console.log(err);
		});
	});

}());