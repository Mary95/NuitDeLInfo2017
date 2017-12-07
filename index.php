<!DOCTYPE html>

<html>

	<head>
		<title> Accueil </title>
		
		<link href="css/bootstrap/bootstrap.min.css" rel="stylesheet">
		<link href="css/template.css" rel="stylesheet">
		
		<script src="js/jquery.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/navbar.js"></script>
	</head>
	<body>
		<div id="menu">
			<a href="#?id=01"> revoir les explications </a>
			<a href="#?id=02"> acceder au jeu </a>
			<a href="#?id=03"> à propos du projet </a>
		</div>
		
		<nav class="navbar navbar-inverse navbar-fixed-top">
			<div class="container">
				<div class="row">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a id="navbarAccueil" class="navbar-brand" href="index.php">Accueil</a>
					</div>
				
					<div id="navbar" class="collapse navbar-collapse">
						<ul class="nav navbar-nav navbar-right">
							<li><a id="navbarJeu" href="?id=01">Jeu</a></li>
							<li><a id="navbarGuide" href="?id=02">Guide</a></li>
							<li><a id="navbarCalendrier" href="?id=03">Calendrier</a></li>
						</ul>
					</div><!--/.nav-collapse -->
				</div>
			</div><!--/container -->
		</nav>
		
		<div id="corpsDePage">
		
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
		</div>
		
	</body>

</html>