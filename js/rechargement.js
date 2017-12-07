function affichageGuide(){
	console.log("affichageGuide appelée");
	$.ajax({
		headers: { 
	        'Accept': 'application/json',
	        'Content-Type': 'application/json' 
	    },
		url: "php/guide.php",
		contentType: "application/json",
		data: 'guide',
		dataType: "text",
		error: function(xhr, status, error){
			console.log("ERROR: xhr="+xhr+" - status="+status+" - error="+error);
		},
		success: function(data){
			//console.log("SUCCESS : "+data);
			$('#corpsDePage').html(data);
			
		},
		type: "GET"
	});
	
}


function affichageCalendrier(){
	console.log("affichageCalendrier appelée");
	$.ajax({
		headers: { 
	        'Accept': 'application/json',
	        'Content-Type': 'application/json' 
	    },
		url: "php/calendrier.php",
		contentType: "application/json",
		data: 'calendrier',
		dataType: "text",
		error: function(xhr, status, error){
			console.log("ERROR: xhr="+xhr+" - status="+status+" - error="+error);
		},
		success: function(data){
			//console.log("SUCCESS : "+data);
			$('#corpsDePage').html(data);
			
		},
		type: "GET"
	});
	
}