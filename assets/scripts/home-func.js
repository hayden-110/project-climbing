//hero autoplay

let slideIndex = 0;     
const hero = document.querySelector('.hero-navigate');
const aTags = document.querySelectorAll('.hero-navigate a');

// maybe put this in an interval?

document.addEventListener('DOMContentLoaded', function(){

  aTags.forEach(e => e.addEventListener('mouseenter', function(i){
      const active = document.querySelector('.hover');
      active.classList.remove("hover");
      e.classList.add("hover");
      slideIndex = Array.prototype.indexOf.call(e.parentNode.children, e);
      // slideIndex = e.parentNode;
  }))
  setInterval(

    hero.onmouseleave = function() {
      showSlides();
    }, 1800
  )

})



function showSlides() {
  // code removing current hover
    var i;
  
  for (i = 0; i < aTags.length; i++) {
    aTags[i].classList.remove("hover");
  }
  //adding hover using slideIndex
  slideIndex++;
  if (slideIndex > aTags.length) {slideIndex = 1};
  aTags[slideIndex-1].classList.add('hover');
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