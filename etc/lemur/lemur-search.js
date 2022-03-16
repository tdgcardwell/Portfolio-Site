// function
function captionSearch() {

  // get input from search bar value
  let searchString = document.getElementById('searchbar').value;

  // convert to lower case, so that search is not case sensitive
  searchString=searchString.toLowerCase();

  // get each of the a tags, that hold the title trribute with the captions
  let images = document.getElementsByTagName('a');



  // FOR each caption
  for (i = 0; i < images.length; i++) {

    // so that the links at the top don't mess things up.
    if (images[i].getAttribute('title').includes("header-link")){

      // display as normal
      images[i].style.display="block";

    // IF searchString to lowercase is NOT included within caption
    } else if (!images[i].getAttribute('title').toLowerCase().includes(searchString)) {

      // set to display none
      images[i].style.display="none";

    // ELSE
    }else {

      // display as normal
      images[i].style.display="block";

    //ENDIF
  // ENDFOR
// end function
    }
  }
}
