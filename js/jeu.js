//crée une instance de Game
var game = new Game();

function gameLaunch(){
	
game.init();
game.start();
}
var imageRepository = new function() {
	// on "crée" les images
	this.auto = new Image();
	this.autoDroite = new Image();
	this.autoGauche = new Image();


	// on lance init() quand toutes les images sont chargées
	/*var numImages = 13;
	var numLoaded = 0;
	function imageLoaded() {
		numLoaded++;
		if (numLoaded === numImages) {
			window.init();
		}
	}
	
	this.boss.onload = function() {
		imageLoaded();
	}*/
	
	// source des images
	this.autoDroite.src = "img/auto-color-droite.png";
	this.autoGauche.src = "img/auto-color-gauche.png";
	
}






//"class mere" des objets à dessiner
function Drawable() {
	this.init = function(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	
	this.speed = 0;
	this.canvasWidth = 0;
	this.canvasHeight = 0;
	this.collidableWith = "";
	this.isColliding = false;
	this.type = "";
	
	
	this.isCollidableWith = function(object) {
		return (this.collidableWith === object.type);
	};
}



function Auto() {
	this.spec = 1;//1=red || 2=green || 3=gold
	this.alive = true;
	this.speed = 4;
	this.fireRate = 10;//vitesse de tir
	var counter = 0;//
	this.collidableWith = "enemyBullet";
	this.type = "ship";
	this.health = 5// vie du vaisseau
	
	
	this.drawDroite = function() {
		this.context.drawImage(imageRepository.autoDroite, this.x, this.y);
	};
	this.drawGauche = function() {
		this.context.drawImage(imageRepository.autoGauche, this.x, this.y);
	};
	
	this.move = function() {	
		
		if (KEY_STATUS.left || KEY_STATUS.right || KEY_STATUS.down || KEY_STATUS.up) {// si on appuie sur une fleche
			
			this.context.clearRect(this.x-25, this.y-25, this.width+50, this.height+50);// on efface le vaisseau pour le redessiner dans une autres direction
			
			
			
			if (KEY_STATUS.left) {
				this.x -= this.speed//on ajoute/soustrait la vitesse a la coordoné x pour deplacer horizontalement
				if (this.x <= 0) // empeche de sortir de l'ecran
					this.x = 0;
				this.drawGauche();//redessine le vaisseau
			}
			else if (KEY_STATUS.right) {
				this.x += this.speed
				if (this.x >= this.canvasWidth - this.width)
					this.x = this.canvasWidth - this.width;
				this.drawDroite();
			} 
			else if (KEY_STATUS.up) {
				this.y -= this.speed
				if (this.y <= 0) 
					this.y = 0;
				this.drawDroite();
				
			} 
			else if (KEY_STATUS.down) {
				this.y += this.speed
				if (this.y >= this.canvasHeight - this.height){
					this.y = this.canvasHeight - this.height;
					console.log("pouet");
					$("#jeu").css({"background":"url(img/map2.png)"});
					this.y = 10;
					this.x = 450;
				}
					
				this.drawDroite();
				
			}
		}
		
	};
	
}
Auto.prototype = new Drawable();






function Game() {
	
	this.init = function() {
			
		//on recupere les 2 canvas
		this.autoCanvas = document.getElementById('jeu');
		this.autoContext = this.autoCanvas.getContext('2d');
		
		//initialise les différents objets
		Auto.prototype.context = this.autoContext;
		Auto.prototype.canvasWidth = this.autoCanvas.width;
		Auto.prototype.canvasHeight = this.autoCanvas.height;
		
		//initialise le vaisseau
		this.auto = new Auto();
		var autoStartX = 10;//this.autoCanvas.width/2 - imageRepository.auto.width/2;
		var autoStartY = 120; //this.autoCanvas.height/4*3 + imageRepository.auto.height*2;
		this.auto.init(autoStartX, autoStartY, imageRepository.auto.width, imageRepository.auto.height);
		
		return true;
	};
	
	
	
	//lance l'animation
	this.start = function() {
		this.auto.drawDroite();
		animate();
	};
	
	
	
}

function animate(){
	console.log("animate");
	window.requestAnimationFrame(animate);
	game.auto.move();
}







/**
gestion touches
*/


// The keycodes that will be mapped when a user presses a button.
// Original code by Doug McInnes
KEY_CODES = {
  32: 'space',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
}

// Creates the array to hold the KEY_CODES and sets all their values
// to true. Checking true/flase is the quickest way to check status
// of a key press and which one was pressed when determining
// when to move and which direction.
KEY_STATUS = {};
for (code in KEY_CODES) {
  KEY_STATUS[KEY_CODES[code]] = false;
}
/**
 * Sets up the document to listen to onkeydown events (fired when
 * any key on the keyboard is pressed down). When a key is pressed,
 * it sets the appropriate direction to true to let us know which
 * key it was.
 */
document.onkeydown = function(e) {
	// Firefox and opera use charCode instead of keyCode to
	// return which key was pressed.
	var keyCode = (e.keyCode) ? e.keyCode : e.charCode;
  if (KEY_CODES[keyCode]) {
		e.preventDefault();
    KEY_STATUS[KEY_CODES[keyCode]] = true;
  }
}
/**
 * Sets up the document to listen to ownkeyup events (fired when
 * any key on the keyboard is released). When a key is released,
 * it sets teh appropriate direction to false to let us know which
 * key it was.
 */
document.onkeyup = function(e) {
  var keyCode = (e.keyCode) ? e.keyCode : e.charCode;
  if (KEY_CODES[keyCode]) {
    e.preventDefault();
    KEY_STATUS[KEY_CODES[keyCode]] = false;
  }
}