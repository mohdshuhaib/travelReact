// <!-- =============================CREATE A TOGGLE CHANGER=========================================== -->
let menubar = document.querySelector('#hamburger')
let navbar = document.querySelector('.navbar')
menubar.onclick = () => {
  menubar.classList.toggle('bx-x')
  navbar.classList.toggle('active')
};

// <!-- =============================CREATE CLOSE BUTTON WHEN CLICK ON NAVBAR A======================== -->
let navlinks = document.querySelectorAll('.navbar a')
navlinks.forEach(link => {
  link.onclick = () => {
    menubar.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
});

// <!-- ================CREATE EVENT LISTENER TO CLOSE NAVBAR WHEN CLICK OUTSIDE WINDOW================= -->
document.addEventListener('click', (event) => {
  if (!navbar.contains(event.target) && !menubar.contains(event.target)) {
    menubar.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
});