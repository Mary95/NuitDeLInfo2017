
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
	var prenomF = $("#prenom").val();
	var posteF = $("#poste").val();
	var mailF = $("#mail").val();
	var descriptionF = $("#description").val();
	var diplomesF = $("#diplomes").val();
	var promotionF = $("#promotion").val();
	var competencesF = $("#competences").val();
	var experiencesF = $("#experiences").val();
	var passF = $("#password").val();
	var erreur = false;
	
	/*on remet les bordures par defaut avant les test pour ne pas avoir de "faux positif" */
	resetBordures();
	
	/*si un champ n'est pas remplie on fait une bordure rouge et on met erreur a true*/
	if(nomF.length <= 0){
		$("#nom").css({"border": "1px solid red"});
		erreur = true
	}
	if(prenomF.length <= 0){
		$("#prenom").css({"border": "1px solid red"});
		erreur = true
	}
	if(posteF.length <= 0){
		$("#poste").css({"border": "1px solid red"});
		erreur = true
	}
	if(mailF.length <= 0){
		$("#mail").css({"border": "1px solid red"});
		erreur = true
	}
	if(descriptionF.length <= 0){
		$("#description").css({"border": "1px solid red"});
		erreur = true
	}
	if(diplomesF == null){
		$("#diplomes").css({"border": "1px solid red"});
		erreur = true
	}
	if(promotionF.length <= 0){
		$("#promotion").css({"border": "1px solid red"});
		erreur = true
	}
	if(competencesF.length <= 0){
		$("#competences").css({"border": "1px solid red"});
		erreur = true
	}
	if(experiencesF.length <= 0){
		$("#experiences").css({"border": "1px solid red"});
		erreur = true
	}
	if(passF.length <= 0){
		$("#password").css({"border": "1px solid red"});
		erreur = true
	}
	
	
	/*si erreur, on affiche le message et on defile en haut de la page*/
	if(erreur){
		$('#erreur').show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		return -1;
	}
	
	/*objet regroupant toutes les infos*/
	var personne = {id:mailF,pass:passF,profil:"user",nom:nomF,prenom:prenomF,poste:posteF,mail:mailF,description:descriptionF,diplomes:diplomesF,promotion:promotionF,competences:competencesF,experience:experiencesF};
	console.log(personne);
	
	envoieRequete(personne);
	
	
}


function envoieRequete(personne){
	//TODO requete serveur pour ajouter la personne a la BD
}


function resetBordures(){
	$("#nom").css({"border": "1px solid #ccc"});
	$("#prenom").css({"border": "1px solid #ccc"});
	$("#poste").css({"border": "1px solid #ccc"});
	$("#mail").css({"border": "1px solid #ccc"});
	$("#description").css({"border": "1px solid #ccc"});
	$("#diplomes").css({"border": "1px solid #ccc"});
	$("#promotion").css({"border": "1px solid #ccc"});
	$("#competences").css({"border": "1px solid #ccc"});
	$("#experiences").css({"border": "1px solid #ccc"});
	$("#password").css({"border": "1px solid #ccc"});
}


function fermerErreur(){
	$('#erreur').hide();
}