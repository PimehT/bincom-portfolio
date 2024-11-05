document.querySelectorAll('#mobile-nav li').forEach(function(li) {
  li.addEventListener('click', function() {
    const link = li.querySelector('a');
    if (link) {
      link.click();
    }
  });
});

function xMenu(x) {
  x.classList.toggle('menu-open');
  const hiddenMenu = document.getElementById('mobile-nav');
  hiddenMenu.classList.toggle('open');
  hiddenMenu.classList.toggle('hidden');
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  location.hash = sectionId;
  section.scrollIntoView({ behavior: 'smooth' });
};
