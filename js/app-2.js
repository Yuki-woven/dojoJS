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
let parent_list = document.getElementById("navbar__list");
let landingContainers = document.getElementsByClassName("landing__container");
let sectionScript = document.getElementsByClassName("section_title");

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
document.addEventListener("DOMContentLoaded", function(){
  for (let i = 1; i <= 4; i++){
    let Section_list = document.createElement("li");
    let list_content = document.createElement("input")
    Section_list.appendChild(list_content)
    // list style
    list_content.style.color = "white";
    list_content.style.width = "90";
    list_content.style.backgroundColor = "black";
    list_content.style.margin = "5px", "3px", "5px";
    list_content.style.textAlign = "center";
    list_content.setAttribute("type", "button");
    list_content.setAttribute("value", "Section" + i);

    // parent style
    parent_list.style.backgroundColor = "pink";
    parent_list.style.height = "30px";
    parent_list.style.textAlign = "center";
    parent_list.appendChild(Section_list);
  }
})

// Add class 'active' to section when near top of viewport

let inputs = document.getElementsByTagName("input");
console.log(inputs);
console.log(inputs[0]);


// console.log(list_contents);
// for(i = 0; i <= list_contents.length; i++){
//   list_contents[i].addEventListener("cleck", scroll);


//     function scroll(e){
//       let sectionLeft = e.target.getBoundingClientRect().left;
//       let sectionTop  = e.target.getBoundingClientRect().top;
//       window.scrollTo({
//         left    : sectionLeft,
//         top     : sectionTop ,
//         behavior: "smooth"
//       })
//   }

// }





  // function to scroll for the seleced point

//   .addEventListener("click", function(){

//   })
// }


// Scroll to anchor ID using scrollTO event

  // landing container
for(i = 0; i < landingContainers.length; i++){
  landingContainers[i].addEventListener("mouseover", function (event) {
    event.target.style.borderColor = "red";
    setTimeout(function () {
      event.target.style.borderColor = "";
    }, 500);
  }, false);
}

  //h2
for(i = 0; i <= sectionScript.length; i++){
  sectionScript[i].addEventListener("mouseover", function(event){
    event.target.style.color = "red";
    setTimeout(function(){
      event.target.style.color = "";
    },500);
  },false);
}

for(i = 0; i <= section.length; i++){

  section[i].addEventListener("mouseover", function(event){
    
    event.currentTarget.style.backgroundColor = "red";
    setTimeout(function(){
      event.currentTarget.style.backgroundColor = "white";
    },500);
  },false);
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


