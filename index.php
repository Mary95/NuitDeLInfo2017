<!DOCTYPE html>

<html>

	<head>
		<script src="rechargement.js"> </script>
		<title> Accueil </title>
	</head>
	<body>
		<div id="menu">
			<a href="#?id=01" onclick= "refresh()"> revoir les explications </a>
			<a href="#?id=02" onclick= "refresh()"> acceder au jeu </a>
			<a href="#?id=03" onclick= "refresh()"> à propos du projet </a>
		</div>
		<div id="corps">
		<?php
			if(isset($_GET['id'])!=null)
				{
					$page = $_GET['id'];
				}
				else
				{
					$page = 0;
				}
				
			echo $page;
		//		$pageAccueil = 
			//	$pageExplication = 
				//$pageJeux = '<div id="question">Affichage des questions  </div> <div id="jeux"> affichage du jeux</div>';
				//$pageAbout = '<div> à propos du projet</div>';
			
			?>
		</div>
	</body>

</html>