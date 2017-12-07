
/*fonction pour remplir le select avec les diplomes de la BD*/
$(function remplirSelect(){
	/*tableau simulant le retour d'une requete sur le nom de tout les diplome ex: "select nom from DB.diplomes" */
	var reponseDB = ["Master GL","Master ISL","Licence info","Licence math"];
	
	for(i=0; i<reponseDB.length; i++){
		var node ="<option>"+reponseDB[i]+"</option>";
		$("#selectDiplomes").append(node);
	}
	
	return 1;
});


/*Ajoute le diplome selectionné dans le <select> dans une liste*/
function selectDiplome(value){
	var diplome = value;
	console.log("diplome selected:"+value);
	
	/*on remet le select vide*/
	$("#selectDiplomes").val("");
	
	if($("#listeDiplomes>ul>li").html() == null){
		console.log("creation premier element de la liste");
		var li = "<li class=\"diplome\"><button type=\"button\" class=\"close closedCross\" onclick=\"supprimerDiplome(this)\"><span aria-hidden=\"true\">&times;</span></button>"+diplome+"</li>";
		$("#listeDiplomes>ul").append(li);
		return 1;
	}
	
	/*verificatino de la presence (ou non) du diplome dans la liste*/
	if(checkListeDiplomes(diplome)){
		console.log("ajout de : "+diplome);
		var li = "<li class=\"diplome\"><button type=\"button\" class=\"close closedCross\" onclick=\"supprimerDiplome(this)\"><span aria-hidden=\"true\">&times;</span></button>"+diplome+"</li>";
		$("#listeDiplomes>ul:last-child").append(li);
		return 1;
	}
	
	return -1;
}


/*vérifie si le diplome n'est pas deja present dans la liste*/
function checkListeDiplomes(diplome){
	var listeDiplomes = [];
	
	/*on recupere tout les elements de la liste de diplome dans "listeDiplomes" */
	$( "#listeDiplomes>ul>li" ).each(function( index ) {
		listeDiplomes[index] = $( this ).text();
		//console.log( index + ": " + $( this ).text() );
	});
	console.log("liste diplomes:"+listeDiplomes);
	
	/*renvoie false si le diplome est deja dans la liste*/	
	for(i=0; i<listeDiplomes.length; i++){
		/* "×" correspond au caractere "&times;" present dans le html */
		var test = "×"+diplome;
		if(listeDiplomes[i] == test)
			return false;
	}
	
	return true;
}


/*supprime le node "li" parent du bouton*/
function supprimerDiplome(node){
	$(node).parent().remove();
	return 1;
}