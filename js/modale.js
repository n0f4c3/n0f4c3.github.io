  var dialog = document.getElementById('modale');
  var openBtn = document.getElementById('openBtn');
  var closeBtn = document.getElementById('closeBtn');

  openBtn.addEventListener('click', function() {
    dialog.showModal();
  });

  closeBtn.addEventListener('click', function() {
    dialog.close();
  });