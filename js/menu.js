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
