//Haut, haut, bas, bas, gauche, droite, gauche, droite, B, A
var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
n = 0;
$(document).keydown(function (e) {
    if (e.keyCode === k[n++]) {
        if (n === k.length) {
          $("#myModal").html('<div class="modal-content"><span class="close">&times;</span><video width="320" height="240" controls ><source src="video/got.mp4" type="video/mp4">Your browser does not support the video tag.</video></div>');
          modal.style.display = "block";
            n = 0;
            return false;
        }
    }
    else {
        n = 0;
    }
});
