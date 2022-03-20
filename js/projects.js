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
  "Alex and Andy",
  "etc/lemur/lemur-gallery.html",
  "balloons.jpg",
  "Character Design, Branding: SVG Illustration.",
  "Cartoon Lemur Mascots for <a href='https://robertscamera.com/' target='_blank'>Roberts Camera</a> and <a href='https://usedphotopro.com/'' target='_blank'>UsedPhotoPro</a>. <br />Image Gallery <a href='https://tdgcardwell.github.io/Project-5_Interactive-Photo-Gallery/' target='_blank'>adapted from Techdegree Project</a>, using HTML, CSS, Javascript: An interactive, searchable gallery of photos.",
  false,
  true,
  false
);

newProj(
  "NABU: Simple Shot Log",
  "https://tdgcardwell.github.io/shot-log/",
  "nabu.png",
  "Web App: Design, HTML, CSS, Javascript.",
  "Shot logging tool. Uses localStorage to store logs, and can import/export logs as JSON data.",
  true,
  true,
  false
);

newProj(
  "Employee Directory",
  "https://tdgcardwell.github.io/treehouse-API-employee-directory/",
  "employee.png",
  "Employee Directory from API. HTML, CSS, Javascript.",
  "Techdegree Project. An example employee directory/search tool - pulling data from Random User API using fetch. Graded 'Exceeds Expectations'.",
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
  "https://tdgcardwell.github.io/Web-App-Treehouse/",
  "webApp.png",
  "HTML, CSS, SVGs, Javascript. Interactive dashboard for a web application",
  "Techdegree Project. Tables, charts, graphics and other user interface components. Uses localStorage to store user settings. Graded 'Exceeds Expectations'.",
  true,
  false,
  false
);

newProj(
  "Game Show App",
  "https://tdgcardwell.github.io/Gameshow-App/",
  "gameshow.png",
  "HTML, CSS, Javascript. Word guessing game.",
  "Techdegree Project. Players guess a random phrase by entering different letters into the program. Graded 'Exceeds Expectations'.",
  true,
  false,
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
  "The Snow Queen",
  "https://www.childrensmuseum.org/exhibits/lilly-theater",
  "sq.jpg",
  "Writing: Stage Adptation. The Children's Museum of Indianapolis.",
  "A new stage adaptation of Hans Christian Anderson's the Snow Queen. Winter '22 at the World's Largest Children's Museum.",
  false,
  false,
  true
);

newProj(
  "The Red Flag",
  "https://www.audible.com/pd/B07MJ7NZP7/?source_code=AUDFPWS0223189MWU-BK-ACX0-138967&ref=acx_bty_BK_ACX0_138967_pd_us",
  "theredflagcover.png",
  "Audiobook Narration. Audible.com",
  "A gripping, fast-paced story about one of the last pirates of the Golden Age of Piracy and his fight for survival by Julia Maiola.'[Cardwell] brings each character to life effectively and adds spirit to the novel that just words could not... one of the best narrators I have heard'",
  false,
  false,
  true
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
