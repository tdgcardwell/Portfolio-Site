// function
function captionSearch() {

  // get input from search bar value
  let searchString = document.getElementById('searchbar').value

  // convert to lower case, so that search is not case sensitive
  searchString=searchString.toLowerCase();

  // get each of the a tags, that hold the title trribute with the captions
  let images = document.getElementsByTagName('a');

  // FOR each caption
  for (i = 0; i < images.length; i++) {

    // IF searchString to lowercase is NOT included within caption
    if (!images[i].getAttribute('title').toLowerCase().includes(searchString)) {

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
