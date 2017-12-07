$(function checkProfil(){
	
	$("#navbarConnexion").show();
	$("#navbarDeconnexion").hide();
	
	if(sessionStorage.profil == "admin"){
		console.log("admin connecté");
		/*affichage des boutons pour admin*/
		$("#navbarEditerProfil").removeClass("hidden");
		$("#navbarCreerDiplome").removeClass("hidden");
		$("#navbarCreerProfil").removeClass("hidden");
		
		/*changement du bouton de connexion vers un bouton deconnexion*/
		$("#navbarConnexion").hide();
		$("#navbarDeconnexion").show();
	}
	
	if(sessionStorage.profil == "user"){
		console.log("user connecté");
		/*affichage des boutons pour users*/
		$("#navbarEditerProfil").removeClass("hidden");
		
		/*changement du bouton de connexion vers un bouton deconnexion*/
		$("#navbarConnexion").hide();
		$("#navbarDeconnexion").show();
	}
});

function deconnexion(){
	/*on retire le profil de la session*/
	sessionStorage.removeItem("profil");
	console.log("deconnexion");
}