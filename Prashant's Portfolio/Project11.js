document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('click', () => {
      alert(`You clicked on ${skill.textContent}!`);
  });
});
