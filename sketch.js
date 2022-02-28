// working collage

// set the total amount of images to make
let totalArt = 0;

let t = 0;
//let p = 100;

let pixelation_level = 10;

//const fadeSpeed = 1;

let backgroundImage;
let flowers = [];

// this function will load all media before setup()
function preload() {
  // load an image for the background
  //backgroundImage = loadImage('leaves.jpg');

  // load the rest of the images
  // change 5 to match your total number of images
  for (let i = 0; i < 11; i++) {
    flowers[i] = loadImage('assets/' + i + '.png');
  }
}


function setup() {
  //createCanvas(512, 512);
  createCanvas(windowWidth, windowHeight);
  background(0); //needs to be here so no overlap
  
  setInterval(makeCollage, 1000); //higher number slows the change in images down

 // p = p - .01;
  pixelDensity(.15);

  //image(img, 0, 0, width, height);
  //image(flowers, 0, 0, width, height);
  for(i = 0; i < flowers.length; i++){
    //image(flowers[i], i*200, 0, width, height); // (variable for the image, x, y, w, h)
    image(flowers[i], this.x, this.y, this.w, this.w);
    } 

  loadPixels();
  //smooth();
  noStroke();
  
  
  for (let x = 0; x < width; x += pixelation_level) {
    for (let y = 0; y < height; y += pixelation_level) {
      
      let i = (x + y * width) * 4;

      let r = pixels[i + 0];
      let g = pixels[i + 1];
      let b = pixels[i + 2];
      let a = pixels[i + 3];

      fill(r, g, b, a);
      square(x, y, pixelation_level);
    }
  }

  // if (mouseIsPressed === true) {
  //   setInterval(makeCollage, 500);
  // } else {
  //   setInterval(makeCollage, 50);
  // }

  // if (mouseIsPressed) {
  //   p = p - 50;
  // }

}

function makeCollage() {

  // if (mouseIsPressed) {
  //   p = p - 50;
  // }

  if (t <= totalArt) {
    
    //image(backgroundImage, 0, 0, 512, 512);
    //background(255); 
    background(0); // needs to be in both

    let totalItems = random(30, 50);
    
    let items = [];

    for (let i = 0; i < totalItems; i++) {
      items.push(new Item());
    }

    for (let i = 0; i < items.length; i++) {
      items[i].display();
    }

    // saveCanvas('art' + t, 'png');
    // t++
  }
}

// function draw() {
// }

class Item {
  constructor() {
    this.w = random(200, 400);
    this.x = random(200, width -500);
    this.y = random(200, height -500);
    this.flower = random(flowers);
  }

  display() {
    //this.flower += fadeSpeed;
    image(this.flower, this.x, this.y, this.w, this.w);
  }
}



function mousePressed() {
  if (value === 0) {
    p = 50;
  } else {
    p = 500;
  }
}




// // funky

// //let cam;
// let img;
// let step = 6;
// let images = [];

// function preload() {
//   for (let i = 0; i < 3; i++) {
//     images[i] = loadImage('assets/' + i + '.png');
//   }
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);

//   //create a video capture object
//   //cam = createCapture(VIDEO);
//   //img = loadImage("assets/die.png");
//   //image(img, 0, 0, 50, 100);

//   //the createCapture() function creates an HTML video tag
//   //as well as pulls up image to be used in p5 canvas
//   //hide() function hides the HTML video element
//   //cam.hide();
//   //img.hide();

//   //don't draw strokes for my shapes
//   noStroke();

//   background(0); //needs to be here so no overlap

//   setInterval(makeCollage, 1000); //higher number slows the change in images down

//  }

// // function makeCollage() {

// //   if (t <= totalArt) {
    
// //     //image(backgroundImage, 0, 0, 512, 512);
// //     //background(255); 
// //     background(0); // needs to be in both

// //     let totalItems = random(5, 30);
    
// //     let items = [];

// //     for (let i = 0; i < totalItems; i++) {
// //       items.push(new Item());
// //     }

// //     for (let i = 0; i < items.length; i++) {
// //       items[i].display();
// //     }

// //     // saveCanvas('art' + t, 'png');
// //     // t++
// //   }
// // }


// function draw() {
//   //set alpha of background redraw to 10 (out of 255)
//   background(255, 10);

//   //load pixels of the camera feed
//   //cam.loadPixels();
//   images.loadPixels();
//   image(images[i], i*200, 0, 600/3, 450/3);
//   //image(img, 0, 0, 50, 100);
//   //img.width = 20;
//   //img.height = 60;


