//hero autoplay

let slideIndex = 0;     
const hero = document.querySelector('.hero-navigate');
const aTags = document.querySelectorAll('.hero-navigate a');

// document.onload =
// hero.addEventListener('mouseenter', 
//   console.log('mouseenter'));

window.onload = showSlides();

hero.onmouseover = function() {
  console.log('mouseenter');
  let active = document.querySelector('.active');
  active.classList.remove("hover");
};

hero.onmouseleave = function() {
  console.log('mouseleft')
    setTimeout(showSlides(), 1800);
};

function showSlides() {
  // code removing current hover
    var i;
  
  for (i = 0; i < aTags.length; i++) {
    aTags[i].classList.remove("hover");
  }
  //adding hover using slideIndex
  slideIndex++;
  if (slideIndex > aTags.length) {slideIndex = 1}
  aTags[slideIndex-1].classList.add('hover')
} 

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