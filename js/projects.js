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
  "Shot logging tool for film making. Uses Local Storage to store logs, and can import/export logs as JSON data. Mobile and Desktop.",
  true,
  true,
  false
);

newProj(
  "Animated Map",
  "#",
  "test.jpeg",
  "SVG Illustration. CSS and JS Animation.",
  "Animated map for UsedPhotoPro, showing route from old location to new.",
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
