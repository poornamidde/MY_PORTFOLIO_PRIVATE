/* Accessible filter and expand/collapse interactions for project cards. */
document.addEventListener('DOMContentLoaded', function () {
  var section = document.getElementById('portfolio');
  if (!section) return;
  var filters = section.querySelectorAll('.project-filter');
  var cards = section.querySelectorAll('.project-card');
  filters.forEach(function (filter) { filter.addEventListener('click', function () {
    var category = filter.getAttribute('data-filter');
    filters.forEach(function (item) { var active = item === filter; item.classList.toggle('is-active', active); item.setAttribute('aria-pressed', active ? 'true' : 'false'); });
    cards.forEach(function (card) { var cats = (card.getAttribute('data-categories') || '').split(/\s+/); card.hidden = category !== 'all' && cats.indexOf(category) === -1; });
  }); });
  section.querySelectorAll('.project-details-toggle').forEach(function (button) { button.addEventListener('click', function () {
    var details = button.nextElementSibling; var expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', expanded ? 'false' : 'true'); details.hidden = expanded; button.firstChild.textContent = expanded ? 'Explore technical details ' : 'Hide technical details ';
  }); });
});