//   //loop through pixels of the image in 2 dimensions
//   //why do we have y loop outside of x loop?
//   //why do we increment by step value? why not go through every single pixels?
//   // for (let y = 0; y < cam.height; y += step) {
//   //     for (let x = int(cam.width / 4); x < int(cam.width / 4 * 3); x += step) {

//     for (let y = 0; y < images.height; y += step) {
//           for (let x = int(images.width / 4); x < int(images.width / 4 * 3); x += step) {



//       //calculate the index of the pixel on the (x, y) coordinate
//       //Why do we times it by 4?
//       //WHY / HOW DO WE CALCULATE THIS?
//       //let i = (y * cam.width + x) * 4;
//       let i = (y * images.width + x) * 4;

//       //save the red, green, blue and alpha values of the pixel
//       // let r = cam.pixels[i];
//       // let g = cam.pixels[i + 1];
//       // let b = cam.pixels[i + 2];
//       // let a = cam.pixels[i + 3];

//       let r = images.pixels[i];
//       let g = images.pixels[i + 1];
//       let b = images.pixels[i + 2];
//       let a = images.pixels[i + 3];

//       //map the x and y coordinates of the webcam feed to match the resolution of the canvas
//       //webcam resolution is 640 x 480
//       //   let mappedX = map(x, cam.width / 4 * 3, cam.width / 4, 0, width);
//       // let mappedY = map(y, 0, cam.height, 0, height);

//       let mappedX = map(x, images.width / 4 * 3, images.width / 4, 0, width);
//       let mappedY = map(y, 0, images.height, 0, height);

//       //draw rectangles with colors of the pixel
//       fill(r, g, b, a);
//       //using mappedX and mappedY as x and y coordinate of the ellipse
//       //with size of 20 x 20 pixels
//       ellipse(mappedX, mappedY, 30, 30);
//     }
//   }
// }

// // class Item {
// //   constructor() {
// //     this.w = random(40, 200);
// //     this.x = random(20, width - 40);
// //     this.y = random(20, height - 40);
// //     this.img = random(images);
// //   }

// //   display() {
// //     image(this.img, this.x, this.y, this.w, this.w);
// //   }
// // }









// // working collage

// // set the total amount of images to make
// let totalArt = 0;

// let t = 0;

// let backgroundImage;
// let flowers = [];

// // this function will load all media before setup()
// function preload() {
//   // load an image for the background
//   //backgroundImage = loadImage('leaves.jpg');

//   // load the rest of the images
//   // change 5 to match your total number of images
//   for (let i = 0; i < 3; i++) {
//     flowers[i] = loadImage('assets/' + i + '.png');
//   }
// }


// function setup() {
//   //createCanvas(512, 512);
//   createCanvas(windowWidth, windowHeight);
//   background(0); //needs to be here so no overlap

//   setInterval(makeCollage, 1000); //higher number slows the change in images down
// }

// function makeCollage() {

//   if (t <= totalArt) {
    
//     //image(backgroundImage, 0, 0, 512, 512);
//     //background(255); 
//     background(0); // needs to be in both

//     let totalItems = random(5, 30);
    
//     let items = [];

//     for (let i = 0; i < totalItems; i++) {
//       items.push(new Item());
//     }

//     for (let i = 0; i < items.length; i++) {
//       items[i].display();
//     }

//     // saveCanvas('art' + t, 'png');
//     // t++
//   }
// }

// // function draw() {
// // }

// class Item {
//   constructor() {
//     this.w = random(40, 200);
//     this.x = random(20, width - 40);
//     this.y = random(20, height - 40);
//     this.flower = random(flowers);
//   }

//   display() {
//     image(this.flower, this.x, this.y, this.w, this.w);
//   }
// }









// //fail
// // 8 nights of Hanukkah 2016 Examples
// // Night 7: Animated Circle Packing
// // Expansion of: https://youtu.be/XATr_jdh-44
// // Daniel Shiffman
// // http://codingrainbow.com/

// // All the circles
// var flowers = [];

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   // Start with a big one in the center in the hopes that it
//   // takes up a lot of a space and the sketch runs faster
//   //   for (let i = 0; i < 5; i++) {
//   //   flowers[i] = loadImage('flowers/' + i + '.png');
//   // }
//   flowers.push(new Circle(width / 2, height / 2, min(width, height) / 3));
// }

// function draw() {
//   //background(0);
  
//   // All the circles
//   for (var i = 0; i < flowers.length; i++) {
//     var c = flowers[i];
//     c.show();
    
//     // Is it a growing one?
//     if (c.growing) {
//       c.grow();
//       // Does it overlap any previous circles?
//       for (var j = 0; j < flowers.length; j++) {
//         var other = flowers[j];
//         if (other != c) {
//           var d = dist(c.x, c.y, other.x, other.y);
//           if (d - 1 < c.r + other.r) {
//             c.growing = false;
//           }
//         }
//       }
      
