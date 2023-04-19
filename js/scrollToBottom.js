window.addEventListener('load', function() {
  // empêcher la sélection de texte
  if (typeof document.onselectstart != "undefined") {
    document.onselectstart = function() { return false; };
  } else if (typeof document.style.MozUserSelect != "undefined") {
    document.style.MozUserSelect = "none";
  } else {
    document.onmousedown = function() { return false; };
  }
});

document.addEventListener('contextmenu', function(event) {
  event.preventDefault(); //empêche l'affichage du menu contextuel
  alert('Merci de respecter le travail du webmaster en ne copiant pas le contenu sans autorisation');
});

function scrollToBottom() {
			window.scrollTo({
				top: document.documentElement.scrollHeight,
				behavior: 'smooth'
			});
		}

		