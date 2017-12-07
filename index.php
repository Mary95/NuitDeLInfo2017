<!DOCTYPE html>

<html>

	<head>
		<title> Accueil </title>
	</head>
	<body>
		<div id="menu">
			<a href="#?id=01"> revoir les explications </a>
			<a href="#?id=02"> acceder au jeu </a>
			<a href="#?id=03"> à propos du projet </a>
		</div>
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
			$pageAccueil = 
			$pageExplication = 
			$pageJeux = '<div id="question">Affichage des questions  </div> <div id="jeux"> affichage du jeux</div>';
			$pageAbout = '<div> à propos du projet</div>';
		
		?>
	</body>

</html>