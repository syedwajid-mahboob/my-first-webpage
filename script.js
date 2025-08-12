// Button hover color cycling
const buttons = document.querySelectorAll('.role-btn');
const hoverColors = ['#0077b6', '#0096c7', '#00b4d8'];

buttons.forEach((btn, index) => {
  btn.addEventListener('mouseenter', () => {
    btn.style.backgroundColor = hoverColors[index % hoverColors.length];
    btn.style.color = '#fff';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.backgroundColor = '#90e0ef';
    btn.style.color = '#03045e';
  });
});

// Toggle content display on heading click
const headings = document.querySelectorAll('.toggle-heading');

headings.forEach((heading) => {
  heading.addEventListener('click', () => {
    const targetId = heading.getAttribute('data-target');
    const content = document.getElementById(targetId);
    if (content.hasAttribute('hidden')) {
      content.removeAttribute('hidden');
    } else {
      content.setAttribute('hidden', '');
    }
  });
});
