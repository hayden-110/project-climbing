//hero autoplay

let slideIndex = 0;
let autoPlay = true;
const hero = document.querySelector('.hero-navigate');
const aTags = document.querySelectorAll('.hero-navigate a');


function heroAuto() {
  // if (e = false){ return; } else if(e == '') {
  for (let i =0; i < aTags.length; i++){
    aTags[i].classList.remove('hover');
    // hero.addEventListener("mouseover", exit;)
    // console.log('for-loop', aTags[i])
  }
  slideIndex++;
  if (slideIndex > aTags.length) {slideIndex = 1}
  aTags[slideIndex-1].classList.add('hover');
  setTimeout(heroAuto(), 1800);
}

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// } 

// prices tab menu
document.getElementById("defaultOpen").click();

function openCity(evt, cityName) {
    // Declare all variables
    var i, pricingBlock, tablinks;
  
    // Get all elements with class="pricing-block" and hide them
    pricingBlock = document.getElementsByClassName("pricing-block");
    for (i = 0; i < pricingBlock.length; i++) {
      pricingBlock[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }