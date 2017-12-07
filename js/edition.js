
/*redirection si ce n'est pas un un user/admin de connecté*/
$(function checkGradeUser(){
	if(sessionStorage.profil == null){
		window.location = "index.html";
	}
});