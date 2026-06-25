function showSection(id, event) {
  document.querySelectorAll('.card').forEach(card => {
    card.classList.add('hidden');
  });

  document.getElementById(id).classList.remove('hidden');

  document.querySelectorAll('.buttons button').forEach(btn => {
    btn.classList.remove('active');
  });

  event.target.classList.add('active');
}
