function filterProjects(cat, btn) {
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.project-row').forEach(row => {
    row.classList.toggle('hidden', cat !== 'all' && row.dataset.cat !== cat);
  });
}