//       // Is it stuck to an edge?
//       if (c.growing) {
//         c.growing = !c.edges();
//       }
//     }
//   }
  
//   // Let's try to make a certain number of new circles each frame
//   // More later
//   var target = 1 + constrain(floor(frameCount / 120), 0, 20);
//   // How many
//   var count = 0;
//   // Try N times
//   for (var i = 0; i < 1000; i++) {
//     if (addCircle()) {
//       count++;
//     }
//     // We made enough
//     if (count == target) {
//       break;
//     }
//   }
  
//   // We can't make any more
//   if (count < 1) {
//     noLoop();
//     console.log("finished");
//   }
// }

// // Add one circle
// function addCircle() {
//   // Here's a new circle
//   var newCircle = new Circle(random(width), random(height), 1);
//   // Is it in an ok spot?
//   for (var i = 0; i < flowers.length; i++) {
//     var other = flowers[i];
//     var d = dist(newCircle.x, newCircle.y, other.x, other.y);
//     if (d < other.r + 4) {
//       newCircle = undefined;
//       break;
//     }
//   }
//   // If it is, add it
//   if (newCircle) {
//     flowers.push(newCircle);
//     return true;
//   } else {
//     return false;
//   }
// }

// // Circle object
// function Circle(x, y, r) {
//   this.growing = true;
//   this.x = x;
//   this.y = y;
//   this.r = r;
//   this.flower = random(flowers);
// }

// // Check stuck to an edge
// Circle.prototype.edges = function() {
//   return (this.r > width - this.x || this.r > this.x || this.r > height - this.y || this.r > this.y);
// }

// // Grow
// Circle.prototype.grow = function() {
//   this.r += 0.5;
// }

// // Show
// Circle.prototype.show = function() {
//   noFill();
//   strokeWeight(1.5);
//   stroke(255, 0, 175, 225);
//   //ellipse(this.x, this.y, this.r * 2);
//   image(this.flower, this.x, this.y, this.r, this.r);
// }













// // collage and circle packing
// //fail
// // set the total amount of images to make
// //let totalArt = 0;

// //let t = 0;

// //let backgroundImage;
// let flowers = [];


// function setup() {
//   //createCanvas(512, 512);
//   createCanvas(windowWidth, windowHeight);
//   background(0); //needs to be here so no overlap

//   //setInterval(makeCollage, 1000); //higher number slows the change in images down

//   // for (let i = 0; i < 5; i++) {
//   //   flowers[i] = loadImage('flowers/' + i + '.png');
//   // }

//   smooth();
//   //noLoop();
  
//   n = 1600;
  
//   // put bounding circles
//   flowers.push(new Circ(-10, height/2, 20));
//   flowers.push(new Circ(width+10, height/2, 20));
//   flowers.push(new Circ(width/2, -10, 20));
//   flowers.push(new Circ(width/2, height+10, 20));
// }

// function draw() {
//   if (flowers.length < n) {
//     flowers.push(new Circ());  
//   }
  
//   background(255);
//   for (var i=0; i<flowers.length; i++) {
//     flowers[i].draw();
//   }
// }

// function distBetweenCircles(circle1, circle2) {
//   return (dist(circle1.x, circle1.y, circle2.x, circle2.y) - 0.5*(circle1.r + circle2.r));
// }
  
// function Circ(x_, y_, r_) {
  
//   if (x_===undefined) {
//     do {
//       done = true;
//       this.x = random(width);
//       this.y = random(height);
//       this.r = 1;
      
//       minDist = width;
//       for (var i=0; i<flowers.length; i++) {
//         var dOther = distBetweenCircles(this, flowers[i]);
//         if (dOther < 0) done = false;
//         else {
//           if (dOther < minDist) minDist = dOther;
//         }
//       }
//     } while(!done);
//     this.r += minDist;
//   }
//   else {
//     this.x = x_;
//     this.y = y_;
//     this.r = r_;
//     this.flower = random(flowers);
//   }

//   this.draw = function() {
//     push();
//     translate(this.x, this.y);
//    // noFill();
//    // stroke(0);
//     //ellipse(0, 0, this.r, this.r);
//     image(this.flower, this.x, this.y, this.r, this.r);
//     pop();
//   }
// }
// // function draw() {
// // }

// // class Item {
// //   constructor() {
// //     this.w = random(40, 200);
// //     this.x = random(20, width - 40);
// //     this.y = random(20, height - 40);
// //     this.flower = random(flowers);
// //   }

