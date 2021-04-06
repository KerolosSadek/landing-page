/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
    const sctionList = Array.from(document.querySelectorAll('section[data-nav]'));
    const navList = document.querySelector('#navbar__list')

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function smoothlyScroll(){
    document.querySelectorAll(`a[href^="#"]`).forEach(el =>{
        el.addEventListener('click' , function(e){
            e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior:'smooth'
            });        
        });
    });
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function navBar() {
    const navFragment = document.createDocumentFragment();

    for(section of sctionList){
        const linkElement = document.createElement("a");
        const listElement = document.createElement("li");
        

        linkElement.textContent = section.dataset.nav;
        linkElement.setAttribute('href' , `#${section.id}`);
        linkElement.addEventListener("click" , function(){
            activationSection(linkElement);
        });


        listElement.append(linkElement);
        navFragment.append(listElement);
    }
    navList.append(navFragment);
}

// Add class 'active' to section when near top of viewport
function activationSection(event){
    const els = document.querySelectorAll(".active");
    [].forEach.call(els , function(el){
        el.classList.remove("active");

    });
    event.className = "active";
}

// Scroll to anchor ID using scrollTO event
setTimeout(() => {
    const navLinks = document.querySelectorAll('a')
    window.addEventListener("scroll" , function(){
        const fromTop = window.scrollY - 50;

        navLinks.forEach(link =>{
            const hashLink = document.querySelector(link.hash)

            if(
                hashLink.offsetTop <= fromTop + 60 &&
                hashLink.offsetTop + hashLink.offsetHeight >fromTop + 60
            ){
                link.classList.add("active");
            }else{
                link.classList.remove("active");
            }
        });
    });
}, 500);

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
navBar();
smoothlyScroll();
// Scroll to section on link click

// Set sections as active
