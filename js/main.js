window.onload = function(){ document.querySelector(".preloader").style.display = "none"; }
window.onload = setTimeout(function(){ document.querySelector(".preloader").style.display = "none"; },3000)

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY >50) {
          document.getElementById('navbar_top').classList.add('fixed-top'); 
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
        } 
    });
  }); 
  document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY >1500) {
          document.getElementById('top-btn').classList.add('sticky'); 
        } else {
          document.getElementById('top-btn').classList.remove('sticky');
        } 
    });
  }); 