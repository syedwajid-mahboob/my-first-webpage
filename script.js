// Array of buttons with colors to cycle on hover
const buttons = document.querySelectorAll('.role-btn');
const hoverColors = ['#ee9b00', '#9b2226', '#005f73', '#94d2bd', '#0a9396'];

buttons.forEach((btn, index) => {
  btn.addEventListener('mouseenter', () => {
    // Change to a color from hoverColors based on button index
    btn.style.backgroundColor = hoverColors[index % hoverColors.length];
    btn.style.color = '#fff';
    btn.style.borderColor = hoverColors[index % hoverColors.length];
  });

  btn.addEventListener('mouseleave', () => {
    // Revert to original styles
    btn.style.backgroundColor = '#94d2bd';
    btn.style.color = '#001219';
    btn.style.borderColor = '#005f73';
  });
});
