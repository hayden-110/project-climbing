//hero autoplay

let slideIndex = 0;     
const hero = document.querySelector('.hero-navigate');
const aTags = document.querySelectorAll('.hero-navigate a');
const heroImg = document.querySelectorAll('.hero-photo');


document.addEventListener('DOMContentLoaded', function(){

  aTags.forEach(e => e.addEventListener('mouseenter', function(i){
      const active = document.querySelector('.hover');
      active.classList.remove("hover");
      e.classList.add("hover");
      slideIndex = Array.prototype.indexOf.call(e.parentNode.children, e);
      const activeImg = document.querySelector('.active');
      activeImg.classList.remove("active");
      heroImg[slideIndex].classList.add('active');
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
    heroImg[i].classList.remove("active");
  }
  //adding hover using slideIndex
  slideIndex++;
  if (slideIndex > aTags.length) {slideIndex = 1};
  aTags[slideIndex-1].classList.add('hover');
  heroImg[slideIndex-1].classList.add('active');
}


const activities = document.querySelector('.other-activities');
const leftButton = document.querySelector('#slide-left')
const rightButton = document.querySelector('#slide-right')

function scrollActivities(dir) {
  dir === 'right' ? activities.scrollLeft += 600 : activities.scrollLeft -= 600;
  setInterval(() => {
    if(activities.scrollLeft == 0){
      leftButton.classList.add('none')
      rightButton.classList.remove('none')
    } else if (activities.scrollLeft == activities.scrollLeftMax) {
      leftButton.classList.remove('none')
      rightButton.classList.add('none')
    } else {
      leftButton.classList.remove('none')
      rightButton.classList.remove('none')
      }

      if(activities.scrollLeftMax == 0){
        leftButton.classList.add('none')
        rightButton.classList.add('none')
      }
  }, 0);
}

if(activities.scrollLeftMax == 0){
  rightButton.classList.add('none')
}

// if(activities.scrollLeft == 0){
//   leftButton.classList.add('none')
// } else {leftButton.classList == 'left'}

// prices tab menu
document.getElementById("defaultOpen").click();

function openPrice(evt, tabName) {
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
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }