
function connexion(){
	var id = $('#id').val();
	var pass = $('#pass').val();
	
	/*requete serveur pour verification des données rentrées.*/
	/*la requete renvoie les données de la personne si elle la trouve*/
	var data = null;
	data = requeteServeur(id,pass)
	
	if(data == null){
		$('#erreur').show();
		console.log("personne non trouvée");
	}
	else{
		/*si une personne s'identifie, on met en session son role (pour gerer la navbar) et on redirige ensuite vers index.html*/
		console.log("sessionStorage.profil : "+data.profil);
		sessionStorage.profil = data.profil;
		window.location = "index.html";
	}
	
}


/*simule la BD en renvoyant un objet contenant les informations d'une personne, ou null si les identifiants sont incorrect*/
function requeteServeur(id,pass){
	if(id.localeCompare("admin") == 0 && pass.localeCompare("admin") == 0){
		console.log("admin connexion");
		var adminBD = {id:"admin",pass:"admin",profil:"admin",nom:"mr admin",prenom:"pierre",poste:"DRH",mail:"admin@mail.com",description:"ceci est une description ",diplomes:"Master GL",promotion:"2000",competences:"voici mes competences",experience:"pleins d'éxperiences !"};
		return adminBD;
	}
	
	if(id.localeCompare("user") == 0 && pass.localeCompare("user") == 0){
		console.log("user connexion");
		var userBD = {id:"user",pass:"user",profil:"user",nom:"mr user",prenom:"marc",poste:"technicien",mail:"user@mail.com",description:"ceci est une description d'utilisateur",diplomes:"Licence info",promotion:"2008",competences:"voici mes competences d'utilisateur",experience:"pleins d'éxperiences passionantes d'utilisateur!"};
		return userBD;
	}
	
	return null;
}


function fermerErreur(){
	$('#erreur').hide();
}