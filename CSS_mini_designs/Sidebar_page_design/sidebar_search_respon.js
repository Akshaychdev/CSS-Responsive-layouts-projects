const gridCont = document.querySelector('.grid-container');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main-content');

// toggle btn
const toggleBtn = document.querySelector('.toggleBtn');

toggleBtn.addEventListener('click', () => {
  console.log('toggle btn clicked');
  sidebar.classList.toggle('show');
  main.classList.toggle('stretch');
})
