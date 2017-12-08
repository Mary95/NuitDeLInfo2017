<!DOCTYPE html>

<html>

	<head>
		<title> Accueil </title>

		<link href="css/bootstrap/bootstrap.min.css" rel="stylesheet">
		<link href="css/template.css" rel="stylesheet">

		<script src="js/jquery.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/rechargement.js"></script>


	</head>
	<body onload="affichageAccueil()">

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
		<video width="320" height="240" controls autoplay>
		 <source src="video/got.mp4" type="video/mp4">
		Your browser does not support the video tag.
		</video>

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
						<a id="navbarAccueil" class="navbar-brand" href="index.php" onclick="affichageAccueil()">Accueil</a>
					</div>

					<div id="navbar" class="collapse navbar-collapse">
						<ul class="nav navbar-nav navbar-right">
							<li><a id="navbarJeu" href="#jeu" onclick="affichageJeu()">Jeu</a></li>
							<li><a id="navbarGuide" href="#guide" onclick="affichageGuide()">Guide</a></li>
							<!--li><a id="navbarCalendrier" href="#calendrier" onclick="affichageCalendrier()">Calendrier</a></li-->
						</ul>
					</div><!--/.nav-collapse -->
				</div>
			</div><!--/container -->
		</nav>

		<div id="corpsDePage">
			<!-- Les différents pages seront chargées puis affichées dans cette div -->
		</div>

		<script src="js/popup.js"></script>
		<script src="js/konamicode.js"></script>
	</body>

</html>
