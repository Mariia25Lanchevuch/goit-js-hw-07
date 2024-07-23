function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
button.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  const r = parseInt(randomColor.slice(1, 3), 16);
  const g = parseInt(randomColor.slice(3, 5), 16);
  const b = parseInt(randomColor.slice(5, 7), 16);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  colorSpan.textContent = randomColor;
});