document.addEventListener('keydown', (event) => {
  ctrl = document.getElementById('divSearch');
  if (ctrl === null) {
    return null;
  }

  if (ctrl.style.display === 'none') {
    ctrl.style.display = 'block';
  } else {
    ctrl.style.display = 'none';
  }

  return 1;
});