// //   display() {
// //     image(this.flower, this.x, this.y, this.w, this.w);
// //   }
// // }








// // funky

// //let cam;
// let img;
// let step = 6;
// let images = [];

// function preload() {
//   images[0] = loadImage('assets/little man.png.webp');
//   images[1] = loadImage('assets/die.png');
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);

//   //create a video capture object
//   //cam = createCapture(VIDEO);
//   //img = loadImage("assets/die.png");
//   //image(img, 0, 0, 50, 100);

//   //the createCapture() function creates an HTML video tag
//   //as well as pulls up image to be used in p5 canvas
//   //hide() function hides the HTML video element
//   //cam.hide();
//   //img.hide();

//   //don't draw strokes for my shapes
//   noStroke();

// // }

// function draw() {
//   //set alpha of background redraw to 10 (out of 255)
//   background(255, 10);

//   //load pixels of the camera feed
//   //cam.loadPixels();
//   images.loadPixels();
//   image(images[i], i*200, 0, 600/3, 450/3);
//   //image(img, 0, 0, 50, 100);
//   //img.width = 20;
//   //img.height = 60;


//   //loop through pixels of the image in 2 dimensions
//   //why do we have y loop outside of x loop?
//   //why do we increment by step value? why not go through every single pixels?
//   // for (let y = 0; y < cam.height; y += step) {
//   //     for (let x = int(cam.width / 4); x < int(cam.width / 4 * 3); x += step) {

//     for (let y = 0; y < images.height; y += step) {
//           for (let x = int(images.width / 4); x < int(images.width / 4 * 3); x += step) {



//       //calculate the index of the pixel on the (x, y) coordinate
//       //Why do we times it by 4?
//       //WHY / HOW DO WE CALCULATE THIS?
//       //let i = (y * cam.width + x) * 4;
//       let i = (y * images.width + x) * 4;

//       //save the red, green, blue and alpha values of the pixel
//       // let r = cam.pixels[i];
//       // let g = cam.pixels[i + 1];
//       // let b = cam.pixels[i + 2];
//       // let a = cam.pixels[i + 3];

//       let r = images.pixels[i];
//       let g = images.pixels[i + 1];
//       let b = images.pixels[i + 2];
//       let a = images.pixels[i + 3];

//       //map the x and y coordinates of the webcam feed to match the resolution of the canvas
//       //webcam resolution is 640 x 480
//       //   let mappedX = map(x, cam.width / 4 * 3, cam.width / 4, 0, width);
//       // let mappedY = map(y, 0, cam.height, 0, height);

//       let mappedX = map(x, images.width / 4 * 3, images.width / 4, 0, width);
//       let mappedY = map(y, 0, images.height, 0, height);

//       //draw rectangles with colors of the pixel
//       fill(r, g, b, a);
//       //using mappedX and mappedY as x and y coordinate of the ellipse
//       //with size of 20 x 20 pixels
//       ellipse(mappedX, mappedY, 30, 30);
//     }
//   }
// }








// //weird 3d thing
// let img;
// function preload(){
//     img = loadImage("assets/die.png");

// }

// function setup() {
//   createCanvas(windowWidth, windowHeight, WEBGL);
//   img.resize(200, 200);
//   camera(0, 0, 1000, 0, 0, 0, 0, 1, 0);
  
// }

// function draw() {
//   //background(2,13,19);
//   //background(0,13,29);
//   background(255);
  
//   fill(0);
//   noStroke();
//   let tiles = 50; //for better frames use <50, for better looks use >125
  
//   orbitControl();
  
//   let tileSize = width/tiles;
  
//   push();
  
//   //translate(width/2,height/2);
//   //rotateY(radians(frameCount)); //allows tiles to rotate
  
//   for (let x = 0; x < tiles; x++) {
//     for (let y = 0; y < tiles; y++) {
//       let c = img.get(int(x*tileSize),int(y*tileSize));
//       //fill(c); //keep fill if images have color
//       let b = map(brightness(c),0,100,1,0);
//       let z = map(b,0,1,-300,300);
      
//       fill(0);
      
//       //gradient
//       //let red = map(b, 0, 1, 214, 110);
//       //let green = map(b, 0, 1, 0, 18);
//       //let blue = map(b, 0, 1, 121, 160);
//       //fill(c); //remove if image has color
//       //fill(red, green, blue);
      
//       push();
//       translate(x*tileSize - width/2, y*tileSize - height/2, z);
//       sphere(tileSize*b*0.7); //tiles stroke
//       pop();

//     }
//   }
//   pop();
//   image(img,0,0);
// }

// function keyPressed() {

