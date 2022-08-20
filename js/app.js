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

// ******* check for GET data being passed in
		// get the search query
	  const params = new Proxy(new URLSearchParams(window.location.search), {
	    get: (searchParams, prop) => searchParams.get(prop),
	  });
	  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
	  // let value = params.some_key; // "some_value"

  // b for bio / y for yes
   let showBio = params.b;

   if (showBio=='y') {
     toggleModal();
   }




// =========== CTA? ===============


// =========== Featured Work ===============

// Array of projects - is variable called "projects"

// filtered by sliders

// initial state
let filters = {
  words: false,
  pics: false,
  more: true
}

// check post - building this is now, so can control these sliders in links later if needed.
let postWords = params.w;
if (postWords=='y') {
  filters.words=true;
}

let postPics = params.p;
if (postPics=='y') {
  filters.pics=true;
}

let postMore = params.m;
if (postMore=='n') {
  filters.more=false;
}

let words = $('#words');
let pics = $('#pics');
let more = $('#more');


if (filters.words) {
  words.prop("checked", true);
}

if (filters.pics) {
  pics.prop("checked", true);
}

if (filters.more) {
  more.prop("checked", true);
}

let filteredProjects = [];

// initial filter
filterTheProjects();

  // when a slider changes

  words.change(function() {
    if ($(this).is(":checked")) {
      filters.words = true;
    } else {
      filters.words = false;
    }


    filterTheProjects();

    if (!filteredProjects.length){
      let x = new Project(
        "Yet Another Hidden Thing",
        "notyet.html",
        "balloons.jpg",
        "You Again!",
        "Maybe the same Adventure?",
        false,
        false,
        true
      );
      filteredProjects.push(x);
    }

    generateCards(filteredProjects);
    cardSearch();



  });

  pics.change(function() {
    if ($(this).is(":checked")) {
      filters.pics = true;
    } else {
      filters.pics = false;
    }


    filterTheProjects();

    if (!filteredProjects.length){
      let x = new Project(
        "Another Hidden Thing",
        "notyet.html",
        "balloons.jpg",
        "Persistant!",
        "Hi!",
        false,
        false,
        true
      );
      filteredProjects.push(x);
    }

    generateCards(filteredProjects);
    cardSearch();



  });

  more.change(function() {
    if ($(this).is(":checked")) {
      filters.more = true;
    } else {
      filters.more = false;
    }


    filterTheProjects();

    if (!filteredProjects.length){
      let x = new Project(
        "Hidden Thing",
        "notyet.html",
        "balloons.jpg",
        "Hello There!",
        "Eventually, an adventure...",
        false,
        false,
        true
      );
      filteredProjects.push(x);
    }

    generateCards(filteredProjects);
    cardSearch();



  });

  // filter the array
  function filterTheProjects(){
    // reset the array
    filteredProjects = [];
    projects.forEach(project => {

      // for each project. if any of those match, push to filtered.

      if ((project.words && filters.words) || (project.pics && filters.pics) || (project.more && filters.more)) {
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
          <span class="handwriting close">X</span>
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
