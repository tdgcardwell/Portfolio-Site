let projects = [];

class Project{
  constructor(title,link,img,teaser,desc,a,b,c) {
    this.title = title;
    this.link = link;
    this.img = img;
    this.teaser = teaser;
    this.desc = desc;
    this.dev = a;
    this.design = b;
    this.story = c;
  }

  add(){
    projects.push(this);
  }
}

function newProj(title,link,img,teaser,desc,a,b,c){
  let x = new Project(title,link,img,teaser,desc,a,b,c);
  x.add();
}

// =========== Template ====================
/*

newProj(
  "title",
  "link",
  "img",
  "teaser",
  "desc",
  true,
  true,
  false
);

*/
//  ================================



newProj(
  "NABU: Simple Shot Log",
  "https://tdgcardwell.github.io/shot-log/",
  "nabu.png",
  "Web App: Design, HTML, CSS, Javascript.",
  "Shot logging tool. Uses localStorage to store logs, and can import/export logs as JSON data. Mobile and Desktop.",
  true,
  true,
  false
);

newProj(
  "Animated Map",
  "etc/map/index.html",
  "map.png",
  "SVG Illustration. CSS and JS Animation.",
  "Animated map for <a href='https://usedphotopro.com/' target='_blank'>UsedPhotoPro</a>, showing route from old location to new.<br />Used for <a href='https://youtu.be/Tl4_F0bGQho?t=63' target='_blank'>anniversary video</a>.",
  true,
  true,
  false
);

newProj(
  "Analog Clock Face",
  "https://tdgcardwell.github.io/clock/analog/",
  "watch.png",
  "Clock: Design, SVG, CSS, Javascript.",
  "Analog inspired clock face, as for a smart watch, built using SVG and Javascript.",
  false,
  true,
  false
);

newProj(
  "Employee Directory",
  "#",
  "test.jpeg",
  "Techdegree Project. Employee Directory from API. HTML, CSS, Javascript.",
  "An example employee directory/search tool - pulling data from Random User API using fetch. Graded 'Exceeds Expectations'.",
  true,
  false,
  false
);

newProj(
  "Film Fix: Mini Site",
  "https://usedphotopro.com/film-fix",
  "film-fix.png",
  "For UsedPhotoPro. Page for Film Fix film subscription service. HTML, CSS, Javascript.",
  "'Film Fix is a subscription service where you receive two awesome film stocks delivered to your doorstep each month! At Film Fix we want to help you experience all the fun and creativity that film photography has to offer. We know there are a lot of film options to choose from. Film Fix will give you the opportunity to try a wonderful variety of films selected by the film lovers at UsedPhotoPro.''",
  true,
  false,
  false
);

newProj(
  "WebApp Dashboard",
  "#",
  "test.jpeg",
  "Techdegree Project. HTML, CSS, SVGs, Javascript. Interactive dashboard for a web application",
  "Tables, charts, graphics and other user interface components. Uses localStorage to store user settings. Graded 'Exceeds Expectations'.",
  true,
  false,
  false
);

newProj(
  "Game Show App",
  "#",
  "test.jpeg",
  "Techdegree Project. HTML, CSS, Javascript. Word guessing game.",
  "Players guess a random phrase by entering different letters into the program. Graded 'Exceeds Expectations'.",
  true,
  false,
  false
);

newProj(
  "Alex and Andy",
  "etc/lemur/lemur-gallery.html",
  "balloons.jpg",
  "Character Design, Branding: SVG Illustration.",
  "Cartoon Lemur Mascots for Roberts Camera and UsedPhotoPro. <br />Image Gallery <a href='https://tdgcardwell.github.io/Project-5_Interactive-Photo-Gallery/' target='_blank'>adapted from Techdegree Project</a>, using HTML, CSS, Javascript: An interactive, searchable gallery of photos.",
  true,
  true,
  false
);

// newProj(
//   "Interactive Photo Gallery",
//   "#",
//   "test.jpeg",
//   "Techdegree Project. HTML, CSS, Javascript.An interactive, searchable gallery of photos.",
//   "Built search function. Graded 'Exceeds Expectations'.",
//   true,
//   false,
//   false
// );
