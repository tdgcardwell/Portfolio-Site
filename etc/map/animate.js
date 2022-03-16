var mySVG = document.getElementById('Layer_1');

// starting point
mySVG.setAttribute("viewBox", "500 1400 768 432");

function panTilt(x,y){
  mySVG.setAttribute("viewBox", `${x} ${y} 768 432`);
}


// // mid way
// mySVG.setAttribute("viewBox", "500 30 768 432");
//
//
// // ending point
// mySVG.setAttribute("viewBox", "580 30 768 432");


// test (jumps up after 2 seconds, then across after another second.)
// setTimeout(panTilt, 2000, 500, 30);
// setTimeout(panTilt, 4000, 580, 30);


// 24fps ~= 42ms/frame


function moveUp(){

let wait=1500; //initial wait time
for (let y=1400 ; y>29 ; y-=4) { //-= value should be our speed
  setTimeout(panTilt, wait, 500, y);
  wait+=42; //framerate
}

}

moveUp();

// takes ~16.45 seconds currently


function moveAcross(){

let wait=16445; //initial wait time
for (let x=500 ; x<581 ; x+=4) { //-= value should be our speed
  setTimeout(panTilt, wait, x, 30);
  wait+=42; //framerate
}

}

moveAcross();





// viewBox = <min-x> <min-y> <width> <height>

// ~1.75s for zoom maybe so 1750ms


function zoomIn(x, y, w, h) {
  mySVG.setAttribute("viewBox", `${x} ${y} ${w} ${h}`);
}


// so now we're gonna just update the frame as needed. (make sure aspect ratio stays correct!)


// ending point pre zoom
// mySVG.setAttribute("viewBox", "580 30 768 432");


function zooming() {
  for (let x=580, y=30, w=768, h=432, f=0 ; f < 1000; f+=10, x+=3.2, y+=.12, w-=3.5, h=w*0.5625){
    let wait = 17500+f;
    setTimeout(zoomIn , wait, x, y, w, h);
  }
}

zooming();


// previous initial zoom
// setTimeout(zoomIn , 18000, 777, 36, 576, 324);



// previous final zoom
// setTimeout(zoomIn , 19250, 975, 42, 384, 216);


// previous ending post zoom
//  975 42 384 216
