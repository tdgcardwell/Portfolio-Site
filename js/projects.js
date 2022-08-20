let projects = [];

class Project{
  constructor(title,link,img,teaser,desc,a,b,c) {
    this.title = title;
    this.link = link;
    this.img = img;
    this.teaser = teaser;
    this.desc = desc;
    this.words = a;
    this.pics = b;
    this.more = c;
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
  "Artistic Director",
  "https://thomascardwell.files.wordpress.com/2021/01/thomas_cardwell_directing.pdf",
  "etc-color.png",
  "EclecticPond Theatre Company. 2010 - 2016",
  "Directing Resume.",
  true,
  false,
  false
);

newProj(
  "Design & Illustration",
  "https://www.instagram.com/pictures.by.cardwell/",
  "henrique.jpeg",
  "Sketches, doodles and drawings... Character Design, SVG Illustration.",
  "For now, on Instagram.",
  false,
  true,
  false
);

newProj(
  "Photo & Video",
  "https://www.instagram.com/tdgcardwell/",
  "orange-blue.jpeg",
  "Mostly Olympus OM-D E-M1 Micro Four Thirds.",
  "For now, on Instagram.",
  false,
  true,
  false
);

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
  "Web App: Design, HTML, CSS, Javascript, JQuery.",
  "Shot logging tool. Uses localStorage to store logs. Can import/export logs as JSON data, plus can export log as csv metadata to easily import into Davinci Resolve. Now with optional Dark Mode.",
  false,
  true,
  true
);

newProj(
  "Employee Directory",
  "https://tdgcardwell.github.io/treehouse-API-employee-directory/",
  "employee.png",
  "Employee Directory from API. HTML, CSS, Javascript.",
  "Techdegree Project. An example employee directory/search tool - pulling data from Random User API. Graded 'Exceeds Expectations'.",
  false,
  false,
  true
);

newProj(
  "Film Fix: Mini Site",
  "https://web.archive.org/web/20220323181258/https://usedphotopro.com/cms/page/view/page_id/234",
  "film-fix.png",
  "For UsedPhotoPro. Page for Film Fix film subscription service. HTML, CSS, Javascript.",
  "'Film Fix is a subscription service where you receive two awesome film stocks delivered to your doorstep each month!'",
  false,
  false,
  true
);

newProj(
  "WebApp Dashboard",
  "https://tdgcardwell.github.io/Web-App-Treehouse/",
  "webApp.png",
  "HTML, CSS, SVGs, Javascript. Interactive dashboard for a web application",
  "Techdegree Project. Tables, charts, graphics and other user interface components. Uses localStorage to store user settings. Graded 'Exceeds Expectations'.",
  false,
  false,
  true
);

newProj(
  "Game Show App",
  "https://tdgcardwell.github.io/Gameshow-App/",
  "gameshow.png",
  "HTML, CSS, Javascript. Word guessing game.",
  "Techdegree Project. Players guess a random phrase by entering different letters into the program. Graded 'Exceeds Expectations'.",
  false,
  false,
  true
);

newProj(
  "Animated Map",
  "etc/map/index.html",
  "map.png",
  "SVG Illustration. CSS and JS Animation.",
  "Animated map for <a href='https://usedphotopro.com/' target='_blank'>UsedPhotoPro</a>, showing route from old location to new.<br />Used for <a href='https://youtu.be/Tl4_F0bGQho?t=63' target='_blank'>anniversary video</a>.",
  false,
  true,
  true
);

newProj(
  "Analog Clock Face",
  "https://tdgcardwell.github.io/clock/analog/",
  "watch.png",
  "Clock: Design, SVG, CSS, Javascript.",
  "Analog inspired clock face, as for a smart watch, built using SVG and Javascript.",
  false,
  true,
  true
);

newProj(
  "The Snow Queen",
  "https://www.childrensmuseum.org/exhibits/lilly-theater",
  "sq.jpg",
  "Writing: Stage Adaptation. The Children's Museum of Indianapolis.",
  "A new stage adaptation of Hans Christian Anderson's the Snow Queen. Winter '22 at the World's Largest Children's Museum.",
  true,
  false,
  false
);

newProj(
  "Dracula: The Panto",
  "notyet.html",
  "dracula-poster.jpg",
  "Writing/ Directing: Stage Adaptation. EclecticPond.",
  "A family-friendly, musical-comedy adaptation of Bram Stoker's Classic tale.",
  true,
  false,
  false
);

newProj(
  "The Speckled Band",
  "speckled-band.html",
  "speckled.jpg",
  "Writing/ Directing: Stage Adaptation. EclecticPond.",
  "Stage adaptation of Arthur Conan Doyle's Sherlock Holmes story. 'The Woman in Black' meets 'The 39 Steps'.",
  true,
  false,
  false
);

newProj(
  "Titus Andronicus",
  "titus-andronicus.html",
  "titus/Aaron.jpg",
  "Directing/Adaptation: Stage. Nominated: Best Director of a Play, Broadway World Indianapolis.",
  "Shakespeare's bloodiest tragedy - however the play also contains a wealth of dark humor. After all, life is enriched by contrasts; Comedy and Tragedy. Light and Dark. Good and Evil. Peanut Butter and Jelly.",
  true,
  false,
  false
);

newProj(
  "The Wars of the Roses",
  "notyet.html",
  "roses.png",
  "Directing: EclecticPond. 8 Actors. 8 Plays. 8 Hours.",
  "About the plays, which I directed etc.",
  true,
  false,
  false
);

newProj(
  "Classical Theatre Performance",
  "https://thomascardwell.files.wordpress.com/2021/01/classical.pdf",
  "cardenio.jpg",
  "Clowns, Villains, the occasional Hero.",
  "Clasical Theatre Resume.",
  true,
  false,
  false
);

newProj(
  "Musical Theatre Performance",
  "https://thomascardwell.files.wordpress.com/2021/01/musical.pdf",
  "toungue.png",
  "Lots of singing. As little dancing as possible.",
  "Musical Theatre Resume.",
  true,
  false,
  false
);



newProj(
  "Narration & Voice Work",
  "notyet.html",
  "theredflagcover.png",
  "Audiobook Narration. Voiceovers.",
  "More info here",
  true,
  false,
  false
);

// newProj(
//   "The Red Flag",
//   "https://www.audible.com/pd/B07MJ7NZP7/?source_code=AUDFPWS0223189MWU-BK-ACX0-138967&ref=acx_bty_BK_ACX0_138967_pd_us",
//   "theredflagcover.png",
//   "Audiobook Narration. Audible.com",
//   "A gripping, fast-paced story about one of the last pirates of the Golden Age of Piracy and his fight for survival by Julia Maiola.'[Cardwell] brings each character to life effectively and adds spirit to the novel that just words could not... one of the best narrators I have heard'",
//   true,
//   false,
//   false
// );





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
