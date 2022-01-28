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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/

let ul = document.getElementById("navbar__list");
const section = document.querySelectorAll("section");
let header = document.querySelector(".page__header");

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

//Get id-name of section-tab
let section_id = [];
for(let i = 0; i <= 3; i++){
    section_id.push(section[i].id);
}


// Add the function to be hidden the header
const hide_header = function(){
    if(header.style.visibility === "visible"){
        header.style.visibility = "hidden";
    }
}

document.addEventListener('scroll', () => {
    header.style.visibility = "visible";
    setTimeout(hide_header, 3000);
})

// Add the function to bo visible the header
window.addEventListener('mousemove', () => {
    header.style.visibility = "visible";
})

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

for(let i = 1; i <= 4; i++){

    let list = document.createElement('li');
    let a = document.createElement('a');
    a.innerText = "section"+i;
    a.classList.add('menu__link');
    list.style.display = 'inline-block';
    list.appendChild(a);
    ul.appendChild(list);
}

// Add class 'active' to section when near top of viewport

for(let i = 0; i < section.length; i++){

    document.addEventListener('scroll',function(){
        const getDistance = section[i].getBoundingClientRect();
        if (getDistance.top < 10 && getDistance.bottom >= 100){
            section[i].classList.add('your-active-class');
        }else{
            section[i].classList.remove('your-active-class');
        }
    })
}


// Scroll to anchor ID using scrollTO event

document.addEventListener('click', () => {

    let menu__link = document.getElementsByClassName("menu__link");
    for(let i = 0; i < 4; i++){
        menu__link[i].setAttribute('href', '#' + section_id[i]);
    }
})

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active