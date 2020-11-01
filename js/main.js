let dropdown = document.querySelectorAll('.dropdown');
dropdown.forEach(function (dropdown) {
  dropdown.addEventListener('click', function (event) {
    event.target.closest('.dropdown').classList.toggle('active');
  });
});