//   // If you hit the s key, save an image
//   if (key == 's') {
//     save("mySketch.jpg");
//   }
// }








// //circle packing and pixels
// var n;
// var circles = [];

// let pixelation_level = 10;
// let img;

// function preload() {
//   img = loadImage("assets/die.jpg"); 
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   smooth();
//   image(img, 0, 0, width, height);
//   //noLoop();
  
//   n = 1600;
  
//   // put bounding circles
//   circles.push(new Circ(-10, height/2, 20));
//   circles.push(new Circ(width+10, height/2, 20));
//   circles.push(new Circ(width/2, -10, 20));
//   circles.push(new Circ(width/2, height+10, 20));

//   pixelDensity(1);
//   loadPixels();
//   strokeWeight(10); 
//   //noStroke();

//   for (let x = 0; x < width; x += pixelation_level) {
//     for (let y = 0; y < height; y += pixelation_level) {
      
//       let i = (x + y * width) * 4;

//       let r = pixels[i + 0];
//       let g = pixels[i + 1];
//       let b = pixels[i + 2];
//       let a = pixels[i + 3];

//       fill(r, g, b, a);
//       square(x, y, pixelation_level);
//     }
//   }

// }

// function draw() {
//   if (circles.length < n) {
//     circles.push(new Circ());  
//   }
  
//   //background(255);
//   for (var i=0; i<circles.length; i++) {
//     circles[i].draw();
//   }
// }

// function distBetweenCircles(circle1, circle2) {
//   return (dist(circle1.x, circle1.y, circle2.x, circle2.y) - 0.5*(circle1.r + circle2.r));
// }
  
// function Circ(x_, y_, r_) {
  
//   if (x_===undefined) {
//     do {
//       done = true;
//       this.x = random(width);
//       this.y = random(height);
//       this.r = 1;
      
//       minDist = width;
//       for (var i=0; i<circles.length; i++) {
//         var dOther = distBetweenCircles(this, circles[i]);
//         if (dOther < 0) done = false;
//         else {
//           if (dOther < minDist) minDist = dOther;
//         }
//       }
//     } while(!done);
//     this.r += minDist;
//   }
//   else {
//     this.x = x_;
//     this.y = y_;
//     this.r = r_;
//   }

//   this.draw = function() {
//     push();
//     translate(this.x, this.y);
//     noFill();
//     stroke(0);
//     ellipse(0, 0, this.r, this.r);
//     pop();
//   }
// }





// // pixelation and circle packing

// //images
// let man;
// let dice;
// let img;
// let pixelation_level = 10;

// //circle packing 
// var circles = [];

// function preload() {
//   //background(0);
//   //img = loadImage("assets/vaccine.jpg"); //https://thispersondoesnotexist.com/
//   //createCanvas(windowWidth, windowHeight);

//   //images
//   man = loadImage("assets/little man.png.webp");
//   dice = loadImage("assets/die.png");

//   //circles
//   circles.push(new Circle(width / 2, height / 2, min(width, height) / 3));
// }

// function setup() {
//   background(0);
  
//   createCanvas(windowWidth, windowHeight);
//   //x1 = random(0,500);
//   //x2 = random(0,500);
  
//   //pixelation of iamges
//   pixelDensity(1);
//   image(dice, random(-10, 100), random(-4, 400)); //which image, placement, size
//   image(man, random(-10, 100), random(-4, 400));
//   loadPixels();
//   //print(pixels[0], pixels[1], pixels[2], pixels[3]);
//   noStroke();
  
  
//   for (let x = 0; x < width; x += pixelation_level) {
//     for (let y = 0; y < height; y += pixelation_level) {
      
//       let i = (x + y * width) * 4;

//       let r = pixels[i + 0];
//       let g = pixels[i + 1];
//       let b = pixels[i + 2];
//       let a = pixels[i + 3];

//       fill(r, g, b, a);
//       square(x, y, pixelation_level);
//     }
//   }


//   //circle packing
//     // All the circles
//     for (var i = 0; i < circles.length; i++) {
//       var c = circles[i];
//       c.show();
      
//       // Is it a growing one?
//       if (c.growing) {
//         c.grow();
//         // Does it overlap any previous circles?
//         for (var j = 0; j < circles.length; j++) {
//           var other = circles[j];
//           if (other != c) {
//             var d = dist(c.x, c.y, other.x, other.y);
//             if (d - 1 < c.r + other.r) {
//               c.growing = false;
//             }
//           }
//         }
        
//         // Is it stuck to an edge?
//         if (c.growing) {
//           c.growing = !c.edges();
//         }
//       }
//     }
    
