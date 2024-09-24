// fixed navbar
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.style.top = "-120px"; 
    } else {
    // Scrolling up
    navbar.style.top = "0"; 
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile compatibility
});




// Mobile screen hamburger menu
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

function navToggle() {
    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle);


// Carousel slide
// Function to add the animation classes
function addSlideAnimations(activeSlide) {
    const h2 = activeSlide.querySelector('h2');
    const p = activeSlide.querySelector('p');
    const a = activeSlide.querySelector('a');
  
    // Add animations
    if (h2) h2.classList.add('slide-in-top');
    if (p) p.classList.add('slide-in-left');
    if (a) a.classList.add('slide-in-right');
}
  
  // Function to remove the animation classes
function removeSlideAnimations(slide) {
    const h2 = slide.querySelector('h2');
    const p = slide.querySelector('p');
    const a = slide.querySelector('a');
  
    // Remove animations to reset
    if (h2) h2.classList.remove('slide-in-top');
    if (p) p.classList.remove('slide-in-left');
    if (a) a.classList.remove('slide-in-right');
}
  
  // Trigger animations on page load for the first slide
window.addEventListener('load', () => {
    const activeSlide = document.querySelector('.carousel-item.active');
    addSlideAnimations(activeSlide);
});
  
  // Trigger animations when the carousel slides to a new item
document.getElementById('carouselExampleAutoplaying').addEventListener('slide.bs.carousel', function (event) {
    // Remove animations from the previous slide
    const prevSlide = event.from;
    const prevSlideElement = document.querySelectorAll('.carousel-item')[prevSlide];
    removeSlideAnimations(prevSlideElement);
  
    // Add animations to the new slide
    const activeSlide = event.relatedTarget;
    addSlideAnimations(activeSlide);
});
  
// NavBar responsiveness
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

window.onload = function() {
    animateSequence();
    animateRandom();
};

function animateSequence() {
    var a = document.getElementsByClassName('sequence');
    for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var str = '';
        var delay = 100;
        for (l = 0; l < letter.length; l++) {
            if (letter[l] != ' ') {
                str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
                delay += 150;
            } else
                str += letter[l];
        }
        $this.innerHTML = str;
    }
}

function animateRandom() {
    var a = document.getElementsByClassName('random');
    for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var delay = 70;
        var delayArray = new Array;
        var randLetter = new Array;
        for (j = 0; j < letter.length; j++) {
            while (1) {
                var random = getRandomInt(0, (letter.length - 1));
                if (delayArray.indexOf(random) == -1)
                    break;
            }
            delayArray[j] = random;
        }
        for (l = 0; l < delayArray.length; l++) {
            var str = '';
            var index = delayArray[l];
            if (letter[index] != ' ') {
                str = '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[index] + '</span>';
                randLetter[index] = str;
            } else
                randLetter[index] = letter[index];
            delay += 80;
        }
        randLetter = randLetter.join("");
        $this.innerHTML = randLetter;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
