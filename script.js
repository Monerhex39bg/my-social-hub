// document.addEventListener("DOMContentLoaded", () => {
//     const menuIcon = document.createElement("span");
//     menuIcon.classList.add("menu-icon");
//     menuIcon.textContent = "☰";
//     document.querySelector(".navbar").prepend(menuIcon);
  
//     const navbarUl = document.querySelector(".navbar ul");
  
//     menuIcon.addEventListener("click", () => {
//       navbarUl.classList.toggle("active");
//     });
//   });
  
// Script to toggle the mobile menu in case of small screens
const menuIcon = document.querySelector('.menu-icon');
const navbarUl = document.querySelector('.navbar ul');

menuIcon.addEventListener('click', () => {
  navbarUl.classList.toggle('active');
});