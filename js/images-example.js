// template
/*
<li>
  <a href="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg" title="A Toyota Previa covered in graffiti"><img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg" alt="A Toyota Previa covered in graffiti" loading="lazy"></a>
</li>
*/

let galleryTiles = [];

class Tile{
  constructor(title,full,thumb) {
    this.title = title;
    this.full = full;
    this.thumb = thumb;
  }

  add(){
    galleryTiles.push(this);
  }
}

function newTile(title,full,thumb){
  let x = new Tile(title,full,thumb);
  x.add();
}

// =========== Template ====================
/*

newTile(
  "title",
  "full",
  "thumb"
);

*/
//  ============ Tiles ====================

newTile(
  "A Toyota Previa covered in graffiti",
  "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg",
  "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg"
);

newTile(
  "Example from Flickr",
  "https://live.staticflickr.com/65535/52264918835_3953da972f_k.jpg",
  "https://live.staticflickr.com/65535/52264918835_3953da972f_k.jpg"
);

newTile(
  "Example from shot.cafe",
  "https://shot.cafe/images/o/synecdoche-new-york-2012-819.jpg",
  "https://shot.cafe/images/o/synecdoche-new-york-2012-819.jpg"
);

newTile(
  "Example from shot.cafe",
  "https://shot.cafe/images/o/pacific-rim-2013-199-7244.jpg",
  "https://shot.cafe/images/o/pacific-rim-2013-199-7244.jpg"
);

newTile(
  "Example from shot.cafe",
  "https://shot.cafe/images/o/rumble-fish-1983-194-6857.jpg",
  "https://shot.cafe/images/o/rumble-fish-1983-194-6857.jpg"
);

newTile(
  "Example from shot.cafe",
  "https://shot.cafe/images/o/hugo-2011-214-8161.jpg",
  "https://shot.cafe/images/o/hugo-2011-214-8161.jpg"
);

// ===================
// generating
// ===================

// where are we putting them?
let gallery = document.querySelector('.gallery');

// initial generation
generateTiles(galleryTiles);


function generateTiles(data) {

  gallery.innerHTML = "";
  data.forEach(tile => {

    gallery.innerHTML += `
    <li>
      <a href="${tile.full}" title="${tile.title}"><img src="${tile.thumb}" alt="${tile.title}" loading="lazy"></a>
    </li>
    `;
  });

  // if mostly landscape, then losing this seems better
  // gallery.innerHTML += `<!--  Adding an empty <li> here so the final photo doesn't stretch like crazy. Try removing it and see what happens!  -->
  // <li></li>`;
}
