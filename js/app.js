// =========== Nav Menu ===============
let navMenu = $('nav i');
let navList = $('nav ul');

function toggleNav() {
  navList.toggle("slow");
}

navMenu.click(toggleNav);

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

  // when a slider changes

  developer.change(function() {
    if ($(this).is(":checked")) {
      filters.dev = true;
    } else {
      filters.dev = false;
    }

    // regenerate

  });

  designer.change(function() {
    if ($(this).is(":checked")) {
      filters.design = true;
    } else {
      filters.design = false;
    }

    // regenerate

  });

  storyteller.change(function() {
    if ($(this).is(":checked")) {
      filters.story = true;
    } else {
      filters.story = false;
    }

    // regenerate

  });




  // filter the array
  let filteredProjects = [];

  // generate Cards

  // generateCards(filteredProjects);




//
// ===================
//  CARDS generating
// ===================

// where are we putting them?
let cards = document.querySelector('.cards');

// and keep track
let projectcount = 0;

// just for now
generateCards(projects);


function generateCards(data) {
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
            <a class="btn" href="#">More...</a>
          </div>
        </div>
        <div class="cardBack">
          <p class="center">${project.desc}</p>
          <a class="btn" href="${project.link}" target="_blank">View Live</a>
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
