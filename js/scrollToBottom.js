function scrollToBottom() {
			window.scrollTo({
				top: document.documentElement.scrollHeight,
				behavior: 'smooth'
			});
		}

document.addEventListener('contextmenu', function(event) {
  event.preventDefault(); //empêche l'affichage du menu contextuel
  alert('Merci de respecter le travail du webmaster en ne copiant pas le contenu sans autorisation');
});
		