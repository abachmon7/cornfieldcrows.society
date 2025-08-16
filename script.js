// cornfieldcrows.society — minimal interactivity
document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Progressive reveal
  const chapter = document.getElementById('chapter');
  if (chapter) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('typewriter');
        }
      });
    }, { threshold: 0.15 });
    obs.observe(chapter);
  }
});
