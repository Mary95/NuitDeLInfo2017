<!DOCTYPE html>

<html>

	<head>
		<title> Accueil </title>

		<link href="css/bootstrap/bootstrap.min.css" rel="stylesheet">
		<link href="css/template.css" rel="stylesheet">

		<script src="js/jquery.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/rechargement.js"></script>
		<script src="js/popup.js"></script>
		<script src="js/konamicode.js"></script>
	</head>
	<body onload="affichageAccueil()">

 <!-- Trigger/Open The Modal -->
<button id="myBtn">Open Modal</button>

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>

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
						<a id="navbarAccueil" class="navbar-brand" href="#accueil" onclick="affichageAccueil()">Accueil</a>
					</div>

					<div id="navbar" class="collapse navbar-collapse">
						<ul class="nav navbar-nav navbar-right">
							<li><a id="navbarJeu" href="#jeu" onclick="affichageJeu()">Jeu</a></li>
							<li><a id="navbarGuide" href="#guide" onclick="affichageGuide()">Guide</a></li>
							<li><a id="navbarCalendrier" href="#calendrier" onclick="affichageCalendrier()">Calendrier</a></li>
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
				$pageGuide =
				$pageJeux = '<div id="question">Affichage des questions  </div> <div id="jeux"> affichage du jeux</div>';
				$pageAbout = '<div> à propos du projet</div>';

				if($page == 1)
					echo $pageJeux;
				if($page == 2)
					echo $pageGuide;

			?>
		</div>


	</body>

</html>