//     // Let's try to make a certain number of new circles each frame
//     // More later
//     var target = 1 + constrain(floor(frameCount / 120), 0, 20);
//     // How many
//     var count = 0;
//     // Try N times
//     for (var i = 0; i < 1000; i++) {
//       if (addCircle()) {
//         count++;
//       }
//       // We made enough
//       if (count == target) {
//         break;
//       }
//     }
    
//     // We can't make any more
//     if (count < 1) {
//       noLoop();
//       console.log("finished");
//     }
//   }




// // Add one circle
// function addCircle() {
//   // Here's a new circle
//   var newCircle = new Circle(random(width), random(height), 1);
//   // Is it in an ok spot?
//   for (var i = 0; i < circles.length; i++) {
//     var other = circles[i];
//     var d = dist(newCircle.x, newCircle.y, other.x, other.y);
//     if (d < other.r + 4) {
//       newCircle = undefined;
//       break;
//     }
//   }
//   // If it is, add it
//   if (newCircle) {
//     circles.push(newCircle);
//     return true;
//   } else {
//     return false;
//   }
// }

// // Circle object
// function Circle(x, y, r) {
//   this.growing = true;
//   this.x = x;
//   this.y = y;
//   this.r = r;
// }

// // Check stuck to an edge
// Circle.prototype.edges = function() {
//   return (this.r > width - this.x || this.r > this.x || this.r > height - this.y || this.r > this.y);
// }

// // Grow
// Circle.prototype.grow = function() {
//   this.r += 0.5;
// }

// // Show
// Circle.prototype.show = function() {
//   noFill();
//   strokeWeight(1.5);
//   stroke(255, 0, 175, 225);
//   ellipse(this.x, this.y, this.r * 2);
// }







// // pixelation
// let man;
// let dice;
// let img;
// let pixelation_level = 10;

// function preload() {
//   //background(0);
//   //img = loadImage("assets/vaccine.jpg"); //https://thispersondoesnotexist.com/
//   //createCanvas(windowWidth, windowHeight);
//   man = loadImage("assets/little man.png.webp");
//   dice = loadImage("assets/die.png");
// }

// function setup() {
//   background(0, 200, 50);
  
//   createCanvas(windowWidth, windowHeight);
//   //x1 = random(0,500);
//   //x2 = random(0,500);

//   pixelDensity(1);
//   image(dice, random(-10, 100), random(-4, 400)); //which image, placement, size
//   image(man, random(-10, 100), random(-4, 400));
//   loadPixels();
//   //print(pixels[0], pixels[1], pixels[2], pixels[3]);
//   noStroke();
  
  
//   for (let x = 0; x < width; x += pixelation_level) {
//     for (let y = 0; y < height; y += pixelation_level) {
      
//       let i = (x + y * width) * 4;

//       let r = pixels[i + 0];
//       let g = pixels[i + 1];
//       let b = pixels[i + 2];
//       let a = pixels[i + 3];

//       fill(r, g, b, a);
//       square(x, y, pixelation_level);
//     }
//   }
// }






// //fade
// let img;

// function setup() {
//   createCanvas(400, 400);
// loadImage('https://upload.wikimedia.org/wikipedia/commons/e/ef/Hayao_Miyazaki.jpg', img => {
//     image(img, 0, 0);
//   });
//   noStroke();
// }

// function draw() {
//   let c = img.get(mouseX, mouseY);
//   fill(c);
//   circle(mouseX, mouseY, 30);
// }





// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   img = loadImage("assets/vaccine.jpg");
// }
 
// function draw() {
// let img = createImage(66, 66);
// img.loadPixels();
// for (let i = 0; i < img.width; i++) {
//   for (let j = 0; j < img.height; j++) {
//     img.set(i, j, color(0, 90, 102, (i % img.width) * 2));
//   }
// }
// img.updatePixels();
// image(img, 17, 17);
// image(img, 34, 34);
// }





// //processign sketch that doesnt work
// let seahare;


// let x = 0;
// let y = 0;

// function preload() {
//   //createCanvas(windowWidth, windowHeight);
//   //img = loadImage("assets/vaccine.jpg");
//   //seahare = loadImage("assete/vaccine.jpg");
//   // seahare.resize(400, 400);
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   seahare = loadImage("assete/vaccine.jpg");
//   seahare.resize(400, 400);
//   background(0);
// }

// function draw() {

//   seahare.loadPixels();

//   for (let x = 0; x < seahare.width; x += 4) {
//     for (let y = 0; y < seahare.height; y += 4) {

//       let offset = ((y * seahare.width) + x) * 4;
//       let r = seahare.pixels[offset + 0];
//       let g = seahare.pixels[offset + 1];
//       let b = seahare.pixels[offset + 2];
//       let a = seahare.pixels[offset + 3];

