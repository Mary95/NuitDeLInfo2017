
/*redirection si ce n'est pas un admin de connecté*/
$(function checkGradeUser(){
	if(sessionStorage.profil == null){
		window.location = "index.html";
	}
	if(sessionStorage.profil == "user"){
		window.location = "index.html";
	}
});

function verifFormulaire(){
	var nomF = $("#nom").val();
	var specialiteF = $("#specialite").val();
	var erreur = false;
	
	
	/*on parcours tout les input radio qui sont coché, si aucun n'est coché gradeF sera null*/
	var gradeF;
	$( "#grade input:checked" ).each(function( index ) {
		gradeF = $( this ).val();
	});
	console.log(gradeF);
	
	/*on remet les bordures par defaut avant les test pour ne pas avoir de "faux positif" */
	resetBordures();
	
	/*si un champ n'est pas remplie on fait une bordure rouge et on met erreur a true*/
	if(nomF.length <= 0){
		$("#nom").css({"border": "1px solid red"});
		erreur = true
	}
	if(specialiteF.length <= 0){
		$("#specialite").css({"border": "1px solid red"});
		erreur = true
	}
	if(gradeF == null){
		$("#grade").css({"border": "1px solid red"});
		$("#grade").css({"border-radius": "4px"});
		erreur = true
	}
	
	/*si erreur, on affiche le message et on defile en haut de la page*/
	if(erreur){
		$('#erreur').show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		return -1;
	}
	
	/*objet regroupant toutes les infos*/
	var diplome = {id:"",nom:nomF,grade:gradeF,specialite:specialiteF};
	console.log(diplome);
	
	envoieRequete(diplome);
	
	return 1;
}


function envoieRequete(diplome){
	//TODO requete serveur pour ajouter le diplome a la BD
}


function resetBordures(){
	$("#nom").css({"border": "1px solid #ccc"});
	$("#specialite").css({"border": "1px solid #ccc"});
	$("#grade").css({"border": ""});
}


function fermerErreur(){
	$('#erreur').hide();
}