// =========== Nav Menu ===============
let navMenu = $('nav i');
let navList = $('nav ul');
let navClose = $('nav .handwriting');

function toggleNav() {
  navList.toggle("slow");
  navMenu.toggle();
  navClose.toggle();
}

navMenu.click(toggleNav);
navClose.click(toggleNav);

// for about link
function navAbout(){
  toggleNav();
  toggleModal();
}

// =========== Bio Modal ===============

let bioButton = $('#bioButton');
let modal = $('.modal');
let closeModal = $('#closeModal');

function toggleModal() {
  modal.toggleClass("modalOn");
}

bioButton.click(toggleModal);
closeModal.click(toggleModal);



// =========== CTA? ===============


// =========== Featured Work ===============

// Array of projects - is variable called "projects"

// filtered by sliders

// initial state
let filters = {
  dev: true,
  design: false,
  story: false
}

let developer = $('#developer');
let designer = $('#designer');
let storyteller = $('#storyteller');


if (filters.dev) {
  developer.prop("checked", true);
}

if (filters.design) {
  designer.prop("checked", true);
}

if (filters.story) {
  storyteller.prop("checked", true);
}

let filteredProjects = [];

// initial filter
filterTheProjects();

  // when a slider changes

  developer.change(function() {
    if ($(this).is(":checked")) {
      filters.dev = true;
    } else {
      filters.dev = false;
    }


    filterTheProjects();
    generateCards(filteredProjects);
    cardSearch();



  });

  designer.change(function() {
    if ($(this).is(":checked")) {
      filters.design = true;
    } else {
      filters.design = false;
    }


    filterTheProjects();
    generateCards(filteredProjects);
    cardSearch();



  });

  storyteller.change(function() {
    if ($(this).is(":checked")) {
      filters.story = true;
    } else {
      filters.story = false;
    }


    filterTheProjects();
    generateCards(filteredProjects);
    cardSearch();



  });

  // filter the array
  function filterTheProjects(){
    // reset the array
    filteredProjects = [];
    projects.forEach(project => {

      // for each project. if any of those match, push to filtered.

      if ((project.dev && filters.dev) || (project.design && filters.design) || (project.story && filters.story)) {
        filteredProjects.push(project);
      }

    });


  }

  // generate Cards

//
// ===================
//  CARDS generating
// ===================

// where are we putting them?
let cards = document.querySelector('.cards');

// and keep track
let projectcount = 0;

// initial generation
generateCards(filteredProjects);


function generateCards(data) {

  cards.innerHTML = "";
  data.forEach(project => {

    // console.log(project)

    /*
    if (dividing count by 2 leaves a remainder - ie remainder != 0){
      add class alt to cardFront
    } else {dont add it}
    */

    // NEEDS TO BE UPDATED/CHECKED
    cards.innerHTML += `
    <div class="card">
      <div class="cardInner">
        <div class="cardFront">
          <div class="picture-box">
            <a href="${project.link}" target="_blank"><img src="img/${project.img}" alt="${project.title}"></a>
          </div>
          <div class="full">
            <h3 class="center">${project.title}</h3>
            <p class="center"><em>${project.teaser}</em></p>
            <a class="btn">More...</a>
          </div>
        </div>
        <div class="cardBack">
          <span class="handwriting">X</span>
          <p class="center">${project.desc}</p>
          <a class="btn" href="${project.link}" target="_blank">View</a>
        </div>

      <!-- /inner -->
      </div>
    <!-- /card -->
    </div>
    `;

    projectcount++;

  });
}


// filtered list then filtered by search bar.


/*
============================
Flip the cards - not on hover!
============================
*/

// click the button, show the back

$(".cards").on( "click", ".cardFront .btn", function(event) {

  $(this).parents(".cardInner").addClass("flipTheCard");

});


// click the 'X', return to the front

$(".cards").on( "click", ".cardBack .handwriting", function(event) {

  $(this).parents(".cardInner").removeClass("flipTheCard");

});