//       fill(r, g, b);
//       noStroke();
//       // square(x, y, 1);
//       rect(x + map(sin((x / 10) + frameCount * 0.1), -1, -1, -10, 10), y + map(sin((x / 10) + frameCount * 0.1), -1, -1, -10, 10));

//       }

//     }
//   }







// //rasterizing images
// //color FG = #111111;
// //color BG = #f1f1f1;
// let img; 

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   img = loadImage("assets/vaccine.jpg");
// }

// function draw() {
//   background(0);
//   fill(255);
//   noStroke();

//   let ratio = float(height)/float(width);
//   let tilesX = map(mouseX, 0, width, 10, 100);
//   let tilesY = ratio * tilesX;
//   let tileSize = width / tilesX;
  
//   //let x = 0;
//   //let y = 0;

//   for (y = 0; y < img.height; y += tileSize) {
//     for (x = 0; x < img.width; x += tileSize) {
//        c = img.get(x, y);
//        b = map(brightness(c), 0, 255, 1, 0);

//       // Open a new matrix
//       pushMatrix();

//       // set the position
//       translate(x, y);

//       // Draw the tile
//       rect(0, 0, b * tileSize, b * tileSize);

//       // close matrix
//       popMatrix();
//     } // x
//   } // y
// } // draw()


// color FG = #111111;
// color BG = #f1f1f1;
// PImage img; 

// void setup() {
//   size(500, 700); 
//   background(BG);
//   img = loadImage("woman.jpg");
//   img.resize(500, 700);
// }

// void draw() {
//   background(BG);
//   fill(FG);
//   noStroke();
//   float ratio = float(height)/float(width);
//   float tilesX = map(mouseX, 0, width, 10, 100);
//   float tilesY = ratio * tilesX;
//   float tileSize = width / tilesX;
//   for (int y = 0; y < img.height; y += tileSize) {
//     for (int x = 0; x < img.width; x += tileSize) {
//       color c = img.get(x, y);
//       float b = map(brightness(c), 0, 255, 1, 0);
//       pushMatrix();
//       translate(x, y);
//       rect(0, 0, b * tileSize, b * tileSize);
//       popMatrix();
//     }
//   }
// }
















// //bubble art & particles
// let img;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   img = loadImage("assets/vaccine.jpg");
//   createCanvas(720, 400);
//   for(let i = 0;i<width/10;i++){
//     particles.push(new Particle());
//   }
// }

// function draw() {
//   // Get a random position in the image
//   //let x = floor(random(img.width)); //floor is the closest int value that is less than or equal to the value of the parameter
//   //let y = floor(random(img.height));
//   let c = img;

//   // Set that pixel to black
//   //let black = color(0); //turns individual pixels black
//   // img.loadPixels();
//   // img.set(xp, yp, c); //c is color of pixel
//   // img.updatePixels();

//   image(img, 0, 0);

//   for(let i = 0;i<particles.length;i++) {
//     particles[i].createParticle();
//     particles[i].moveParticle();
//   }
// }


// // this class describes the properties of a single particle.
// class Particle {
//   // setting the co-ordinates, radius and the
//   // speed of a particle in both the co-ordinates axes.
//     constructor(){
//       // img.loadPixels();
//       // img.set(xp, yp, c); //c is color of pixel
//       // img.updatePixels();
//       this.xp = random(0,width);
//       this.yp = random(0,height);
//       this.r = random(1,8);
//       this.xSpeed = random(-2,2);
//       this.ySpeed = random(-1,1.5);
//       this.color = c;
//     }
  
//   // creation of a particle.
//     createParticle() {
//       noStroke();
//       //fill('rgba(200,169,169,0.5)');
//       fill(img);
//       circle(this.xp,this.yp,this.r);
//     }
  
//   // setting the particle in motion.
//     moveParticle() {
//       if(this.xp < 0 || this.xp > width)
//         this.xSpeed*=-1;
//       if(this.yp < 0 || this.yp > height)
//         this.ySpeed*=-1;
//       this.xp+=this.xSpeed;
//       this.yp+=this.ySpeed;
//     }

//     // this function creates the connections(lines)
// // between particles which are less than a certain distance apart
//   joinParticles(particles) {
//     particles.forEach(element =>{
//       let dis = dist(this.xp,this.yp,element.x,element.y);
//       if(dis<85) {
//         //stroke('rgba(255,255,255,0.04)');
//         line(this.x,this.y,element.x,element.y);
//       }
//     });
//   }
// }

// // an array to add multiple particles
// let particles = [];

