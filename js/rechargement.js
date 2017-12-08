

//fonction affichant la page guide.php dans <div id="corpsDePage"></div>
function affichageGuide(){
	console.log("affichage du Guide");
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

//fonction affichant la page calendrier.php dans <div id="corpsDePage"></div>
function affichageCalendrier(){
	console.log("affichage du Calendrier");
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

//fonction affichant la page jeu.php dans <div id="corpsDePage"></div>
function affichageJeu(){
	console.log("affichage du Jeu");
	$.ajax({
		headers: { 
	        'Accept': 'application/json',
	        'Content-Type': 'application/json' 
	    },
		url: "php/jeu.php",
		contentType: "application/json",
		data: 'jeu',
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

//fonction affichant la page accueil.php dans <div id="corpsDePage"></div>
function affichageAccueil(){
	console.log("affichage du Accueil");
	$.ajax({
		headers: { 
	        'Accept': 'application/json',
	        'Content-Type': 'application/json' 
	    },
		url: "php/accueil.php",
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