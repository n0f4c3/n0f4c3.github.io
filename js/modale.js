  var dialog = document.getElementById('modale');
  var openBtn = document.getElementById('openBtn');
  var closeBtn = document.getElementById('closeBtn');

  openBtn.addEventListener('click', function() {
	dialog.style.display = 'flex';
    dialog.showModal();
  });

  closeBtn.addEventListener('click', function() {
	dialog.style.display = 'none';
    dialog.close();
  });