// // function setup() {
// //   createCanvas(720, 400);
// //   for(let i = 0;i<width/10;i++){
// //     particles.push(new Particle());
// //   }
// // }

// // function draw() {
// //   //background('#0f0f0f');
// //   for(let i = 0;i<particles.length;i++) {
// //     particles[i].createParticle();
// //     particles[i].moveParticle();
// //     //particles[i].joinParticles(particles.slice(i));
// //   }
// // }



// /*  //black and white dots
// let img;
// let capture;

// function preload() {
//   img = loadImage('assets/vaccine.jpg');
// }

// function setup() {
//   createCanvas(640, 480);
//   //background(50);
//   // Top-left corner of the img is at (10, 10)
//   // Width and height are 50 x 50
//   //image(img, 10, 10, 50, 50);
//   //img = loadImage('assets/vaccine.jpg');
//   //capture = createCapture(VIDEO);
//   //img.size(640, 480);
//   //img.hide();
//   noStroke();
//   fill(0);

// }

// function draw() {
//   background(255);
//   image(img, 10, 10, 50, 50);
//   img.loadPixels();
//   const stepSize = round(constrain(mouseX / 8, 6, 32));
//   for (let y = 0; y < height; y += stepSize) {
//     for (let x = 0; x < width; x += stepSize) {
//       const i = y * width + x;
//       const darkness = (255 - img.pixels[i * 4]) / 255;
//       const radius = stepSize * darkness;
//       ellipse(x, y, radius, radius);
//     }
//   }
// }
// */







/* //p5js particle system
// this class describes the properties of a single particle.
class Particle {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
    constructor(){
      this.x = random(0,width);
      this.y = random(0,height);
      this.r = random(1,8);
      this.xSpeed = random(-2,2);
      this.ySpeed = random(-1,1.5);
      this.color = 
    }
  
  // creation of a particle.
    createParticle() {
      noStroke();
      fill('rgba(200,169,169,0.5)');
      circle(this.x,this.y,this.r);
    }
  
  // setting the particle in motion.
    moveParticle() {
      if(this.x < 0 || this.x > width)
        this.xSpeed*=-1;
      if(this.y < 0 || this.y > height)
        this.ySpeed*=-1;
      this.x+=this.xSpeed;
      this.y+=this.ySpeed;
    }

    // this function creates the connections(lines)
// between particles which are less than a certain distance apart
  joinParticles(particles) {
    particles.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis<85) {
        stroke('rgba(255,255,255,0.04)');
        line(this.x,this.y,element.x,element.y);
      }
    });
  }
}

// an array to add multiple particles
let particles = [];

function setup() {
  createCanvas(720, 400);
  for(let i = 0;i<width/10;i++){
    particles.push(new Particle());
  }
}

function draw() {
  background('#0f0f0f');
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    //particles[i].joinParticles(particles.slice(i));
  }
}
*/







/* //circle packing example
var circles;
var img;
var pixelsPerFrame=20;
var growthSpeed=0.1;

function preload() {
  img = loadImage("vaccine.jpg");
}

function setup() {
  createCanvas(img.width,img.height);
  var density = displayDensity();
  pixelDensity(1);
  img.loadPixels();
  circles = [];
}

function draw() {
  image(img, 10, 10, 50, 50);
  background(0);

  var total = pixelsPerFrame;
  var count = 0;
  var attempts = 0;

  while (count < total) {
    var newC = newCircle();
    if (newC !== null) {
      circles.push(newC);
      count++;
    }
    attempts++;
    if (attempts > 1000) {
      noLoop();
      console.log("finished");
      break;
    }
  }

  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];

    if (circle.growing) {
      if (circle.edges()) {
        circle.growing = false;
      } else {
        for (var j = 0; j < circles.length; j++) {
          var other = circles[j];
          if (circle !== other) {
            var d = dist(circle.x, circle.y, other.x, other.y);
            var distance = circle.r + other.r;

            if (d - 1 < distance) {
              circle.growing = false;
              break;
            }
          }
        }
      }
    }

    circle.show();
    circle.grow();
  }
}

function newCircle() {
  var x = random(0, img.width);
  var y = random(0, img.height);

  var valid = true;
  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];
    var d = dist(x, y, circle.x, circle.y);
    if (d - 2 < circle.r) {
      valid = false;
      break;
    }
  }
  if (valid) {
    var index = (int(x) + int(y) * img.width) * 4;
    var r = img.pixels[index];
    var g = img.pixels[index+1];
    var b = img.pixels[index+2];
    var c = color(r,g,b);
    return new Circle(x, y, color(c));
  } else {
    return null;
  }
}
*/

